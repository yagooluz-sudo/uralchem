// AgroMapa — Dados constantes
// Gerado automaticamente em refatoração

const CULTURES = {
  soja: {
    name: 'Soja',
    icon: '🌱',
    color: 'var(--soja)',
    colorHex: '#3a8a2e',
    dimColor: 'var(--soja-dim)',
    calendar: { default: ['C','C','C','C','-','-','-','-','P','P','P','P'] },
    states: ['MT','GO','MS','PR','RS','SC','SP','MG','BA','MA','PI','TO','RO','PA'],
    detail: {
      ciclo: '90–130 dias',
      plantio: 'Out–Dez (1ª safra) | Dez–Jan (MATOPIBA)',
      colheita: 'Jan–Abr (conforme região)',
      npk: 'Foco em P e K. Sem N em cobertura (fixação biológica via Bradyrhizobium)',
      formulas: ['NP 10-46 GR (plantio)','NP 08-40 GR (plantio)','KCl 60% (semeadura/antecip.)','Carbonato Ca+Mg (calagem)','Borogran 10% (foliar V3–R1)','FTE BR-12 (micronutrientes)'],
      fertilizantesChave: 'MAP/NP no sulco · KCl 60% ou KCl Branco 62% · Carbonato Ca+Mg para calagem · Borogran 10% e Boro 4% foliar · Zinco 10% · FMA-BR micronutrientes · FTE BR-12',
      janelaVendas: 'Mai–Jun (relacionamento pós-colheita) | Jul–Ago (fechamento de contratos) | Set–Out (entrega KCl e calcário antecipado) | Out–Nov (entrega NP semeadura)',
      curiosidade: 'A soja não usa N em cobertura — o diferencial de venda está no MAP/NP de qualidade no sulco, no KCl antecipado e nos micronutrientes foliares (B, Zn, Mo+Co). Vocês têm 4 versões de MAP/NP para oferecer.'
    }
  },
  milho: {
    name: 'Milho',
    icon: '🌽',
    color: 'var(--milho)',
    colorHex: '#c47c08',
    dimColor: 'var(--milho-dim)',
    calendar: { default: ['C','C','C','-','-','C','C','C','P','P','P','-'] },
    states: ['MT','GO','MS','PR','RS','SC','SP','MG','BA','MA','PI','TO','RO','PA','SE','AL','PE','CE'],
    detail: {
      ciclo: '110–140 dias (1ª safra) | 90–120 dias (safrinha)',
      plantio: '1ª safra: Set–Nov | Safrinha (2ª): Jan–Mar',
      colheita: '1ª safra: Jan–Mar | Safrinha: Jun–Ago',
      npk: 'Alta demanda de N. Nitrato de Amônio 34% é ideal para cobertura — liberação rápida, menor risco de volatilização vs ureia',
      formulas: ['NPK 19-04-19 GR (plantio)','Nitrato de Amônio 34% (cobertura V4–V6)','NP 10-46 ou NP 08-40 (sulco)','KCl 60% (plantio)','Zinco 10% GR (plantio)'],
      fertilizantesChave: 'NPK 19-04-19 no sulco · Nitrato de Amônio 34% em cobertura · MAP/NP complemento de P · KCl 60% · Zinco 10% GR · FTE BR-12 · Carbonato Ca+Mg',
      janelaVendas: 'Ago–Set (1ª safra: fechamento) | Out–Nov (1ª safra: entrega NPK) | Nov–Dez (safrinha: fechamento) | Jan–Fev (safrinha: cobertura Nitrato Amônio)',
      curiosidade: 'O Nitrato de Amônio 34% de vocês é o insumo certo para cobertura de milho — superior à ureia em condições de calor e solo seco, comuns no cerrado. É o principal argumento técnico de venda.'
    }
  },
  cafe: {
    name: 'Café',
    icon: '☕',
    color: 'var(--cafe)',
    colorHex: '#6b2f0e',
    dimColor: 'var(--cafe-dim)',
    calendar: { default: ['P','-','-','C','C','C','C','C','C','F','P','P'] },
    states: ['MG','SP','ES','PR','BA','RO'],
    detail: {
      ciclo: 'Cultura perene — ciclo produtivo de 20–30 anos',
      plantio: 'Out–Jan (mudas) | Produção a partir do 3º ano',
      colheita: 'Abr–Set (pico Jun–Ago em MG e SP)',
      npk: '3 a 5 parcelamentos de NPK por ano. N e K são os macronutrientes dominantes. NPK 27-06-06 é formulado clássico para cafeeiros em cobertura',
      formulas: ['NPK 27-06-06 GR (cobertura)','NPK 19-04-19 GR (semeadura/formação)','NPK 15-15-15+11S (formação lavoura)','Nitrato de Amônio 34% (cobertura N)','KCl 60% (cobertura K)','Borogran 10% (floração)','Zinco 10% (foliar)','FTE BR-12 (micronutrientes)'],
      fertilizantesChave: 'NPK 27-06-06 e NPK 19-04-19 em cobertura · Nitrato Amônio 34% · KCl 60% · NPK 15-15-15+11S para formação · Borogran 10% pré-florada · Zinco 10% foliar · FTE BR-12 · FMA-BR',
      janelaVendas: 'Jan–Fev (1ª adubação: pré-florada — Boro!) | Mar–Abr (2ª: granação) | Jun–Jul (3ª: pós-colheita) | Set–Out (4ª: enchimento de grão)',
      curiosidade: 'O café é o cliente que compra o ano inteiro — 4 a 5 vezes/ano. O NPK 27-06-06 é formulado específico para cafeeiro confirmado por vocês. Casa do Café é o maior cliente nessa cultura.'
    }
  },
  cana: {
    name: 'Cana-de-açúcar',
    icon: '🎋',
    color: 'var(--cana)',
    colorHex: '#1a6e7a',
    dimColor: 'var(--cana-dim)',
    calendar: { default: ['P','P','P','C','C','C','C','C','C','C','P','P'] },
    states: ['SP','MG','GO','MS','MT','PR','AL','PE','BA','MA','RN','SE'],
    detail: {
      ciclo: 'Cana planta: 12–18 meses | Soqueira: 5–6 cortes de 12 meses cada',
      plantio: 'Cana planta: Jan–Abr e Out–Dez',
      colheita: 'Abr–Nov (pico Jun–Set em SP e GO)',
      npk: 'N e K dominam. NKS 13-00-44 é ideal para soqueira — entrega N+K+S em dose única sem P. Nitrato de Amônio 34% para cobertura nitrogenada rápida',
      formulas: ['Nitrato de Amônio 34% (cobertura soqueira)','NKS 13-00-44+1MgO (cobertura soqueira)','NPK 19-04-19 GR (cana planta)','KCl 60% (soqueira complementar)','Carbonato Ca+Mg (calagem)','FTE BR-12 (micronutrientes plantio)'],
      fertilizantesChave: 'Nitrato Amônio 34% (maior volume) · NKS 13-00-44+MgO para soqueira · NPK 19-04-19 cana planta · KCl 60% · Carbonato Ca+Mg · FTE BR-12 · Nitrato de Cálcio',
      janelaVendas: 'Demanda contínua — maior cultura de vocês. Cooperativas de cana SP (Coplan, Copana, Cargill) são os maiores clientes. Pico de entrega: Jun–Out (período de corte e rebrota)',
      curiosidade: 'A cana é responsável pelo maior volume de Nitrato de Amônio 34% de vocês — 126 mil ton/ano. O NKS 13-00-44 é produto diferenciado para soqueira: entrega N+K+S em aplicação única, reduzindo custo operacional do produtor.'
    }
  },
  algodao: {
    name: 'Algodão',
    icon: '🌸',
    color: 'var(--algodao)',
    colorHex: '#8b3a6b',
    dimColor: 'var(--algodao-dim)',
    calendar: { default: ['P','P','-','-','-','C','C','C','C','-','-','P'] },
    states: ['MT','BA','GO','MS','MA','PI','TO'],
    detail: {
      ciclo: '140–180 dias',
      plantio: 'Dez–Jan (Cerrado) | Jan–Fev (MATOPIBA)',
      colheita: 'Jun–Set (pico Jul–Ago)',
      npk: 'Alta demanda de N e K. Boro crítico para floração e retenção de maçãs — Borogran 10% é o produto certo',
      formulas: ['NPK 19-04-19 GR (plantio)','NP 10-46 ou NP 08-40 (sulco P)','Nitrato de Amônio 34% (cobertura V4–V8)','KCl 60% (complemento K)','Borogran 10% (floração)','FTE BR-12 (micronutrientes)','Zinco 10% GR'],
      fertilizantesChave: 'NPK 19-04-19 no sulco · Nitrato Amônio 34% cobertura · NP 08-40 ou 10-46 complemento P · KCl 60% · Borogran 10% (crítico!) · Zinco 10% · FTE BR-12 · FMA-BR',
      janelaVendas: 'Out–Nov (fechamento — junto com soja no Cerrado) | Dez–Jan (entrega plantio) | Fev–Mar (entrega coberturas N) | Mar–Abr (Borogran floração)',
      curiosidade: 'MT concentra 65%+ da produção. O algodão é plantado junto com a soja — aproveite a visita comercial de Out–Nov para fechar os dois. Borogran 10% é diferencial técnico forte: sem boro adequado o produtor perde maçãs.'
    }
  },
  citros: {
    name: 'Citros',
    icon: '🍊',
    color: 'var(--citros)',
    colorHex: '#c45e00',
    dimColor: 'var(--citros-dim)',
    calendar: { default: ['-','-','P','P','-','C','C','C','C','C','C','-'] },
    states: ['SP','MG','BA','SE','RS','PR'],
    detail: {
      ciclo: 'Cultura perene — início de produção no 3º ano, pico entre 8–15 anos',
      plantio: 'Mar–Abr (mudas em SP/MG)',
      colheita: 'Jun–Nov (pico Jun–Set laranja pera em SP)',
      npk: 'Alta demanda de micronutrientes — Zinco, Boro e FTE BR-12 são essenciais. NPK 19-04-19 e Nitrato Amônio parcelados 4–5x/ano',
      formulas: ['NPK 19-04-19 GR (cobertura parcelada)','NPK 15-15-15+11S (formação)','Nitrato de Amônio 34% (cobertura N)','KCl 60% (cobertura K)','Borogran 10% (pré-florada)','Zinco 10% GR (foliar/solo)','FTE BR-12 (micronutrientes)','MKP 52-34 (fertirrigação)'],
      fertilizantesChave: 'NPK 19-04-19 · Nitrato Amônio 34% · KCl 60% · NPK 15-15-15+11S · Borogran 10% · Zinco 10% · FTE BR-12 · MKP 52-34 (fertirrigação) · FMA-BR · Nitrato de Cálcio',
      janelaVendas: 'Jan–Fev (pré-florada: foco em Boro!) | Abr–Mai (pós-florada: NPK cobertura) | Jul–Ago (granação: K) | Out–Nov (formação: micronutrientes)',
      curiosidade: 'Coopercitrus é cliente de vocês. SP concentra ~80% da laranja nacional. Citros aplica micronutrientes a cada 30–45 dias — é a cultura com maior frequência de compra. MKP 52-34 é produto premium para fertirrigação.'
    }
  },
  arroz: {
    name: 'Arroz',
    icon: '🍚',
    color: 'var(--arroz)',
    colorHex: '#5a7a3a',
    dimColor: 'var(--arroz-dim)',
    calendar: { default: ['-','C','C','C','-','-','-','-','-','P','P','P'] },
    states: ['RS','MT','MA','TO','GO','MS','PA','RO'],
    detail: {
      ciclo: '110–140 dias',
      plantio: 'Out–Dez (RS irrigado e MT sequeiro)',
      colheita: 'Mar–Abr (RS) | Fev–Mar (MT/Centro-Oeste)',
      npk: 'N parcelado é o principal insumo. NP no plantio + Nitrato Amônio 34% em cobertura. Carbonato Ca+Mg para correção de pH em solos ácidos do RS',
      formulas: ['NP 10-46 ou NP 08-40 (sulco plantio)','Nitrato de Amônio 34% (cobertura V4)','KCl 60% (plantio)','Carbonato Ca+Mg (calagem)','FTE BR-12 (micronutrientes)','Zinco 10% GR'],
      fertilizantesChave: 'NP 08-40 ou 10-46 plantio · Nitrato Amônio 34% cobertura · KCl 60% · Carbonato Ca+Mg calagem · FTE BR-12 · Zinco 10% · FMA-BR',
      janelaVendas: 'Ago–Set (RS irrigado: negociação) | Set–Out (Centro-Oeste: fechamento) | Out–Nov (entrega plantio) | Jan (cobertura N)',
      curiosidade: 'RS é o maior produtor de arroz irrigado (8–9 t/ha). O Nitrato de Amônio 34% tem vantagem técnica sobre ureia no arroz irrigado — menor risco de perda por lixiviação.'
    }
  },
  feijao: {
    name: 'Feijão',
    icon: '🫘',
    color: 'var(--feijao)',
    colorHex: '#7a3a1a',
    dimColor: 'var(--feijao-dim)',
    calendar: { default: ['C','C','P','C','C','P','P','-','C','P','P','-'] },
    states: ['PR','MG','GO','BA','SP','MT','RS','CE','PI','MA'],
    detail: {
      ciclo: '65–100 dias (até 3 safras por ano)',
      plantio: '1ª safra: Out–Nov | 2ª safra: Jan–Mar | 3ª safra (irrigada): Jun–Jul',
      colheita: '1ª: Jan–Fev | 2ª: Abr–Mai | 3ª: Set–Out',
      npk: 'Ciclo curto exige N prontamente disponível. Nitrato Amônio 34% é superior à ureia. P no plantio com MAP/NP. K influencia diretamente na qualidade do grão',
      formulas: ['NP 10-46 ou NP 08-40 (sulco plantio)','Nitrato de Amônio 34% (cobertura V3–V4)','KCl 60% (plantio)','NPK 19-04-19 GR (plantio)','Zinco 10% GR','Borogran 10% (foliar)'],
      fertilizantesChave: 'NP 08-40/10-46 sulco · Nitrato Amônio 34% cobertura · KCl 60% · NPK 19-04-19 · Zinco 10% · Borogran 10% foliar · FTE BR-12',
      janelaVendas: '3 janelas/ano: Set–Out (1ª safra) | Dez–Jan (2ª safra) | Mai–Jun (3ª irrigada) — o feijão é a cultura com mais oportunidades de venda ao longo do ano',
      curiosidade: '3 oportunidades de venda por ano. Ciclo curto de 65–100 dias favorece o Nitrato Amônio 34% vs ureia — a planta precisa de N rápido e o risco de perda por volatilização é alto nessa fase.'
    }
  },
  trigo: {
    name: 'Trigo',
    icon: '🌾',
    color: 'var(--trigo)',
    colorHex: '#b8960a',
    dimColor: 'var(--trigo-dim)',
    calendar: { default: ['-','-','-','P','P','P','P','-','C','C','C','-'] },
    states: ['PR','RS','SC','MS','SP','GO','MG'],
    detail: {
      ciclo: '90–120 dias',
      plantio: 'Abr–Jun (Sul: PR e RS) | Jun–Jul (Centro-Sul)',
      colheita: 'Set–Nov (pico Out–Nov no Sul)',
      npk: 'N é o nutriente mais crítico. Nitrato Amônio 34% no perfilhamento. MAP/NP no plantio. KCl na base. Zinco e FTE BR-12 frequentes',
      formulas: ['NP 10-46 ou NP 08-40 GR (sulco)','Nitrato de Amônio 34% (cobertura perfilhamento)','KCl 60% (plantio)','NPK 15-15-15+11S (plantio)','Zinco 10% GR','FTE BR-12'],
      fertilizantesChave: 'NP 08-40/10-46 sulco · Nitrato Amônio 34% cobertura · KCl 60% · NPK 15-15-15+11S · Zinco 10% · FTE BR-12 · Carbonato Ca+Mg',
      janelaVendas: 'Mar–Mai (principal — fechar junto com soja Sul) | Jun–Jul (cobertura N no perfilhamento) — o trigo ocupa a área da soja no inverno do Sul: mesmos clientes, janela complementar',
      curiosidade: 'PR e RS são os maiores produtores. Trigo é a oportunidade de manter contato com o cliente de soja no período de entressafra do Sul — mesma fazenda, mesma visita, produto diferente.'
    }
  },
  coco: {
    name: 'Coco',
    icon: '🥥',
    color: 'var(--coco)',
    colorHex: '#2e6b4a',
    dimColor: 'var(--coco-dim)',
    calendar: { default: ['C','C','C','C','C','C','C','C','C','C','C','C'] },
    states: ['BA','CE','SE','AL','PE','RN','PB','PA','AM','ES','SP'],
    detail: {
      ciclo: 'Perene — início de produção no 4º–5º ano, produção por 50–80 anos',
      plantio: 'Ano todo (cultura tropical perene)',
      colheita: 'Contínua o ano todo — pico Ago–Fev',
      npk: 'K é o macronutriente mais crítico — coqueiro exporta ~80g K por fruto. KCl 60% é o produto principal. N via Nitrato Amônio 34%. Boro via Borogran',
      formulas: ['KCl 60% (cobertura K — principal)','Nitrato de Amônio 34% (cobertura N)','NP 10-46 ou NP 08-40 (plantio)','Borogran 10% (foliar)','FTE BR-12 (micronutrientes)','Carbonato Ca+Mg (calagem)'],
      fertilizantesChave: 'KCl 60% (principal) · Nitrato Amônio 34% · NP 08-40/10-46 plantio · Borogran 10% · FTE BR-12 · Carbonato Ca+Mg · FMA-BR',
      janelaVendas: 'Demanda contínua — sem entressafra. Abordagem: Jan–Mar (planejamento anual) e Jul–Ago (revisão). BA e CE concentram 70% da produção — estados com pouco volume de vendas atual, mas com potencial',
      curiosidade: 'Cocais irrigados no NE são altamente tecnificados e demandam K com frequência mensal. A 100 frutos/palmeira/mês, o produtor precisa repor ~8kg de K₂O por palmeira por ano — KCl 60% é o produto de maior giro.'
    }
  }
};

