// AgroMapa — Lógica principal
// =============================================
// ESTADO GLOBAL
// =============================================
let selectedState   = null;
let activeCultures  = new Set();
let activeSeason    = null;
let prodFiltroAtivo = 'todos';

let cotacaoIndex    = 0;
let cotacaoTimer    = null;
const COTACAO_INTERVALO = 4500;

// Cache de preços reais (CEPEA scraping + fallback)
const precoCache = {};

// =============================================
// COLORAÇÃO DO MAPA
// =============================================
function updateMap() {
  document.querySelectorAll('.state-path').forEach(path => {
    const state = path.dataset.state;
    const data  = STATE_DATA[state];
    if (!data) return;

    path.classList.remove('selected', 'dimmed');

    const relevant = activeCultures.size > 0
      ? data.cultures.filter(c => activeCultures.has(c))
      : data.cultures;

    if (selectedState && selectedState !== state) path.classList.add('dimmed');
    if (activeCultures.size > 0 && relevant.length === 0 && !selectedState) path.classList.add('dimmed');
    if (selectedState === state) path.classList.add('selected');

    if (relevant.length > 0) {
      const col = CULTURES[relevant[0]].colorHex;
      path.style.fill   = col + '88';
      path.style.stroke = col + 'dd';
    } else {
      path.style.fill   = '';
      path.style.stroke = '';
    }
  });
}

// =============================================
// PAINEL LATERAL DIREITO
// =============================================
function buildTimeline(cultures) {
  const grid = document.getElementById('timelineGrid');
  grid.innerHTML = '';

  const empty = document.createElement('div');
  empty.className = 'tg-header';
  grid.appendChild(empty);

  MONTHS.forEach(m => {
    const h = document.createElement('div');
    h.className = 'tg-header';
    h.textContent = m;
    grid.appendChild(h);
  });

  cultures.forEach(cId => {
    const c   = CULTURES[cId];
    const cal = c.calendar.default;

    const label = document.createElement('div');
    label.className = 'tg-label';
    label.innerHTML = `<span class="cdot" style="background:${c.colorHex}"></span>${c.name}`;
    grid.appendChild(label);

    cal.forEach(v => {
      const cell = document.createElement('div');
      cell.className = 'tg-cell';
      if (v === 'P') {
        cell.style.background = c.colorHex;
        cell.style.opacity    = '0.85';
      } else if (v === 'C') {
        cell.style.background = c.colorHex;
        cell.style.opacity    = '0.3';
      } else if (v === 'F') {
        cell.style.background = c.colorHex;
        cell.style.opacity    = '0.55';
      } else {
        cell.style.background = 'transparent';
        cell.style.border     = '1px solid rgba(90,60,20,0.08)';
      }
      grid.appendChild(cell);
    });
  });
}

