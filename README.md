# AgroMapa

Ferramenta B2B da **Adubos Vera Cruz** para apoio à força de vendas no agronegócio brasileiro.

## O que é

Site estático que centraliza dados agrícolas em tempo real: calendário de safras por estado, calculadora de insumos, comparativo de produtos, cotações ao vivo e clima.

## Funcionalidades

| Seção | Descrição |
|---|---|
| **Mapa** | Mapa interativo do Brasil — seleciona estado e exibe culturas, janelas de plantio/colheita e detalhes |
| **Calculadora** | Estimativa de custo de insumos por cultura e área |
| **Comparativo** | Análise comparativa de produtos Vera Cruz por cultura |
| **Produtos** | Catálogo de fertilizantes com especificações |
| **KPIs** | Câmbio USD/BRL ao vivo, cotações CEPEA (soja, milho, café…) |
| **Clima** | Previsão OpenWeatherMap com imagem de cena por horário |
| **Notícias** | Feed RSS de Canal Rural, Globo Rural, Not. Agrícolas e Reuters Agro |

## Stack

- HTML5 + CSS3 + Vanilla JavaScript (sem framework, sem build tool)
- [Chart.js](https://www.chartjs.org/) — gráfico de produtividade
- [OpenWeatherMap API](https://openweathermap.org/api) — clima e previsão
- [Awesome API](https://docs.awesomeapi.com.br/) — câmbio USD/BRL em tempo real
- [RSS2JSON](https://rss2json.com/) — feeds RSS sem proxy
- CEPEA/ESALQ — cotações via scraping com proxy

## Ambientes

| Ambiente | Branch | URL |
|---|---|---|
| Produção | `main` | https://brave-mushroom-08db25c1e.1.azurestaticapps.net |
| Homologação | `staging` | https://brave-mushroom-08db25c1e-staging.westus2.1.azurestaticapps.net |

## Fluxo de deploy

```
feature/fix → staging → QA → PR staging→main → produção
```

1. Desenvolve e commita na branch `staging`
2. Acessa a URL de homologação para QA
3. Abre Pull Request `staging → main` no GitHub
4. Merge dispara o deploy automático em produção via GitHub Actions

## Estrutura

```
/
├── index.html          # Estrutura HTML
├── css/styles.css      # Todos os estilos
├── js/
│   ├── data.js         # Dados estáticos (culturas, estados, produtos)
│   └── main.js         # Lógica da aplicação e integrações
├── favicon.png
├── logo.png
└── scene-*.jpg         # Imagens de fundo do widget de clima
```

## Infraestrutura

- **Azure Static Web Apps** — Standard SKU, região West US 2
- **GitHub Actions** — CI/CD automático em push para `main` e `staging`
- **Repositório:** github.com/yagooluz-sudo/uralchem