const STATE_DATA = {
  RR: { name: 'Roraima', cultures: [] },
  AP: { name: 'Amapá', cultures: [] },
  AM: { name: 'Amazonas', cultures: ['coco'] },
  PA: { name: 'Pará', cultures: ['soja','milho','arroz','coco'] },
  MA: { name: 'Maranhão', cultures: ['soja','milho','cana','arroz','feijao','coco'] },
  PI: { name: 'Piauí', cultures: ['soja','milho','algodao','feijao','coco'] },
  CE: { name: 'Ceará', cultures: ['milho','feijao','coco'] },
  RN: { name: 'Rio Grande do Norte', cultures: ['cana','milho','coco'] },
  PB: { name: 'Paraíba', cultures: ['cana','coco'] },
  PE: { name: 'Pernambuco', cultures: ['cana','milho','coco'] },
  AL: { name: 'Alagoas', cultures: ['cana','milho','coco'] },
  SE: { name: 'Sergipe', cultures: ['cana','milho','coco','citros'] },
  BA: { name: 'Bahia', cultures: ['soja','milho','cafe','cana','algodao','citros','coco','feijao'] },
  TO: { name: 'Tocantins', cultures: ['soja','milho','algodao','arroz'] },
  GO: { name: 'Goiás', cultures: ['soja','milho','cana','algodao','cafe','feijao','trigo'] },
  DF: { name: 'Distrito Federal', cultures: ['soja','milho'] },
  MG: { name: 'Minas Gerais', cultures: ['soja','milho','cafe','cana','citros','feijao','trigo'] },
  ES: { name: 'Espírito Santo', cultures: ['cafe','cana','coco'] },
  RJ: { name: 'Rio de Janeiro', cultures: ['cana'] },
  SP: { name: 'São Paulo', cultures: ['soja','milho','cafe','cana','citros','feijao','trigo','coco'] },
  PR: { name: 'Paraná', cultures: ['soja','milho','cafe','cana','feijao','trigo'] },
  SC: { name: 'Santa Catarina', cultures: ['soja','milho','trigo','arroz'] },
  RS: { name: 'Rio Grande do Sul', cultures: ['soja','milho','trigo','arroz','feijao'] },
  MS: { name: 'Mato Grosso do Sul', cultures: ['soja','milho','cana','algodao','trigo'] },
  MT: { name: 'Mato Grosso', cultures: ['soja','milho','algodao','arroz'] },
  RO: { name: 'Rondônia', cultures: ['soja','milho','cafe','arroz'] },
  AC: { name: 'Acre', cultures: [] },
};