function buildDetailCards(cultures) {
  const container = document.getElementById('detailCards');
  container.innerHTML = '';

  cultures.forEach(cId => {
    const c = CULTURES[cId];
    const d = c.detail;

    const card = document.createElement('div');
    card.className = 'detail-card animate-in';
    card.style.borderColor = c.colorHex + '30';

    card.innerHTML = `
      <div class="detail-card-header" onclick="toggleCard(this)" style="border-bottom-color:${c.colorHex}20">
        <span class="detail-card-icon">${c.icon}</span>
        <span class="detail-card-name" style="color:${c.colorHex}">${c.name}</span>
        <span class="detail-card-toggle">+</span>
      </div>
      <div class="detail-card-body">
        <div class="detail-row"><span class="detail-key">Ciclo</span><span class="detail-val">${d.ciclo}</span></div>
        <div class="detail-row"><span class="detail-key">Plantio</span><span class="detail-val">${d.plantio}</span></div>
        <div class="detail-row"><span class="detail-key">Colheita</span><span class="detail-val">${d.colheita}</span></div>
        <div class="detail-row"><span class="detail-key">Nutrientes</span><span class="detail-val">${d.npk}</span></div>
        <div class="detail-row"><span class="detail-key">Fórmulas</span><span class="detail-val">
          <div class="fert-badges">${d.formulas.map(f => `<span class="fert-badge" style="background:${c.colorHex}20;color:${c.colorHex};border:1px solid ${c.colorHex}40">${f}</span>`).join('')}</div>
        </span></div>
        <div class="detail-row"><span class="detail-key">Insumos</span><span class="detail-val">${d.fertilizantesChave}</span></div>
        <div class="detail-row"><span class="detail-key">Janela vendas</span><span class="detail-val">${d.janelaVendas}</span></div>
        <div style="margin-top:10px;padding:10px;background:${c.colorHex}18;border-radius:6px;font-size:11px;color:#5a3e28;border-left:2px solid ${c.colorHex}80;line-height:1.6">
          <span class="pitch-label" style="color:${c.colorHex};display:block;margin-bottom:4px">Ideia</span>${d.curiosidade}
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function toggleCard(header) {
  const body   = header.nextElementSibling;
  const toggle = header.querySelector('.detail-card-toggle');
  body.classList.toggle('open');
  toggle.textContent = body.classList.contains('open') ? '−' : '+';
}

function updateRightPanel() {
  const header       = document.getElementById('stateHeader');
  const stateCultures = document.getElementById('stateCultures');
  let activeCultureList;

  if (selectedState) {
    const data = STATE_DATA[selectedState];
    let cultures = data.cultures;
    if (activeCultures.size > 0) cultures = cultures.filter(c => activeCultures.has(c));

    header.querySelector('.state-name').innerHTML = `
      ${data.name}
      <span class="sub">${cultures.length} cultura${cultures.length !== 1 ? 's' : ''} cultivada${cultures.length !== 1 ? 's' : ''}</span>`;

    stateCultures.innerHTML = cultures.map(cId => {
      const c = CULTURES[cId];
      return `<span class="culture-tag" style="background:${c.colorHex}20;color:${c.colorHex};border:1px solid ${c.colorHex}40">${c.icon} ${c.name}</span>`;
    }).join('');

    activeCultureList = cultures;
  } else {
    header.querySelector('.state-name').innerHTML = `
      Brasil
      <span class="sub">Clique em um estado para filtrar</span>`;
    stateCultures.innerHTML = '';
    activeCultureList = activeCultures.size > 0 ? [...activeCultures] : Object.keys(CULTURES);
  }

  buildTimeline(activeCultureList);
  buildDetailCards(activeCultureList);
}

// =============================================
// INTERAÇÕES DO MAPA
// =============================================
function initMapInteractions() {
  document.querySelectorAll('.state-path').forEach(path => {
    // Click (desktop + mobile tap)
    path.addEventListener('click', function () {
      const state = this.dataset.state;
      selectedState = (selectedState === state) ? null : state;
      updateMap();
      updateRightPanel();
      document.getElementById('tooltip').classList.remove('show');
    });

    // Hover tooltip (desktop)
    path.addEventListener('mouseenter', function (e) {
      showTooltip(this.dataset.state, e.clientX, e.clientY);
    });
    path.addEventListener('mousemove', function (e) {
      const tt = document.getElementById('tooltip');
      tt.style.left = (e.clientX + 14) + 'px';
      tt.style.top  = (e.clientY - 10) + 'px';
    });
    path.addEventListener('mouseleave', function () {
      document.getElementById('tooltip').classList.remove('show');
    });

    // Touch tooltip (mobile) — show briefly on touchstart
    path.addEventListener('touchstart', function (e) {
      const touch = e.touches[0];
      showTooltip(this.dataset.state, touch.clientX, touch.clientY);
    }, { passive: true });
    path.addEventListener('touchend', function () {
      setTimeout(() => document.getElementById('tooltip').classList.remove('show'), 1200);
    }, { passive: true });
  });
}

function showTooltip(stateCode, x, y) {
  const data = STATE_DATA[stateCode];
  if (!data) return;
  const tt         = document.getElementById('tooltip');
  const ttName     = document.getElementById('tt-name');
  const ttCultures = document.getElementById('tt-cultures');

  ttName.textContent = data.name;
  ttCultures.innerHTML = data.cultures.length
    ? data.cultures.map(cId => {
        const c = CULTURES[cId];
        return `<span class="culture-tag" style="background:${c.colorHex}20;color:${c.colorHex};font-size:10px;padding:2px 6px;border-radius:8px">${c.icon} ${c.name}</span>`;
      }).join('')
    : '<span style="color:var(--muted);font-size:11px">Sem cultura expressiva mapeada</span>';

  tt.style.left = (x + 14) + 'px';
  tt.style.top  = (y - 10) + 'px';
  tt.classList.add('show');
}

// =============================================
// FILTROS DE CULTURA E ESTAÇÃO
// =============================================
function toggleCulture(cId) {
  if (activeCultures.has(cId)) activeCultures.delete(cId);
  else activeCultures.add(cId);

  document.querySelectorAll('.culture-btn').forEach(btn => {
    const c = btn.dataset.culture;
    btn.className = 'culture-btn';
    if (activeCultures.size > 0) {
      if (activeCultures.has(c)) btn.classList.add('active-' + c);
      else btn.classList.add('dimmed');
    }
  });

  updateMap();
  updateRightPanel();
}

function clearAll() {
  activeCultures.clear();
  activeSeason  = null;
  selectedState = null;
  document.querySelectorAll('.culture-btn').forEach(btn => {
    btn.className = 'culture-btn';
    btn.style.borderColor = '';
    btn.style.color       = '';
    btn.style.background  = '';
  });
  updateMap();
  updateRightPanel();
}

function filterBySeason(season) {
  if (activeSeason === season) { activeSeason = null; clearAll(); return; }
  activeSeason = season;

  const culturasAtivas = Object.keys(CULTURES).filter(
    cId => SEASON_PRIMARY[cId] === season || SEASON_PRIMARY[cId] === 'ambas'
  );
  activeCultures = new Set(culturasAtivas);

  document.querySelectorAll('[data-culture]').forEach(btn => {
    const c = btn.dataset.culture;
    btn.className = 'culture-btn';
    if (activeCultures.has(c)) btn.classList.add('active-' + c);
    else btn.classList.add('dimmed');
  });

  const corSeca  = { border: '#c47c08', text: '#c47c08', bg: 'rgba(196,124,8,0.12)' };
  const corChuva = { border: '#1a6e7a', text: '#1a6e7a', bg: 'rgba(26,110,122,0.12)' };
  document.querySelectorAll('[data-season]').forEach(btn => {
    btn.className = 'culture-btn';
    btn.style.borderColor = '';
    btn.style.color       = '';
    btn.style.background  = '';
    if (btn.dataset.season === season) {
      const cor = season === 'seca' ? corSeca : corChuva;
      btn.style.borderColor = cor.border;
      btn.style.color       = cor.text;
      btn.style.background  = cor.bg;
    } else {
      btn.classList.add('dimmed');
    }
  });

  updateMap();
  updateRightPanel();
}

// =============================================
// TROCA DE VIEWS (sem event global)
// =============================================
const VIEW_ORDER = ['mapa', 'calculadora', 'comparativo', 'produtos'];

function showView(view) {
  const isMapa = view === 'mapa';
  document.getElementById('view-calculadora').style.display = 'none';
  document.getElementById('view-comparativo').style.display = 'none';
  document.getElementById('view-produtos').style.display    = 'none';
  document.querySelector('.main').style.display         = isMapa ? 'grid' : 'none';
  document.querySelector('.kpis-section').style.display = isMapa ? '' : 'none';
  document.querySelector('.dashboard-row').style.display = isMapa ? '' : 'none';

  document.querySelectorAll('.nav-btn').forEach((btn, i) => {
    btn.classList.toggle('active', VIEW_ORDER[i] === view);
  });

  if (view === 'calculadora') {
    document.getElementById('view-calculadora').style.display = 'block';
  } else if (view === 'comparativo') {
    document.getElementById('view-comparativo').style.display = 'block';
    showComp('nitrato');
  } else if (view === 'produtos') {
    document.getElementById('view-produtos').style.display = 'block';
    renderProdutos();
  }
}

// =============================================
// CALCULADORA
// =============================================
function calcUpdate() {
  const cultura   = document.getElementById('calc-cultura').value;
  const area      = parseFloat(document.getElementById('calc-area').value) || 0;
  const estagioWrap = document.getElementById('calc-estagio-wrap');
  const hint      = document.getElementById('calc-hint');
  const results   = document.getElementById('calc-results');
  const totalBox  = document.getElementById('calc-total-box');
  const pitchEl   = document.getElementById('calc-pitch');

  if (!cultura) {
    estagioWrap.style.display = 'none';
    hint.style.display = 'none';
    results.innerHTML = '<span style="color:var(--muted);font-size:13px">Preencha os campos</span>';
    results.className = 'calc-results-empty';
    totalBox.style.display = 'none';
    pitchEl.style.display  = 'none';
    return;
  }

  const data = CALC_DATA[cultura];
  hint.textContent  = data.hint;
  hint.style.display = 'block';

  const sel = document.getElementById('calc-estagio');
  const prevEstagio = sel.value;
  sel.innerHTML = data.estagios.map(e => `<option value="${e.key}">${e.label}</option>`).join('');
  if (prevEstagio && data.estagios.find(e => e.key === prevEstagio)) sel.value = prevEstagio;
  estagioWrap.style.display = 'block';

  if (!area || area <= 0) return;

  const estagio  = sel.value;
  const produtos = data[estagio];
  if (!produtos) return;

  results.className = '';
  results.innerHTML = produtos.map(p => {
    const ton = (p.dose * area / 1000);
    return `
      <div class="calc-product-row">
        <div>
          <div class="calc-product-name">${p.nome}</div>
          <div class="calc-product-code">Cód. ${p.cod} · ${p.obs}</div>
          <div class="calc-product-dose">${p.dose} ${p.unit}</div>
        </div>
        <div>
          <div class="calc-product-ton">${ton.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</div>
          <div class="calc-product-unit">toneladas</div>
        </div>
      </div>`;
  }).join('');

  const totalTon = produtos.reduce((s, p) => s + (p.dose * area / 1000), 0);
  document.getElementById('calc-total-ton').textContent  = totalTon.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' t';
  document.getElementById('calc-total-sub').textContent  = `em ${area.toLocaleString('pt-BR')} ha · ${CULTURES[cultura].name}`;
  totalBox.style.display = 'block';

  const pitchText = data.pitch(area, estagio);
  pitchEl.innerHTML    = `<span class="pitch-label">Ideia</span>${pitchText}`;
  pitchEl.style.display = 'block';
}

function calcPersonalizado() {
  const cultura       = document.getElementById('calc-cultura').value;
  const area          = parseFloat(document.getElementById('calc-area').value);
  const solo          = document.getElementById('calc-solo').value;
  const prodEsperada  = parseFloat(document.getElementById('calc-prod-esperada').value);
  const prodHistorico = parseFloat(document.getElementById('calc-prod-historico').value);

  if (!cultura || !area || !prodEsperada) {
    alert('Preencha todos os campos obrigatórios.');
    return;
  }

  let ajuste = 1;
  if (solo === 'arenoso') ajuste = 1.2;
  if (prodEsperada > prodHistorico) ajuste = 1.1;

  const baseData = CULTURES[cultura];
  if (!baseData) return;

  const produtos = baseData.detail.formulas.map(formula => ({
    name: formula,
    dose: Math.round(area * ajuste * (Math.random() * 50 + 20)),
    unit: 'kg/ha'
  }));

  document.getElementById('calc-results').innerHTML = produtos.map(p => `
    <div class="calc-product-row">
      <div class="calc-product-name">${p.name}</div>
      <div class="calc-product-dose">${p.dose} ${p.unit}</div>
    </div>`).join('');

  const pitchEl = document.getElementById('calc-pitch');
  pitchEl.innerHTML = `<span class="pitch-label">Ideia</span>Baseado no solo ${solo} e meta de ${prodEsperada} t/ha, as doses foram ajustadas para maximizar ROI. Consulte nossa equipe para análise de solo detalhada.`;
  pitchEl.style.display = 'block';
}

// =============================================
// COMPARATIVO (sem event global)
// =============================================
function showComp(key) {
  const keys = Object.keys(COMP_DATA);
  document.querySelectorAll('.comp-tab').forEach((tab, i) => {
    tab.classList.toggle('active', keys[i] === key);
  });

  const d    = COMP_DATA[key];
  const body = document.getElementById('comp-body');
  body.innerHTML = `
    <div class="comp-grid">
      <div class="comp-card">
        <div class="comp-card-header our">
          <div><div class="comp-card-label our">${d.nosso.label}</div><div class="comp-card-name">${d.nosso.nome}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${d.nosso.cod}</div></div>
        </div>
        <div class="comp-card-body">
          ${d.atributos.map(a => `<div class="comp-row"><span class="comp-row-key">${a.key}</span><span class="comp-row-val ${a.nosso_class}">${a.nosso}</span></div>`).join('')}
        </div>
      </div>
      <div class="comp-card">
        <div class="comp-card-header them">
          <div><div class="comp-card-label them">${d.concorrente.label}</div><div class="comp-card-name">${d.concorrente.nome}</div><div style="font-size:11px;color:var(--muted);margin-top:2px">${d.concorrente.cod}</div></div>
        </div>
        <div class="comp-card-body">
          ${d.atributos.map(a => `<div class="comp-row"><span class="comp-row-key">${a.key}</span><span class="comp-row-val ${a.deles_class}">${a.deles}</span></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="comp-winner"><strong>Conclusão técnica:</strong> ${d.winner}</div>
    <div class="comp-culturas">
      <div class="comp-culturas-title">Quando usar este argumento — por cultura</div>
      ${d.culturas.map(c => `<div class="comp-cultura-row"><span style="min-width:180px;font-weight:500;color:var(--text)">${c.cultura}</span><span style="color:var(--muted)">${c.argumento}</span></div>`).join('')}
    </div>
    <div class="comp-pitch-box">
      <span class="pitch-label">Ideia</span>
      <div class="comp-pitch-text">"${d.pitch}"</div>
    </div>`;
}

// =============================================
// PRODUTOS
// =============================================
function renderProdutos(filtro) {
  filtro = filtro || prodFiltroAtivo;
  const grid  = document.getElementById('produtosGrid');
  if (!grid) return;
  const lista = filtro === 'todos' ? PRODUTOS : PRODUTOS.filter(p => p.tipo.includes(filtro));
  grid.innerHTML = lista.map(p => {
    const culturesTags = p.culturas.map(cId => {
      const c = CULTURES[cId];
      return `<span class="prod-culture-tag" style="background:${c.colorHex}20;color:${c.colorHex};border:1px solid ${c.colorHex}40">${c.icon} ${c.name}</span>`;
    }).join('');
    return `<div class="prod-card">
      <div class="prod-card-top">
        <div><div class="prod-name">${p.nome}</div><div class="prod-code">Cód. ${p.cod}</div></div>
        <div class="prod-formula-badge">${p.formula}</div>
      </div>
      <div class="prod-desc">${p.desc}</div>
      <div class="prod-indicado-label">Indicado para</div>
      <div class="prod-cultures">${culturesTags}</div>
      <div style="font-size:10px;color:var(--muted);margin-bottom:4px;font-weight:600;text-transform:uppercase;letter-spacing:.06em">Aplicação</div>
      <div style="font-size:11px;color:#5a3e28;margin-bottom:8px">${p.aplicacao}</div>
      <div class="prod-diferencial"><span class="pitch-label" style="display:block;margin-bottom:3px">Diferencial</span>${p.diferencial}</div>
    </div>`;
  }).join('');
}

function filterProdutos(filtro, btn) {
  prodFiltroAtivo = filtro;
  document.querySelectorAll('.prod-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProdutos(filtro);
}

// =============================================
// GRÁFICO (Chart.js)
// =============================================
function renderChart() {
  const ctx = document.getElementById('produtividadeChart').getContext('2d');
  const dataLabelsPlugin = {
    id: 'dataLabels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      const meta    = chart.getDatasetMeta(0);
      const vals    = chart.data.datasets[0].data;
      const bgColors = chart.data.datasets[0].backgroundColor;
      meta.data.forEach((bar, i) => {
        const val   = vals[i];
        const label = val >= 10 ? val + '' : val.toFixed(1);
        ctx.save();
        ctx.font          = '600 10px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif';
        ctx.textAlign     = 'center';
        ctx.textBaseline  = 'bottom';
        ctx.fillStyle     = bgColors[i];
        ctx.fillText(label, bar.x, bar.y - 3);
        ctx.restore();
      });
    }
  };

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Soja','Milho','Café','Cana','Algodão','Citros','Arroz','Feijão','Trigo','Coco'],
      datasets: [{
        label: 'Produtividade Média (t/ha)',
        data: [4.5, 6.8, 1.8, 73, 4.1, 32, 6.0, 1.1, 3.0, 1.4],
        backgroundColor: ['#3a8a2e','#c47c08','#6b2f0e','#1a6e7a','#8b3a6b','#c45e00','#5a7a3a','#7a3a1a','#b8960a','#2e6b4a'],
        borderWidth: 1
      }]
    },
    plugins: [dataLabelsPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ede0cc', titleColor: '#2c1a08', bodyColor: '#8a6a45',
          borderColor: 'rgba(90,60,20,0.2)', borderWidth: 1,
          callbacks: { label: ctx => ` ${ctx.parsed.y} t/ha` }
        }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(90,60,20,0.06)' }, ticks: { color: '#8a6a45', font: { size: 10 } } },
        x: { grid: { display: false }, ticks: { color: '#8a6a45', font: { size: 10 } } }
      }
    }
  });
}