const MONTHS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

const PRODUTOS = [
  {
    cod: '0005',
    nome: 'Nitrato de Amônio 34% GR',
    formula: 'N 34%',
    tipo: ['N'],
    culturas: ['milho','cana','algodao','feijao','trigo','citros','arroz','cafe','coco'],
    aplicacao: 'Cobertura superficial a lanço ou em linha',
    desc: 'Fonte nitrogenada de liberação imediata com nitrogênio na forma nítrica (NO₃⁻) e amoniacal (NH₄⁺). Absorção mais eficiente que a ureia, especialmente em condições de calor e solo seco.',
    diferencial: 'Até 20% menos perda por volatilização vs. ureia 45% no cerrado. Indicado para cobertura de milho, cana soqueira, feijão e trigo — culturas que exigem N de ação rápida. Principal produto em volume da Vera Cruz (126 mil t/ano em cana).',
  },
  {
    cod: '0006',
    nome: 'KCl 60% GR',
    formula: 'K₂O 60%',
    tipo: ['K'],
    culturas: ['soja','cana','coco','citros','arroz','trigo','feijao','milho','algodao'],
    aplicacao: 'Sulco de plantio, antecipado ou cobertura',
    desc: 'Cloreto de potássio granulado com 60% de K₂O. Principal fonte de potássio para grande maioria das culturas. Alta concentração garante menor volume de aplicação por hectare.',
    diferencial: 'Para coco, é o produto de maior giro — cada palmeira exporta ~80g K₂O/fruto. Para soja, pode ser antecipado (set–out) para travar preço cambial. KCl Branco 62% disponível para aplicação com plantadeiras de alta precisão.',
  },
  {
    cod: '2479/3534',
    nome: 'NP 10-46 GR / NP 08-40 GR',
    formula: 'NP 10-46 / 08-40',
    tipo: ['N','P'],
    culturas: ['soja','arroz','trigo','feijao','algodao','coco'],
    aplicacao: 'Sulco de semeadura',
    desc: 'Fertilizante nitrogenado-fosfatado granulado de alta concentração em P₂O₅. Formulação semelhante ao MAP, ideal para aplicação no sulco de semeadura — coloca fósforo prontamente disponível na zona de enraizamento.',
    diferencial: 'Superior ao SSP no sulco: P disponível imediatamente, sem esperar mineralização. Vera Cruz oferece 4 versões (10-46, 08-40, 10-40 e variações) — argumento técnico para soja. Menor custo por kg P vs SSP após logística.',
  },
  {
    cod: '1059',
    nome: 'NPK 19-04-19 GR',
    formula: 'NPK 19-04-19',
    tipo: ['NPK'],
    culturas: ['milho','cana','algodao','feijao','citros','coco','arroz'],
    aplicacao: 'Sulco de plantio ou cobertura base',
    desc: 'Formulação equilibrada com ênfase em N e K. Atende culturas de alta demanda de nitrogênio e potássio no estabelecimento. Granulado de fácil aplicação mecânica.',
    diferencial: 'Formulação versátil — usado em milho 1ª safra, cana planta, algodão e feijão. Alta relação N:K favorece desenvolvimento vegetativo e enchimento de grão. Complementa bem o NP no sulco quando se busca NPK completo.',
  },
  {
    cod: '0017',
    nome: 'NPK 27-06-06 GR',
    formula: 'NPK 27-06-06',
    tipo: ['NPK'],
    culturas: ['cafe'],
    aplicacao: 'Cobertura parcelada (4 a 5 aplicações/ano)',
    desc: 'Formulação específica para cafeeiro em cobertura. Alta proporção de N com doses moderadas de P e K, ideal para fase vegetativa e manutenção da lavoura. Referência histórica para produtores de café.',
    diferencial: 'Formulado específico confirmado pela Vera Cruz para cafeeiro. Casa do Café é cliente referência. Cafeeiro compra 4x/ano — cada visita gera pedido. Alta relação N permite nutrição contínua com menor número de aplicações.',
  },
  {
    cod: '2033',
    nome: 'NKS 13-00-44 + 1MgO GR',
    formula: 'NKS 13-00-44+Mg',
    tipo: ['N','K'],
    culturas: ['cana'],
    aplicacao: 'Cobertura de soqueira pós-corte',
    desc: 'Formulação exclusiva para soqueira de cana-de-açúcar. Entrega N, K e S em uma única passagem, com adição de magnésio (1% MgO) para complementar nutrição. Elimina a necessidade de aplicação separada de KCl.',
    diferencial: 'Produto diferenciado: N+K+S em dose única reduz custo operacional (menos passagens de máquina). Para usinas que operam com frota própria, a economia logística é argumento de venda poderoso. Cooperativas de cana SP são clientes-alvo.',
  },
  {
    cod: '1918',
    nome: 'NPK 15-15-15 + 11S GR',
    formula: 'NPK 15-15-15+S',
    tipo: ['NPK'],
    culturas: ['trigo','citros','cafe'],
    aplicacao: 'Sulco de plantio ou cobertura base em formação',
    desc: 'Formulação balanceada com enxofre. O S (11%) melhora a eficiência do nitrogênio e é essencial para qualidade proteica do trigo e ativação enzimática em frutíferas. Granulado de fácil aplicação.',
    diferencial: 'Para trigo, o S melhora qualidade proteica do glúten — argumento de valor para produtores que vendem para moinhos com bonificação por proteína. Para citros em formação, equilibra todos os macros + S em uma aplicação.',
  },
  {
    cod: '0013',
    nome: 'Borogran 10% GR',
    formula: 'B 10%',
    tipo: ['micro'],
    culturas: ['soja','algodao','citros','cafe','coco','feijao'],
    aplicacao: 'Sulco de plantio, cobertura ou foliar',
    desc: 'Boro granulado de alta eficiência com 10% de B. Essencial para floração, fecundação e formação de frutos em diversas culturas. Disponibilidade gradual evita toxidez.',
    diferencial: 'Para algodão, a deficiência de boro causa abortamento de maçãs — custo do Borogran é irrisório vs. perda de produtividade. Para citros e café pré-florada, é insumo prioritário. Para soja no sulco, melhora nodulação e formação de vagens.',
  },
  {
    cod: '0016',
    nome: 'Zinco 10% GR',
    formula: 'Zn 10%',
    tipo: ['micro'],
    culturas: ['milho','soja','trigo','citros','cafe','arroz'],
    aplicacao: 'Sulco de plantio ou foliar',
    desc: 'Sulfato de zinco granulado com 10% de Zn. Essencial para síntese de auxinas, fotossíntese e ativação enzimática. Deficiência de zinco é a mais comum em solos tropicais do Brasil.',
    diferencial: 'Milho é particularmente sensível à deficiência de Zn nos estádios iniciais — aplicação no sulco é a forma mais eficiente. Para café e citros, complementa FTE BR-12 em solos esgotados. Custo por ha muito baixo com alto retorno.',
  },
  {
    cod: '0012',
    nome: 'FTE BR-12 GR',
    formula: 'Zn+B+Cu+Mn+Mo+Fe',
    tipo: ['micro'],
    culturas: ['soja','milho','cafe','cana','algodao','citros','arroz','feijao','trigo','coco'],
    aplicacao: 'Sulco de plantio ou incorporado ao solo',
    desc: 'Fritas de micronutrientes formulação BR-12: Zn, B, Cu, Mn, Mo e Fe em fusão vítrea. Liberação gradual por hidrólise — mínimo 2 safras de efeito residual. Cobre as principais deficiências de solos tropicais.',
    diferencial: 'Uma única aplicação fornece todos os micronutrientes essenciais por 1 a 2 safras. Ideal para incorporação no plantio. Custo-benefício superior à aplicação separada de cada micronutriente foliar.',
  },
  {
    cod: '2200',
    nome: 'Micronutriente FMA-BR',
    formula: 'Mix micro (Zn,B,Cu,Mn)',
    tipo: ['micro'],
    culturas: ['soja','cafe','citros','coco'],
    aplicacao: 'Foliar ou cobertura',
    desc: 'Mistura granulada de micronutrientes solúveis para aplicação foliar ou no solo. Formulação mais solúvel que FTE, indicada para correção rápida de deficiências já manifestadas na lavoura.',
    diferencial: 'Para soja em V3–R1, complementa o pacote foliar com B e Zn de rápida absorção. Para citros com alta demanda de micronutrientes (aplicação a cada 30–45 dias), FMA-BR é alternativa mais solúvel ao FTE.',
  },
  {
    cod: '2095',
    nome: 'MKP 52-34 GR',
    formula: 'P₂O₅ 52% · K₂O 34%',
    tipo: ['P','K'],
    culturas: ['citros'],
    aplicacao: 'Fertirrigação ou cobertura solúvel',
    desc: 'Fosfato Monopotássico (MKP) de alta solubilidade. Fornece P e K sem N, ideal para fase de granação onde excesso de nitrogênio seria prejudicial. Produto premium para sistemas de irrigação.',
    diferencial: 'Único produto do portfólio para fertirrigação de citros — nicho altamente tecnificado em SP. Na granação da laranja, P+K sem N é o protocolo correto: evita empurrar vegetação e concentra energia no fruto. Coopercitrus já usa.',
  },
  {
    cod: '0010/1019',
    nome: 'Carbonato de Cálcio e Magnésio',
    formula: 'CaCO₃ + MgCO₃',
    tipo: ['calcario'],
    culturas: ['soja','cana','arroz','citros'],
    aplicacao: 'Incorporado ao solo (PRNT 70–80%) — calagem',
    desc: 'Calcário calcítico e/ou dolomítico para correção de acidez. Eleva pH, fornece Ca e Mg, aumenta CTC e melhora disponibilidade de fósforo. Base agronômica para toda adubação posterior.',
    diferencial: 'Produto base — sem calagem correta, toda adubação tem eficiência reduzida. Pré-venda estratégica: fechar calcário antecipado em ago–set garante aplicação no período correto e trava preço para o produtor. Principal entrada de relações de longo prazo.',
  },
];