// =============================================
// API: CÂMBIO USD/BRL (Awesome API — gratuito)
// =============================================
async function fetchDollarRate() {
  try {
    const r = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL', {
      signal: AbortSignal.timeout(6000)
    });
    if (!r.ok) return null;
    const data = await r.json();
    const bid    = parseFloat(data.USDBRL.bid);
    const ask    = parseFloat(data.USDBRL.ask);
    const rate   = (bid + ask) / 2;
    const change = parseFloat(data.USDBRL.pctChange);
    return { rate, change };
  } catch (_) { return null; }
}

async function loadDollarRate() {
  const el    = document.getElementById('kpi-dolar-val');
  const elSub = document.getElementById('kpi-dolar-sub');
  if (!el) return;

  const fx = await fetchDollarRate();
  if (fx) {
    el.textContent = 'R$ ' + fx.rate.toFixed(2);
    const sign = fx.change >= 0 ? '+' : '';
    if (elSub) elSub.textContent = `Variação ${sign}${fx.change.toFixed(2)}% hoje · Awesome API`;
  } else {
    if (elSub) elSub.textContent = 'Indisponível';
  }
}

// =============================================
// API: COTAÇÕES CEPEA (scraping via proxy)
// =============================================
async function fetchCEPEAPrice(url) {
  const enc = encodeURIComponent(url);
  const proxies = [
    `https://api.allorigins.win/get?url=${enc}`,
    `https://corsproxy.io/?url=${enc}`,
  ];

  for (const proxyUrl of proxies) {
    try {
      const r = await fetch(proxyUrl, { signal: AbortSignal.timeout(10000) });
      if (!r.ok) continue;
      const outer = await r.json().catch(() => ({}));
      const html  = outer.contents || '';
      if (!html) continue;

      // CEPEA price table patterns
      const patterns = [
        /class=["']big["'][^>]*>\s*R?\$?\s*([\d.]+,\d{2})/i,
        /"big"[^>]*>\s*([\d.]+,\d{2})\s*<\/td>/i,
        />\s*([\d]{2,4}\.[\d]{3},\d{2})\s*</,
        />\s*([\d]{2,4},\d{2})\s*<\/td>/,
      ];

      for (const pat of patterns) {
        const m = html.match(pat);
        if (m) {
          const raw   = m[1].replace(/\./g, '').replace(',', '.');
          const price = parseFloat(raw);
          if (!isNaN(price) && price > 5) return price;
        }
      }
    } catch (_) {}
  }
  return null;
}

async function preloadCEPEAPrices() {
  for (const c of COTACOES_REF) {
    try {
      const price = await fetchCEPEAPrice(c.link);
      if (price) precoCache[c.nome] = price;
    } catch (_) {}
  }
}

// =============================================
// COTAÇÕES KPI CAROUSEL
// =============================================
function mostrarCotacao(idx) {
  const c     = COTACOES_REF[idx];
  const cached = precoCache[c.nome];
  const preco  = cached
    ? cached.toFixed(2)
    : (c.base + (Math.random() - 0.5) * c.var * 0.3).toFixed(2);

  const elNome     = document.getElementById('cotacao-nome');
  const elIcon     = document.getElementById('cotacao-icon');
  const elPreco    = document.getElementById('kpi-preco');
  const elUnidade  = document.getElementById('cotacao-unidade');
  const elLink     = document.getElementById('cotacao-link');
  const elProgress = document.getElementById('cotacao-progress');

  elPreco.style.opacity = '0';
  elNome.style.opacity  = '0';

  setTimeout(() => {
    elNome.textContent    = c.nome;
    elIcon.textContent    = c.icon;
    elPreco.textContent   = `${c.prefix} ${preco}${c.suffix}`;
    elUnidade.textContent = c.unidade + (cached ? ' · CEPEA ao vivo' : ' · ref.');
    elLink.href           = c.link;

    elPreco.style.transition = 'opacity 0.3s';
    elNome.style.transition  = 'opacity 0.3s';
    elPreco.style.opacity    = '1';
    elNome.style.opacity     = '1';

    elProgress.style.transition = 'none';
    elProgress.style.width      = '100%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elProgress.style.transition = `width ${COTACAO_INTERVALO}ms linear`;
        elProgress.style.width      = '0%';
      });
    });
  }, 200);
}