const CALC_DATA = {
  soja: {
    estagios: [
      { label: 'Plantio / Semeadura (sulco)', key: 'plantio' },
      { label: 'Calagem antecipada (set–out)', key: 'calagem' },
      { label: 'Cobertura foliar (V3–R2)', key: 'foliar' },
    ],
    hint: 'Ciclo 90–130 dias. Janela principal: Jul–Out. Não usa N em cobertura — fixação biológica.',
    plantio: [
      { cod: '2479/3534/3569', nome: 'NP 10-46 ou 08-40 GR', dose: 150, unit: 'kg/ha', obs: 'sulco de semeadura' },
      { cod: '0006', nome: 'KCl 60% GR', dose: 80, unit: 'kg/ha', obs: 'sulco ou antecipado' },
      { cod: '0013', nome: 'Borogran 10% GR', dose: 2, unit: 'kg/ha', obs: 'no sulco' },
    ],
    calagem: [
      { cod: '0010/1019', nome: 'Carbonato de Cálcio e Magnésio', dose: 2000, unit: 'kg/ha', obs: 'PRNT 70–80%' },
    ],
    foliar: [
      { cod: '0013', nome: 'Borogran 10% GR', dose: 1.5, unit: 'kg/ha', obs: 'foliar V3–V6' },
      { cod: '0016', nome: 'Zinco 10% GR', dose: 2, unit: 'kg/ha', obs: 'foliar' },
      { cod: '2200', nome: 'Micronutriente FMA-BR', dose: 3, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    pitch: (area, estagio) => `Seu cliente tem ${area.toLocaleString('pt-BR')} ha de soja. Para o ${estagio === 'plantio' ? 'plantio' : estagio === 'calagem' ? 'preparo de solo' : 'manejo foliar'}, a recomendação técnica gera um pedido estimado acima. O NP de sulco garante P disponível imediatamente — sem esperar mineralização como no SSP. O KCl pode ser travado agora para proteger de alta cambial em outubro.`
  },
  milho: {
    estagios: [
      { label: 'Plantio / Sulco (1ª safra set–nov)', key: 'plantio' },
      { label: 'Cobertura N — V4 a V6', key: 'cobertura' },
      { label: 'Safrinha (plantio jan–mar)', key: 'safrinha' },
    ],
    hint: 'Alta demanda de N. Nitrato Amônio 34% supera ureia em condições de calor — menos volatilização.',
    plantio: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 250, unit: 'kg/ha', obs: 'sulco de plantio' },
      { cod: '0016', nome: 'Zinco 10% GR', dose: 3, unit: 'kg/ha', obs: 'no sulco' },
      { cod: '0012', nome: 'FTE BR-12 GR', dose: 2, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    cobertura: [
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 200, unit: 'kg/ha', obs: 'cobertura V4–V6' },
    ],
    safrinha: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 180, unit: 'kg/ha', obs: 'sulco safrinha' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 150, unit: 'kg/ha', obs: 'cobertura V4' },
    ],
    pitch: (area) => `Com ${area.toLocaleString('pt-BR')} ha de milho, o Nitrato de Amônio 34% em cobertura tem eficiência comprovada superior à ureia no calor do cerrado — 15–20% menos perda por volatilização. O pedido estimado consolida plantio e cobertura em um único fechamento.`
  },
  cafe: {
    estagios: [
      { label: '1ª adubação — pré-florada (jan–fev)', key: 'florada' },
      { label: '2ª adubação — granação (mar–abr)', key: 'granacao' },
      { label: '3ª adubação — pós-colheita (jun–jul)', key: 'poscolheita' },
      { label: '4ª adubação — enchimento (set–out)', key: 'enchimento' },
    ],
    hint: 'Café compra 4x/ano. Dose total anual: 400–600 kg NPK/ha + micronutrientes. Maior frequência de compra entre todas as culturas.',
    florada: [
      { cod: '0017', nome: 'NPK 27-06-06 GR', dose: 100, unit: 'kg/ha', obs: 'cobertura N+K' },
      { cod: '0013', nome: 'Borogran 10% GR', dose: 3, unit: 'kg/ha', obs: 'pré-florada — crítico!' },
      { cod: '0016', nome: 'Zinco 10% GR', dose: 2, unit: 'kg/ha', obs: 'foliar' },
    ],
    granacao: [
      { cod: '0017', nome: 'NPK 27-06-06 GR', dose: 120, unit: 'kg/ha', obs: 'cobertura N+K' },
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 80, unit: 'kg/ha', obs: 'complemento P+K' },
    ],
    poscolheita: [
      { cod: '0017', nome: 'NPK 27-06-06 GR', dose: 150, unit: 'kg/ha', obs: 'recuperação pós-colheita' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 80, unit: 'kg/ha', obs: 'N prontamente disponível' },
      { cod: '0012', nome: 'FTE BR-12 GR', dose: 3, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    enchimento: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 120, unit: 'kg/ha', obs: 'enchimento de grão' },
      { cod: '0006', nome: 'KCl 60% GR', dose: 60, unit: 'kg/ha', obs: 'complemento K' },
      { cod: '2200', nome: 'Micronutriente FMA-BR', dose: 4, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    pitch: (area, estagio) => `Com ${area.toLocaleString('pt-BR')} ha de café, este cliente compra 4 vezes por ano — cada visita gera um pedido. O NPK 27-06-06 é formulado específico para cafeeiro: alta relação N:K ideal para cobertura. Casa do Café e Coopercitrus são referências no uso desse portfólio.`
  },
  cana: {
    estagios: [
      { label: 'Cana planta — plantio (jan–abr / out–dez)', key: 'plantio' },
      { label: 'Soqueira — cobertura (mai–set)', key: 'soqueira' },
    ],
    hint: 'Demanda contínua — maior cultura em volume. Nitrato Amônio 34% e NKS 13-00-44 são os produtos principais.',
    plantio: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 400, unit: 'kg/ha', obs: 'sulco de plantio' },
      { cod: '0010/1019', nome: 'Carbonato de Cálcio e Magnésio', dose: 2500, unit: 'kg/ha', obs: 'calagem pré-plantio' },
      { cod: '0012', nome: 'FTE BR-12 GR', dose: 5, unit: 'kg/ha', obs: 'micronutrientes plantio' },
    ],
    soqueira: [
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 300, unit: 'kg/ha', obs: 'N pós-corte' },
      { cod: '2033', nome: 'NKS 13-00-44 + 1MgO', dose: 200, unit: 'kg/ha', obs: 'N+K+S dose única' },
    ],
    pitch: (area, estagio) => `${area.toLocaleString('pt-BR')} ha de cana geram demanda contínua. Para soqueira, o NKS 13-00-44+MgO entrega N+K+S em uma única aplicação — o produtor reduz passagens de máquina e custo operacional. Combinado com Nitrato de Amônio 34% para N de arranque, é o pacote mais eficiente para rebrota.`
  },
  algodao: {
    estagios: [
      { label: 'Plantio / Sulco (dez–jan)', key: 'plantio' },
      { label: 'Cobertura N — V4 a V8', key: 'cobertura' },
      { label: 'Floração — micronutrientes (fev–mar)', key: 'floracao' },
    ],
    hint: 'Boro é crítico para retenção de maçãs. Sem Borogran na floração, o produtor perde produtividade irreversivelmente.',
    plantio: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 300, unit: 'kg/ha', obs: 'sulco de plantio' },
      { cod: '2479/3534', nome: 'NP 10-46 ou 08-40 GR', dose: 100, unit: 'kg/ha', obs: 'complemento P' },
    ],
    cobertura: [
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 250, unit: 'kg/ha', obs: 'cobertura V4–V8' },
      { cod: '0006', nome: 'KCl 60% GR', dose: 120, unit: 'kg/ha', obs: 'K cobertura' },
    ],
    floracao: [
      { cod: '0013', nome: 'Borogran 10% GR', dose: 3, unit: 'kg/ha', obs: 'floração — crítico!' },
      { cod: '0016', nome: 'Zinco 10% GR', dose: 2, unit: 'kg/ha', obs: 'foliar' },
      { cod: '0012', nome: 'FTE BR-12 GR', dose: 4, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    pitch: (area) => `${area.toLocaleString('pt-BR')} ha de algodão no Cerrado. O Borogran 10% na floração é inegociável — deficiência de boro causa abortamento de maçãs e perda direta de produtividade. Argumento: o custo do Borogran é irrisório versus o valor das maçãs perdidas por falta de B.`
  },
  citros: {
    estagios: [
      { label: 'Pré-florada (jan–fev)', key: 'preflorada' },
      { label: 'Pós-florada / cobertura (abr–mai)', key: 'cobertura' },
      { label: 'Granação / K (jun–ago)', key: 'granacao' },
    ],
    hint: 'Compra 3–4x/ano. Altíssima demanda de micronutrientes — aplica foliar a cada 30–45 dias. Coopercitrus é cliente de vocês.',
    preflorada: [
      { cod: '0013', nome: 'Borogran 10% GR', dose: 4, unit: 'kg/ha', obs: 'pré-florada — crítico!' },
      { cod: '0016', nome: 'Zinco 10% GR', dose: 3, unit: 'kg/ha', obs: 'foliar' },
      { cod: '0012', nome: 'FTE BR-12 GR', dose: 5, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    cobertura: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 200, unit: 'kg/ha', obs: 'cobertura N+P+K' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 100, unit: 'kg/ha', obs: 'N complementar' },
      { cod: '2200', nome: 'Micronutriente FMA-BR', dose: 5, unit: 'kg/ha', obs: 'micronutrientes' },
    ],
    granacao: [
      { cod: '0006', nome: 'KCl 60% GR', dose: 180, unit: 'kg/ha', obs: 'K granação' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 80, unit: 'kg/ha', obs: 'N manutenção' },
      { cod: '2095', nome: 'MKP 52-34 Fosfato Monopotássico', dose: 3, unit: 'kg/ha', obs: 'fertirrigação P+K' },
    ],
    pitch: (area) => `${area.toLocaleString('pt-BR')} ha de citros é um dos clientes mais frequentes do portfólio — compra 3 a 4 vezes por ano. O MKP 52-34 é produto premium para fertirrigação: alto teor de P+K sem N, ideal para granação sem empurrar vegetação. Coopercitrus já é cliente — use como referência técnica.`
  },
  arroz: {
    estagios: [
      { label: 'Plantio — sulco (out–dez)', key: 'plantio' },
      { label: 'Cobertura N — V4 (dez–jan)', key: 'cobertura' },
    ],
    hint: 'RS irrigado: Nitrato Amônio supera ureia pela menor lixiviação em solo inundado.',
    plantio: [
      { cod: '2479/3534', nome: 'NP 10-46 ou 08-40 GR', dose: 150, unit: 'kg/ha', obs: 'sulco plantio' },
      { cod: '0006', nome: 'KCl 60% GR', dose: 80, unit: 'kg/ha', obs: 'plantio' },
      { cod: '0010/1019', nome: 'Carbonato de Cálcio e Magnésio', dose: 1500, unit: 'kg/ha', obs: 'calagem' },
    ],
    cobertura: [
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 180, unit: 'kg/ha', obs: 'cobertura V4' },
    ],
    pitch: (area) => `${area.toLocaleString('pt-BR')} ha de arroz irrigado no RS. O Nitrato de Amônio 34% tem vantagem técnica comprovada sobre ureia em solo inundado — menor perda por desnitrificação. No custo por kg de N aplicado, a diferença se paga na produtividade.`
  },
  feijao: {
    estagios: [
      { label: '1ª safra — plantio (out–nov)', key: 's1' },
      { label: '2ª safra — plantio (jan–mar)', key: 's2' },
      { label: '3ª safra irrigada (jun–jul)', key: 's3' },
    ],
    hint: '3 safras por ano = 3 janelas de venda. Ciclo curto de 65–100 dias favorece Nitrato Amônio vs ureia.',
    s1: [
      { cod: '2479/3534', nome: 'NP 10-46 ou 08-40 GR', dose: 120, unit: 'kg/ha', obs: 'sulco plantio' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 120, unit: 'kg/ha', obs: 'cobertura V3–V4' },
      { cod: '0006', nome: 'KCl 60% GR', dose: 60, unit: 'kg/ha', obs: 'plantio' },
    ],
    s2: [
      { cod: '2479/3534', nome: 'NP 10-46 ou 08-40 GR', dose: 120, unit: 'kg/ha', obs: 'sulco plantio' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 120, unit: 'kg/ha', obs: 'cobertura' },
      { cod: '0006', nome: 'KCl 60% GR', dose: 60, unit: 'kg/ha', obs: 'plantio' },
    ],
    s3: [
      { cod: '1059', nome: 'NPK 19-04-19 GR', dose: 180, unit: 'kg/ha', obs: 'sulco irrigado' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 100, unit: 'kg/ha', obs: 'cobertura' },
    ],
    pitch: (area, estagio) => `${area.toLocaleString('pt-BR')} ha de feijão geram até 3 pedidos por ano. Ciclo curto (70–90 dias) exige N de ação rápida — o Nitrato de Amônio 34% tem resposta mais rápida que ureia e menos risco de volatilização nos dias quentes de cobertura.`
  },
  trigo: {
    estagios: [
      { label: 'Plantio — sulco (abr–jun)', key: 'plantio' },
      { label: 'Cobertura — perfilhamento (mai–jun)', key: 'cobertura' },
    ],
    hint: 'Trigo ocupa a área da soja no inverno no Sul — mesmos clientes, pedido complementar. Feche junto.',
    plantio: [
      { cod: '1918', nome: 'NPK 15-15-15+11S GR', dose: 200, unit: 'kg/ha', obs: 'sulco plantio' },
      { cod: '2479/3534', nome: 'NP 10-46 ou 08-40 GR', dose: 80, unit: 'kg/ha', obs: 'complemento P' },
      { cod: '0016', nome: 'Zinco 10% GR', dose: 2, unit: 'kg/ha', obs: 'plantio' },
    ],
    cobertura: [
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 160, unit: 'kg/ha', obs: 'cobertura perfilhamento' },
    ],
    pitch: (area) => `${area.toLocaleString('pt-BR')} ha de trigo no Sul. Aproveite a visita de fechamento de soja para fechar o trigo junto — mesma fazenda, janela complementar (abr–jun). O NPK 15-15-15+11S tem o S que melhora qualidade proteica do glúten, argumento de valor para o produtor.`
  },
  coco: {
    estagios: [
      { label: 'Adubação anual (demanda contínua)', key: 'anual' },
    ],
    hint: 'Demanda mensal contínua. KCl é o produto de maior giro — o coqueiro exporta ~80g K por fruto.',
    anual: [
      { cod: '0006', nome: 'KCl 60% GR', dose: 160, unit: 'kg/ha', obs: 'K — 4 parcelas/ano' },
      { cod: '0005', nome: 'Nitrato de Amônio 34% GR', dose: 120, unit: 'kg/ha', obs: 'N — 4 parcelas/ano' },
      { cod: '2479/3534', nome: 'NP 10-46 ou 08-40 GR', dose: 80, unit: 'kg/ha', obs: 'P anual' },
      { cod: '0013', nome: 'Borogran 10% GR', dose: 2, unit: 'kg/ha', obs: 'B anual' },
    ],
    pitch: (area) => `${area.toLocaleString('pt-BR')} ha de coco no Nordeste — demanda mensal previsível. KCl 60% é o produto de maior giro: cada palmeira exporta ~80g de K₂O por fruto. Feche um contrato anual parcelado em 4 entregas e garanta previsibilidade no faturamento.`
  },
};

const COTACOES_REF = [
  { nome: 'Soja',    icon: '🌱', unidade: 'sc 60kg · ref.',  base: 138, var: 18, link: 'https://www.cepea.esalq.usp.br/br/indicador/soja.aspx',    prefix: 'R$', suffix: '/sc' },
  { nome: 'Milho',   icon: '🌽', unidade: 'sc 60kg · ref.',  base: 68,  var: 10, link: 'https://www.cepea.esalq.usp.br/br/indicador/milho.aspx',   prefix: 'R$', suffix: '/sc' },
  { nome: 'Café',    icon: '☕', unidade: 'sc 60kg · ref.',  base: 3200,var: 400,link: 'https://www.cepea.esalq.usp.br/br/indicador/cafe.aspx',    prefix: 'R$', suffix: '/sc' },
  { nome: 'Algodão', icon: '🌸', unidade: '@ 15kg · ref.',   base: 110, var: 12, link: 'https://www.cepea.esalq.usp.br/br/indicador/algodao.aspx', prefix: 'R$', suffix: '/@' },
  { nome: 'Trigo',   icon: '🌾', unidade: 'sc 60kg · ref.',  base: 82,  var: 10, link: 'https://www.cepea.esalq.usp.br/br/indicador/trigo.aspx',   prefix: 'R$', suffix: '/sc' },
  { nome: 'Feijão',  icon: '🫘', unidade: 'sc 60kg · ref.',  base: 260, var: 50, link: 'https://www.cepea.esalq.usp.br/br/indicador/feijao.aspx',  prefix: 'R$', suffix: '/sc' },
];