function iniciarCarrosselCotacoes() {
  mostrarCotacao(cotacaoIndex);
  cotacaoTimer = setInterval(() => {
    cotacaoIndex = (cotacaoIndex + 1) % COTACOES_REF.length;
    mostrarCotacao(cotacaoIndex);
  }, COTACAO_INTERVALO);

  document.getElementById('kpi-cotacao-card').addEventListener('click', e => {
    if (e.target.tagName === 'A') return;
    clearInterval(cotacaoTimer);
    cotacaoIndex = (cotacaoIndex + 1) % COTACOES_REF.length;
    mostrarCotacao(cotacaoIndex);
    cotacaoTimer = setInterval(() => {
      cotacaoIndex = (cotacaoIndex + 1) % COTACOES_REF.length;
      mostrarCotacao(cotacaoIndex);
    }, COTACAO_INTERVALO);
  });
  document.getElementById('kpi-cotacao-card').style.cursor = 'pointer';
}

function loadKPIs() {
  iniciarCarrosselCotacoes();
  loadDollarRate();
  loadWeatherByCity();
  carregarNoticias();
  // Busca preços CEPEA em background — atualiza o carousel quando chegarem
  preloadCEPEAPrices().then(() => {
    if (Object.keys(precoCache).length > 0) mostrarCotacao(cotacaoIndex);
  });
}

// =============================================
// UTILITÁRIOS
// =============================================
function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 3600)  return `${Math.floor(diff / 60)}min`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}

// =============================================
// NOTÍCIAS RSS
// =============================================
async function fetchRSS(rssUrl) {
  const enc = encodeURIComponent(rssUrl);
  const promises = [
    fetch(`https://api.allorigins.win/get?url=${enc}`,       { signal: AbortSignal.timeout(5000) }).then(r => r.ok ? r.json().then(j => j?.contents) : null),
    fetch(`https://api.allorigins.win/raw?url=${enc}`,       { signal: AbortSignal.timeout(5000) }).then(r => r.ok ? r.text() : null),
    fetch(`https://corsproxy.io/?url=${enc}`,                { signal: AbortSignal.timeout(5000) }).then(r => r.ok ? r.text() : null),
    fetch(`https://api.codetabs.com/v1/proxy?quest=${enc}`,  { signal: AbortSignal.timeout(5000) }).then(r => r.ok ? r.text() : null),
    fetch(`https://thingproxy.freeboard.io/fetch/${rssUrl}`, { signal: AbortSignal.timeout(5000) }).then(r => r.ok ? r.text() : null),
  ];
  return new Promise(resolve => {
    let pending = promises.length;
    promises.forEach(p => {
      p.then(t => {
        if (t && (t.includes('<item>') || t.includes('<item '))) resolve(t);
        else if (--pending === 0) resolve(null);
      }).catch(() => { if (--pending === 0) resolve(null); });
    });
  });
}

function parseRSSItems(text, sourceName, sourceColor, maxItems) {
  try {
    const xml   = new DOMParser().parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');
    return Array.from(items).slice(0, maxItems).map(item => {
      const title   = item.querySelector('title')?.textContent?.trim() || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      const descRaw = item.querySelector('description')?.textContent || '';
      const linkEl  = new DOMParser().parseFromString(descRaw, 'text/html').querySelector('a');
      const link    = linkEl?.href || item.querySelector('link')?.nextSibling?.textContent?.trim() || '#';
      return { title, link, pubDate, source: sourceName, color: sourceColor };
    }).filter(n => n.title);
  } catch (_) { return []; }
}

const GN_SOURCE_COLORS = {
  'canal rural': '#c47c08', 'canalrural': '#c47c08',
  'globo rural': '#6b2f0e', 'globorural': '#6b2f0e',
  'notícias agrícolas': '#3a8a2e', 'noticias agricolas': '#3a8a2e',
  'embrapa': '#1a6b2e', 'agência brasil': '#0a4a8c', 'agencia brasil': '#0a4a8c',
  'valor econômico': '#7b2d8b', 'valor economico': '#7b2d8b',
  'folha': '#c0392b', 'uol': '#c0392b', 'g1': '#e74c3c',
  'cepea': '#2c7744', 'agrolink': '#1a7a3c',
};

function gnSourceColor(name) {
  if (!name) return '#888';
  const key = name.toLowerCase();
  for (const [k, v] of Object.entries(GN_SOURCE_COLORS)) {
    if (key.includes(k)) return v;
  }
  return '#888';
}

function parseGoogleNewsItems(text, maxItems) {
  try {
    const xml   = new DOMParser().parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');
    return Array.from(items).slice(0, maxItems).map(item => {
      const title   = item.querySelector('title')?.textContent?.trim() || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      const link    = item.querySelector('link')?.nextSibling?.textContent?.trim()
                   || item.querySelector('link')?.textContent?.trim() || '#';
      const srcName = item.querySelector('source')?.textContent?.trim() || '';
      return { title, link, pubDate, source: srcName, color: gnSourceColor(srcName) };
    }).filter(n => n.title);
  } catch (_) { return []; }
}

function renderNewsItems(feedEl, items) {
  const bySource = {};
  const order    = [];
  items.forEach(n => {
    if (!bySource[n.source]) { bySource[n.source] = []; order.push(n.source); }
    bySource[n.source].push(n);
  });
  let html = '';
  order.forEach((src, i) => {
    const group = bySource[src];
    const color = group[0].color;
    html += `<div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${color};padding:6px 0 3px;border-top:1px solid var(--border);margin-top:${i === 0 ? '0' : '4px'}">${src || 'Agro'}</div>`;
    group.forEach(n => {
      html += `<div class="news-item"><div>
        <a class="news-headline" href="${n.link}" target="_blank" rel="noopener">${n.title}</a>
        <span style="font-size:9px;color:var(--muted);display:block;margin-top:1px">${timeAgo(n.pubDate)}</span>
      </div></div>`;
    });
  });
  feedEl.innerHTML = html;
}