const SEASON_PRIMARY = {
  soja:    'chuva',   // semeadura Out–Dez, colheita Jan–Abr
  milho:   'chuva',   // semeadura Set–Nov (1ª safra) / Jan–Mar (safrinha)
  cafe:    'seca',    // colheita Abr–Set (pico Jun–Ago)
  cana:    'seca',    // colheita Abr–Nov (pico Jun–Set)
  algodao: 'seca',    // colheita Jun–Set
  citros:  'seca',    // colheita Jun–Nov
  arroz:   'chuva',   // semeadura Out–Dez
  feijao:  'chuva',   // semeaduras Out–Nov e Jan–Mar (1ª e 2ª safras)
  trigo:   'seca',    // semeadura Abr–Jun, colheita Set–Nov
  coco:    'ambas',   // perene — produção contínua
};

const COMP_DATA = {
  nitrato: {
    titulo: 'Nitrato de Amônio 34% vs Ureia 45%',
    nosso: { label: 'NOSSO PRODUTO', nome: 'Nitrato de Amônio GR 34%', cod: 'Cód. 0005' },
    concorrente: { label: 'CONCORRENTE', nome: 'Ureia 45%', cod: 'Mercado genérico' },
    atributos: [
      { key: 'Teor de N', nosso: '34% N (17% NH₄ + 17% NO₃)', deles: '45% N (ureia)', nosso_class: '', deles_class: '' },
      { key: 'Custo por kg de N', nosso: 'Maior custo nominal/ton', deles: 'Menor custo nominal/ton', nosso_class: 'bad', deles_class: 'good' },
      { key: 'Volatilização NH₃', nosso: 'Muito baixa — N nítrico estável', deles: 'Alta — até 40% no calor', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Velocidade de ação', nosso: 'Imediata (NO₃ prontamente disponível)', deles: 'Demora 5–10 dias (hidrólise)', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Eficiência em solo seco', nosso: 'Alta — NO₃ absorvido sem água', deles: 'Baixa — precisa de chuva/irrigação', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Risco em calor >35°C', nosso: 'Mínimo', deles: 'Elevado — perde N em horas', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Forma física', nosso: 'Grânulo — boa distribuição', deles: 'Pérola ou prill', nosso_class: '', deles_class: '' },
    ],
    culturas: [
      { cultura: 'Milho (cobertura V4–V6)', argumento: 'Cerrado quente — ureia perde até 40% N antes da chuva. Nitrato age no mesmo dia.' },
      { cultura: 'Cana-de-açúcar (soqueira)', argumento: 'Pós-corte sem irrigação — o produtor não pode esperar chuva para a ureia agir.' },
      { cultura: 'Café (cobertura parcelada)', argumento: '4–5 coberturas/ano. Cada perda de N da ureia é uma cobertura desperdiçada.' },
      { cultura: 'Feijão (V3–V4)', argumento: 'Ciclo curto — não há tempo para esperar hidrólise da ureia.' },
      { cultura: 'Trigo (perfilhamento)', argumento: 'Baixa temperatura retarda hidrólise ureia. Nitrato age mesmo no frio.' },
    ],
    winner: 'O Nitrato de Amônio 34% tem custo nominal maior por tonelada, mas a ureia perde até 40% do N por volatilização em dias quentes. Na prática, o <strong>custo real por kg de N efetivamente absorvido pela planta é comparável ou menor</strong> no Nitrato. E o produtor não precisa rezar para chover na hora certa.',
    pitch: 'Produtor, em agosto aqui em SP a temperatura passa de 35°C quase todo dia. A ureia que o senhor aplica às 14h vira amônia antes da chuva chegar. O Nitrato de Amônio 34% tem N nítrico — já está disponível para a planta na hora que cai. O custo por saco é um pouco maior, mas o senhor paga por 100% do N que a planta absorve, não por 60%. Posso fazer a conta por hectare?'
  },
  map: {
    titulo: 'MAP / NP de vocês vs SSP (Superfosfato Simples)',
    nosso: { label: 'NOSSO PRODUTO', nome: 'NP 10-46 / 08-40 / MAP 11-52 GR', cod: 'Cód. 2479 / 3534 / 0002' },
    concorrente: { label: 'CONCORRENTE', nome: 'SSP — Superfosfato Simples 18%', cod: 'Mercado genérico' },
    atributos: [
      { key: 'Teor de P₂O₅', nosso: '40–52% P₂O₅', deles: '18–20% P₂O₅', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Teor de N', nosso: '8–12% N (auxilia enraizamento)', deles: 'Zero', nosso_class: 'good', deles_class: '' },
      { key: 'Solubilidade em água', nosso: 'Alta — P disponível imediato', deles: 'Parcial — P menos solúvel', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Dose por hectare', nosso: 'Menor dose — mais concentrado', deles: 'Dose maior pelo baixo teor', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Logística / frete', nosso: 'Vantagem — menos ton para o mesmo P', deles: 'Desvantagem — mais volume', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Preço por ton', nosso: 'Maior nominal', deles: 'Menor nominal', nosso_class: 'bad', deles_class: 'good' },
      { key: 'Preço por kg de P₂O₅', nosso: 'Competitivo ou equivalente', deles: 'Comparável', nosso_class: '', deles_class: '' },
    ],
    culturas: [
      { cultura: 'Soja (sulco)', argumento: 'Alta exigência de P no enraizamento inicial. NP no sulco entrega P+N disponível de imediato.' },
      { cultura: 'Milho (sulco)', argumento: 'P no arranque é decisivo nas primeiras 3 semanas. Alta solubilidade do NP é superior.' },
      { cultura: 'Algodão', argumento: 'P crítico para desenvolvimento radicular em solo do Cerrado. Menor dose reduz operação.' },
      { cultura: 'Feijão', argumento: 'Ciclo curto exige P prontamente disponível — SSP pode chegar tarde.' },
    ],
    winner: 'O MAP/NP tem 2,5× mais P₂O₅ que o SSP. O produtor leva menos caminhões, menos operações de aplicação, e o P está disponível imediatamente. <strong>O custo por kg de P₂O₅ entregue na planta favorece o MAP/NP quando incluímos logística e eficiência agronômica.</strong>',
    pitch: 'O SSP tem 18% de P — o nosso NP tem 46%. Pra entregar o mesmo P para o senhor, o SSP precisa de quase 3 vezes mais volume. Mais frete, mais mão de obra, mais máquina. E o P do NP já está solúvel na hora que cai — o do SSP fica preso no grânulo por mais tempo. O custo final por quilo de P que a soja absorve é muito parecido. Mas a operação do senhor fica bem mais simples.'
  },
  kcl: {
    titulo: 'KCl 60% Standard vs KCl Branco 62%',
    nosso: { label: 'PRODUTO PADRÃO', nome: 'KCl 60% GR Standard', cod: 'Cód. 0006 — maior volume' },
    concorrente: { label: 'PREMIUM', nome: 'KCl Branco 62% Padrão', cod: 'Cód. 1957 — menor volume' },
    atributos: [
      { key: 'Teor K₂O', nosso: '60% K₂O', deles: '62% K₂O', nosso_class: '', deles_class: 'good' },
      { key: 'Teor de Cl', nosso: 'Similar — ambos cloreto', deles: 'Similar — ambos cloreto', nosso_class: '', deles_class: '' },
      { key: 'Pureza / aspecto', nosso: 'Padrão — granulometria normal', deles: 'Superior — granulometria uniforme', nosso_class: '', deles_class: 'good' },
      { key: 'Aplicação em fertirrigação', nosso: 'Pode ter resíduo insolúvel', deles: 'Mais indicado — maior pureza', nosso_class: 'bad', deles_class: 'good' },
      { key: 'Preço por ton', nosso: 'Mais econômico', deles: 'Premium — preço maior', nosso_class: 'good', deles_class: '' },
      { key: 'Volume vendido (vocês)', nosso: '109.620 ton/ano ✔', deles: '982 ton/ano', nosso_class: 'good', deles_class: '' },
    ],
    culturas: [
      { cultura: 'Soja / Milho / Algodão', argumento: 'KCl 60% standard é o padrão do mercado — produto correto para aplicação a lanço ou sulco.' },
      { cultura: 'Citros (fertirrigação)', argumento: 'KCl Branco 62% tem maior pureza — menos entupimento de gotejadores. Recomendar para irrigantes.' },
      { cultura: 'Coco (fertirrigação)', argumento: 'Cocais irrigados do NE se beneficiam do KCl Branco pela pureza e solubilidade.' },
    ],
    winner: 'O KCl 60% é o carro-chefe de vocês em volume (109k ton). O KCl Branco 62% é para nicho fertirrigação — <strong>use-o como upsell para clientes de citros e coco irrigado</strong>, onde a pureza justifica o preço premium.',
    pitch: 'Para aplicação no campo o KCl 60% atende perfeitamente — é o que o mercado usa. Mas para o senhor que usa fertirrigação em citros, o KCl Branco 62% tem granulometria mais uniforme e menos resíduo insolúvel que pode entupir gotejador. Vale a diferença de preço pela operação mais limpa.'
  },
  nks: {
    titulo: 'NKS 13-00-44+1MgO vs KCl + Ureia separados',
    nosso: { label: 'NOSSO PRODUTO', nome: 'NKS 13-00-44 + 1MgO', cod: 'Cód. 2033' },
    concorrente: { label: 'FORMA CONVENCIONAL', nome: 'KCl 60% + Ureia 45% (separados)', cod: 'Aplicação em 2 produtos' },
    atributos: [
      { key: 'Nutrientes entregues', nosso: 'N + K + S + Mg em 1 produto', deles: 'N + K em 2 produtos', nosso_class: 'good', deles_class: '' },
      { key: 'Enxofre (S)', nosso: '44% SO₃ — fonte de S significativa', deles: 'Zero S', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Magnésio (Mg)', nosso: '1% MgO incluso', deles: 'Zero Mg', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Passagens de máquina', nosso: 'Uma aplicação — custo operacional menor', deles: 'Duas aplicações — mais custo', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Preço por ton', nosso: 'Produto especializado — preço maior', deles: 'Mais barato nominalmente', nosso_class: 'bad', deles_class: 'good' },
      { key: 'Homogeneidade', nosso: 'Granulado uniforme — distribuição precisa', deles: 'Risco de segregação na mistura', nosso_class: 'good', deles_class: 'bad' },
    ],
    culturas: [
      { cultura: 'Cana-de-açúcar (soqueira)', argumento: 'Principal uso: N+K+S na soqueira pós-corte em uma passagem. Reduz custo operacional significativamente.' },
      { cultura: 'Pastagens (cobertura)', argumento: 'N+K+S para rebrota de pastagens — mesma lógica de passagem única.' },
      { cultura: 'Milho (cobertura)', argumento: 'S é nutriente esquecido no milho — o NKS entrega junto sem custo extra de operação.' },
    ],
    winner: 'O NKS 13-00-44 entrega N+K+S+Mg em uma única passagem. <strong>O produtor de cana paga pela operação de aplicação — cada passagem a menos é dinheiro no bolso dele.</strong> E o S incluso é diferencial técnico: solos do cerrado são cronicamente deficientes em enxofre.',
    pitch: 'Na soqueira o senhor precisa repor N e K de qualquer jeito. Com KCl mais ureia são duas operações — duas passagens de máquina, dois produtos pra controlar estoque. O NKS entrega N+K+S e Mg numa aplicação só. O S já vem incluso — sem custo extra — e o cerrado é deficiente em enxofre. Qual é o custo da hora máquina de uma passagem a menos por hectare? Faz a conta.'
  },
  boro: {
    titulo: 'Borogran 10% vs Boro 4% GR',
    nosso: { label: 'PRODUTO CONCENTRADO', nome: 'Borogran 10% GR', cod: 'Cód. 0013' },
    concorrente: { label: 'PRODUTO DILUÍDO', nome: 'Boro 4% GR', cod: 'Cód. 2880' },
    atributos: [
      { key: 'Teor de Boro', nosso: '10% B', deles: '4% B', nosso_class: 'good', deles_class: '' },
      { key: 'Dose por hectare', nosso: 'Menor dose — 1,5–3 kg/ha', deles: 'Dose maior — 3–6 kg/ha', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Custo por kg de B', nosso: 'Mais econômico pelo teor', deles: 'Menos eficiente', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Logística', nosso: 'Menos volume para o mesmo B', deles: 'Mais volume — mais frete', nosso_class: 'good', deles_class: 'bad' },
      { key: 'Aplicação', nosso: 'Solo ou foliar', deles: 'Solo ou foliar', nosso_class: '', deles_class: '' },
      { key: 'Preço por ton', nosso: 'Maior nominal', deles: 'Menor nominal', nosso_class: '', deles_class: '' },
    ],
    culturas: [
      { cultura: 'Algodão (floração)', argumento: 'B crítico para retenção de maçãs. Borogran 10% entrega dose efetiva com menos produto.' },
      { cultura: 'Soja (V3–R1)', argumento: 'B no enchimento de grão. Dose menor do Borogran simplifica o manejo.' },
      { cultura: 'Café (pré-florada)', argumento: 'B para frutificação — o mais crítico do calendário. Borogran 10% na dose certa.' },
      { cultura: 'Citros (pré-florada)', argumento: 'B para floração uniforme. Borogran 10% permite ajuste de dose mais preciso.' },
    ],
    winner: 'O Borogran 10% tem 2,5× mais B que o Boro 4%. <strong>Para o mesmo efeito agronômico, o produtor leva menos volume e paga menos frete.</strong> Posicione o Borogran 10% como o produto de melhor custo-benefício real — o Boro 4% fica para quando o cliente pede menor concentração por alguma especificidade.',
    pitch: 'O Boro 4% tem 4% de B, o Borogran 10% tem 10%. Para entregar o mesmo boro para o algodão na floração, o senhor precisa de 2,5 sacos do Boro 4% para cada saco do Borogran. Mais frete, mais estoque. O preço por saco do Borogran é maior, mas o custo por grama de B é menor. E boro na floração não é opcional — sem ele o senhor perde maçã.'
  }
};