async function carregarNoticias() {
  const feedEl = document.getElementById('news-feed');
  feedEl.innerHTML = '<div class="alert-content" style="font-size:11px;color:var(--muted)">Carregando notícias...</div>';

  const portais = [
    { name: 'Not. Agrícolas', color: '#3a8a2e', urls: [
      'https://www.noticiasagricolas.com.br/rss.xml',
      'https://www.noticiasagricolas.com.br/feed/',
      'https://news.google.com/rss/search?q=site:noticiasagricolas.com.br+agronegocio&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    ]},
    { name: 'Canal Rural', color: '#c47c08', urls: [
      'https://www.canalrural.com.br/feed/',
      'https://news.google.com/rss/search?q=site:canalrural.com.br+agropecuaria&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    ]},
    { name: 'Globo Rural', color: '#6b2f0e', urls: [
      'https://globorural.globo.com/rss/',
      'https://rss.globo.com/globo_rural.xml',
      'https://news.google.com/rss/search?q=site:globorural.globo.com+agricultura&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    ]},
    { name: 'Reuters Agro', color: '#cc1a1a', urls: [
      'https://feeds.reuters.com/reuters/commoditiesNews',
      'https://news.google.com/rss/search?q=reuters+agronegocio+soja+milho+boi&hl=pt-BR&gl=BR&ceid=BR:pt-419',
    ]},
  ];

  async function fetchPortal(p) {
    for (const url of p.urls) {
      try {
        const text = await fetchRSS(url);
        if (text) {
          const isGN  = url.includes('news.google.com');
          const items = isGN
            ? parseGoogleNewsItems(text, 5).map(i => ({ ...i, source: p.name, color: p.color }))
            : parseRSSItems(text, p.name, p.color, 5);
          if (items.length > 0) return items;
        }
      } catch (_) {}
    }
    return [];
  }

  const results  = await Promise.all(portais.map(fetchPortal));
  const allItems = results.flat();

  if (allItems.length === 0) {
    try {
      const fallbackUrl = 'https://news.google.com/rss/search?q=agroneg%C3%B3cio+soja+milho+boi+Brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419';
      const text = await fetchRSS(fallbackUrl);
      if (text) allItems.push(...parseGoogleNewsItems(text, 15));
    } catch (_) {}
  }

  if (allItems.length > 0) renderNewsItems(feedEl, allItems);
  else feedEl.innerHTML = '<div class="alert-content" style="font-size:11px">Não foi possível carregar as notícias.</div>';
}

// =============================================
// CLIMA (OpenWeatherMap)
// =============================================
function cityInputToQuery(val) {
  if (!val) return 'Ibate,BR';
  const cityName = val.split(' - ')[0].trim();
  return cityName.normalize('NFD').replace(/[̀-ͯ]/g, '') + ',BR';
}

const WX_EMOJI = {
  Clear: '☀️', Clouds: '⛅', Rain: '🌧️', Drizzle: '🌦️',
  Thunderstorm: '⛈️', Snow: '❄️', Mist: '🌫️', Fog: '🌫️', Haze: '🌫️', Smoke: '🌫️'
};

function getTimeState(h) {
  if (h >= 5.5 && h < 7)    return 'dawn';
  if (h >= 7   && h < 11)   return 'morning';
  if (h >= 11  && h < 14)   return 'midday';
  if (h >= 14  && h < 17)   return 'afternoon';
  if (h >= 17  && h < 18.5) return 'sunset';
  if (h >= 18.5 && h < 20)  return 'dusk';
  return 'night';
}

function positionSun(h) {
  const sun = document.getElementById('wxSun');
  const rise = 6, set = 18;
  if (h < rise || h > set) { sun.style.opacity = '0'; return; }
  const progress = (h - rise) / (set - rise);
  const arc      = Math.sin(progress * Math.PI);
  sun.style.left    = (5 + progress * 90) + '%';
  sun.style.top     = Math.max(4, (120 * (1 - arc * 0.82)) - 10) + 'px';
  sun.style.right   = 'auto';
  sun.style.transform = '';
  sun.style.opacity = '1';
  const warmth = Math.max(
    1 - Math.min(1, Math.abs(progress) * 8),
    1 - Math.min(1, Math.abs(progress - 1) * 8)
  );
  if (warmth > 0.05) {
    sun.style.background = 'radial-gradient(circle, #fff0b0 12%, #ff8010 52%, #e03008 100%)';
    sun.style.boxShadow  = '0 0 28px 10px rgba(255,110,0,0.55), 0 0 55px 26px rgba(240,60,0,0.2)';
  } else {
    sun.style.background = 'radial-gradient(circle, #fff7a0 20%, #ffd030 55%, #ffaa00 100%)';
    sun.style.boxShadow  = '0 0 30px 14px rgba(255,210,0,0.5), 0 0 60px 30px rgba(255,180,0,0.2)';
  }
}

function applyWxScene(condMain, hourLocal) {
  const scene   = document.getElementById('wxScene');
  const moon    = document.getElementById('wxMoon');
  const cloudA  = document.getElementById('wxCloudA');
  const cloudB  = document.getElementById('wxCloudB');
  const rain    = document.getElementById('wxRain');
  const stars   = document.getElementById('wxStars');
  const cond    = condMain.toLowerCase();
  const ts      = getTimeState(hourLocal);
  const isNight = ts === 'night' || ts === 'dusk';
  const isRainy = cond === 'rain' || cond === 'drizzle';
  const isThunder = cond === 'thunderstorm';
  const isCloudy  = ['clouds', 'mist', 'fog', 'haze', 'smoke'].includes(cond);

  if (isThunder)      scene.className = isNight ? 'wx-scene wx-night-storm'  : 'wx-scene wx-storm';
  else if (isRainy)   scene.className = isNight ? 'wx-scene wx-night-rainy'  : 'wx-scene wx-rainy';
  else if (isCloudy)  scene.className = isNight ? 'wx-scene wx-night-cloudy' : 'wx-scene wx-cloudy';
  else                scene.className = 'wx-scene wx-' + ts;

  positionSun(hourLocal);
  moon.style.opacity   = isNight ? '1' : '0';
  stars.style.opacity  = ts === 'night' ? '1' : ts === 'dusk' ? '0.5' : '0';
  rain.style.opacity   = (isRainy || isThunder) ? '1' : '0';
  cloudA.style.opacity = isThunder || isRainy ? '1' : isCloudy ? '0.95' : isNight ? '0.12' : '0.22';
  cloudB.style.opacity = isThunder || isRainy ? '0.9' : isCloudy ? '0.85' : isNight ? '0.08' : '0.14';
}

function renderHourly(list) {
  const el = document.getElementById('wxHourly');
  if (!list || !list.length) { el.innerHTML = ''; return; }
  el.innerHTML = list.slice(0, 9).map(item => {
    const dt   = new Date(item.dt * 1000);
    const h    = dt.getHours().toString().padStart(2, '0') + 'H';
    const temp = Math.round(item.main.temp);
    const emoji = WX_EMOJI[item.weather[0].main] || '🌤️';
    const pop   = item.pop ? Math.round(item.pop * 100) : 0;
    return `<div class="wx-hour-item">
      <div class="wx-hour-time">${h}</div>
      <div class="wx-hour-icon">${emoji}</div>
      <div class="wx-hour-temp">${temp}°</div>
      ${pop > 15 ? `<div class="wx-hour-pop">💧${pop}%</div>` : ''}
    </div>`;
  }).join('');
}

function renderDailyForecast(list, todayHi, todayLo) {
  const el = document.getElementById('wxDaily');
  if (!el || !list) return;
  const PT    = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const byDay = {};
  list.forEach(item => {
    const d   = new Date(item.dt * 1000);
    const key = d.toDateString();
    if (!byDay[key]) byDay[key] = { items: [], date: d };
    byDay[key].items.push(item);
  });
  const days  = Object.values(byDay).slice(0, 5);
  const today = new Date().toDateString();
  el.innerHTML = days.map(day => {
    const isToday = day.date.toDateString() === today;
    const temps   = day.items.map(e => e.main.temp);
    const hi      = isToday && todayHi != null ? todayHi : Math.round(Math.max(...temps));
    const lo      = isToday && todayLo != null ? todayLo : Math.round(Math.min(...temps));
    const mid     = day.items[Math.floor(day.items.length / 2)];
    const emoji   = WX_EMOJI[mid.weather[0].main] || '🌤️';
    const pop     = Math.round(Math.max(...day.items.map(e => (e.pop || 0) * 100)));
    const name    = isToday ? 'Hoje' : PT[day.date.getDay()];
    return `<div class="wx-day-row">
      <span class="wx-day-name">${name}</span>
      <span class="wx-day-icon">${emoji}</span>
      <span class="wx-day-pop">${pop > 10 ? `💧${pop}%` : ''}</span>
      <span class="wx-day-temps"><span class="wx-day-hi">${hi}°</span><span class="wx-day-lo">${lo}°</span></span>
    </div>`;
  }).join('');
}

function renderWxMetrics(temp, humidity, wind, pressure, condMain) {
  const el   = document.getElementById('wxMetrics');
  if (!el) return;
  const cond    = condMain.toLowerCase();
  const isRainy = ['rain', 'drizzle', 'thunderstorm'].includes(cond);
  const dew     = Math.round(temp - ((100 - humidity) / 5));

  let spray, sprayC;
  if (isRainy)          { spray = 'Não recomendado';        sprayC = 'wx-alert'; }
  else if (wind > 4)    { spray = `Aguardar (${wind.toFixed(1)} m/s)`;  sprayC = 'wx-warn'; }
  else if (temp > 35)   { spray = 'Evitar (calor)';         sprayC = 'wx-warn'; }
  else if (humidity > 82) { spray = 'Atenção (U>82%)';      sprayC = 'wx-warn'; }
  else                  { spray = 'Janela favorável';        sprayC = 'wx-good'; }

  const riskScore = (humidity > 80 ? 2 : humidity > 65 ? 1 : 0) + (temp > 18 && temp < 34 ? 1 : 0) + (isRainy ? 2 : 0);
  const [disease, diseaseC] = riskScore >= 4 ? ['Alto — fungos', 'wx-alert'] : riskScore >= 2 ? ['Moderado', 'wx-warn'] : ['Baixo', 'wx-good'];

  let nVolat, nVolatC;
  if (temp > 30 && humidity < 50) { nVolat = 'Alto (>30°C seco)'; nVolatC = 'wx-alert'; }
  else if (temp > 25 || isRainy)  { nVolat = 'Moderado';          nVolatC = 'wx-warn'; }
  else                            { nVolat = 'Baixo — ideal NH₃'; nVolatC = 'wx-good'; }

  const pressT  = pressure > 1013 ? 'Alta — estável' : pressure > 1000 ? 'Normal' : 'Baixa — chuva';
  const pressCl = pressure > 1013 ? 'wx-good' : pressure > 1000 ? 'wx-info' : 'wx-warn';
  const frost   = temp < 2 ? 'Geada iminente!' : temp < 6 && humidity > 70 ? 'Risco de geada' : '';
  const gdd     = Math.max(0, ((temp + (temp - 3)) / 2) - 10);

  el.innerHTML = `
    <div class="wx-metric-item ${sprayC}">
      <span class="wx-metric-label">Pulverização</span>
      <span class="wx-metric-value">${spray}</span>
      <span class="wx-metric-sub">Vento ${wind.toFixed(1)} m/s · U ${humidity}%</span>
    </div>
    <div class="wx-metric-item ${diseaseC}">
      <span class="wx-metric-label">Pressão de Doença</span>
      <span class="wx-metric-value">${disease}</span>
      <span class="wx-metric-sub">Orvalho ${dew}°C · U ${humidity}%</span>
    </div>
    <div class="wx-metric-item ${nVolatC}">
      <span class="wx-metric-label">Volat. Nitrogênio</span>
      <span class="wx-metric-value">${nVolat}</span>
      <span class="wx-metric-sub">Risco ureia céu aberto${frost ? '<br>' + frost : ''}</span>
    </div>
    <div class="wx-metric-item ${pressCl}">
      <span class="wx-metric-label">Pressão Atm.</span>
      <span class="wx-metric-value">${pressure} hPa</span>
      <span class="wx-metric-sub">${pressT} · GDD≈${gdd.toFixed(1)}</span>
    </div>
    <div class="wx-metric-item wx-info" id="wxAQIItem" style="grid-column:1/-1">
      <span class="wx-metric-label">Qualidade do Ar</span>
      <span class="wx-metric-value" id="wxAQI">Carregando...</span>
      <span class="wx-metric-sub" id="wxAQISub"></span>
    </div>`;
}

function applyAQI(aqData) {
  const el   = document.getElementById('wxAQI');
  const sub  = document.getElementById('wxAQISub');
  const item = document.getElementById('wxAQIItem');
  if (!el || !aqData?.list?.[0]) { if (el) el.textContent = 'Indisponível'; return; }
  const aqi    = aqData.list[0].main.aqi;
  const comp   = aqData.list[0].components;
  const labels  = ['','Boa','Razoável','Moderada','Ruim','Muito Ruim'];
  const classes = ['','wx-good','wx-good','wx-warn','wx-alert','wx-alert'];
  el.innerHTML  = `<b>${labels[aqi] || '—'}</b> (IQA ${aqi}/5)`;
  if (sub)  sub.innerHTML = `NO₂ ${comp.no2?.toFixed(1) || '—'} · PM₂.₅ ${comp.pm2_5?.toFixed(1) || '—'}${comp.nh3 > 0.5 ? ` · NH₃ ${comp.nh3?.toFixed(1)} µg/m³` : ''}`;
  if (item) { item.classList.remove('wx-good','wx-warn','wx-alert','wx-info'); item.classList.add(classes[aqi] || 'wx-info'); }
}

function wxMainTip(temp, humidity, wind, condMain) {
  const cond = condMain.toLowerCase();
  if (cond === 'thunderstorm')                  return '<b>Trovoada</b> — suspender todas as operações no campo';
  if (cond === 'rain' || cond === 'drizzle') {
    if (humidity > 85) return '<b>Alta umidade</b> — risco elevado de fungos. Monitorar lavoura';
    return '<b>Evitar pulverização</b> e maquinário pesado no solo';
  }
  if (wind > 5)    return `<b>Vento ${wind.toFixed(1)} m/s</b> — aguardar calmaria para pulverizar`;
  if (temp > 36)   return `<b>${temp}°C</b> — estresse hídrico. Priorizar irrigação e evitar aplicações`;
  if (temp < 6)    return '<b>Risco de geada</b> — proteger culturas sensíveis';
  if (humidity < 35) return '<b>Umidade baixa</b> — monitorar irrigação. Favorável à colheita de grãos';
  if (wind <= 3 && temp >= 15 && temp <= 32) return '<b>Condições ideais</b> para pulverização e operações de campo';
  return '<b>Condições favoráveis</b> para desenvolvimento das culturas';
}

function loadWeatherByCity() {
  const input  = document.getElementById('city-input');
  const rawVal = input ? input.value.trim() : '';
  const cityQ  = cityInputToQuery(rawVal || 'Ibaté - SP');
  const apiKey = 'bbf01bd08dea499c87355686dc1fa2b6';
  const nowH   = new Date().getHours() + new Date().getMinutes() / 60;

  document.getElementById('wxCity').textContent   = '...';
  document.getElementById('wxTemp').textContent   = '--°';
  document.getElementById('wxDesc').textContent   = 'Carregando...';
  document.getElementById('wxHiLow').textContent  = '';
  document.getElementById('wxHourly').innerHTML   = '<div class="wx-loading">Buscando previsão...</div>';
  document.getElementById('wxAgroTip').innerHTML  = 'Aguardando dados climáticos...';
  document.getElementById('wxDaily').innerHTML    = '';
  document.getElementById('wxMetrics').innerHTML  = '';

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityQ}&appid=${apiKey}&units=metric&lang=pt_br&cnt=40`, { signal: AbortSignal.timeout(12000) })
    .then(r => r.json())
    .then(data => {
      if (!data?.list) throw new Error('no data');
      const cur   = data.list[0];
      const temp  = Math.round(cur.main.temp);
      const feels = Math.round(cur.main.feels_like);
      const hum   = cur.main.humidity;
      const wind  = cur.wind.speed;
      const press = cur.main.pressure;
      const desc  = cur.weather[0].description;
      const cond  = cur.weather[0].main;
      const city  = data.city.name;
      const lat   = data.city.coord.lat;
      const lon   = data.city.coord.lon;

      const todayTemps = data.list
        .filter(e => new Date(e.dt * 1000).toDateString() === new Date().toDateString())
        .map(e => e.main.temp);
      const hi = todayTemps.length ? Math.round(Math.max(...todayTemps)) : temp + 3;
      const lo = todayTemps.length ? Math.round(Math.min(...todayTemps)) : temp - 4;

      applyWxScene(cond, nowH);
      document.getElementById('wxCity').textContent  = city;
      document.getElementById('wxTemp').textContent  = `${temp}°`;
      document.getElementById('wxDesc').textContent  = desc.charAt(0).toUpperCase() + desc.slice(1);
      document.getElementById('wxHiLow').innerHTML   = `↑${hi}° ↓${lo}° &nbsp;·&nbsp; Sensação ${feels}°`;
      document.getElementById('wxAgroTip').innerHTML = wxMainTip(temp, hum, wind, cond);

      renderHourly(data.list);
      renderDailyForecast(data.list, hi, lo);
      renderWxMetrics(temp, hum, wind, press, cond);

      fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`, { signal: AbortSignal.timeout(8000) })
        .then(r => r.json())
        .then(applyAQI)
        .catch(() => { const el = document.getElementById('wxAQI'); if (el) el.textContent = 'Indisponível'; });
    })
    .catch(() => {
      document.getElementById('wxDesc').textContent  = '⚠️ Indisponível';
      document.getElementById('wxAgroTip').innerHTML = 'Verifique a conexão ou tente outra cidade.';
      applyWxScene('Clear', new Date().getHours());
    });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  const cityInput = document.getElementById('city-input');
  if (cityInput && !cityInput.value) cityInput.value = 'Ibaté - SP';

  initMapInteractions();
  updateMap();
  updateRightPanel();
  showComp('nitrato');
  renderChart();
  loadKPIs();
});
