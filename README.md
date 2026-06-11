# 📸 Capturer - Portfólio Fotográfico Ambiental

## Objetivo

Criar um site funcional e visualmente coerente que apresente um portfólio fotográfico sobre o meio ambiente, aplicando princípios de **Interação Humano-Computador (IHC)** para garantir boa usabilidade, acessibilidade e experiência do usuário.

Este projeto foi desenvolvido em celebração ao **Dia Mundial do Meio Ambiente (5 de junho)**, reforçando a importância da preservação ambiental e documentando a biodiversidade presente na Fatec Itu e seu entorno.

## 📋 Características Principais

### 1. **Estrutura e Conteúdo**
- **Três páginas principais**: Home, Galeria e Sobre
- **30+ fotografias** categorias por temática:
  - Flores (15 imagens)
  - Plantas e Arbustos (8 imagens)
  - Árvores (2 imagens)
  - Paisagens (5 imagens)

### 2. **Informações Detalhadas de Cada Foto**
Cada fotografia contém:
- 📝 **Título** - Nome descritivo da foto
- 📄 **Descrição** - Contexto e significância ambiental
- 📅 **Data** - Quando foi capturada
- 📍 **Local** - Onde foi fotografada (Fatec Itu e arredores)
- 📷 **Câmera/Celular** - Equipamento utilizado com lente
- 👤 **Fotógrafo** - Crédito ao autor
- 🔬 **Nome científico** - Identificação taxonômica da espécie

### 3. **Funcionalidades de UX/IHC**

#### Usabilidade
- Consistência visual em todas as páginas
- Navegação clara e intuitiva
- Feedback visual (hover, cliques, transições suaves)
- Organização lógica de conteúdo
- Design responsivo para todos os dispositivos

#### Acessibilidade
- Textos alternativos (alt) descritivos em todas as imagens
- Contraste adequado entre texto e fundo
- Navegação coerente para leitores de tela
- Tamanhos de fonte adequados
- Uso correto das cores com múltiplos níveis de diferenciação
- Aria-labels nos botões interativos

#### Acessibilidade
- Textos alternativos (alt) descritivos em todas as imagens
- Contraste adequado entre texto e fundo  
- Navegação coerente para leitores de tela
- Tamanhos de fonte adequados
- Modo claro/escuro para conforto visual

### 4. **Recursos Extras Implementados**

#### Lightbox Interativo
- Visualização em tela cheia das imagens
- Navegação com setas e pontos de navegação
- Exibição automática de informações detalhadas
- Botão de download para as imagens
- Modo claro e escuro integrado

#### Filtros de Categorias
- Todos, Flores, Plantas, Árvores, Paisagens
- Transições suaves ao alternar categorias
- Preserva a seleção durante a navegação

#### Animações Suaves
- ScrollReveal para elementos ao descer a página
- Transições de hover em componentes
- Fade in/out do lightbox
- Rotação do ícone de tema

#### Modo Claro/Escuro
- Toggle na navegação principal
- Persistência via localStorage
- Suporte a preferência do sistema
- Aplicado a todos os elementos da interface

#### Responsividade
- Design mobile-first
- Breakpoints para tablet e desktop
- Imagens adaptáveis
- Navegação otimizada para touchscreen

## Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos com variáveis CSS e media queries
- **JavaScript Vanilla** - Interatividade sem dependências

### Bibliotecas e Recursos
- **Swiper.js** - Carrossel no lightbox
- **ScrollReveal.js** - Animações ao scroll
- **Remixicon** - Ícones vetoriais
- **Google Fonts** - Tipografia (Merriweather + Montserrat)

### Dados
- **photoData.js** - Base de dados estruturada com informações de todas as fotos

## 📁 Estrutura do Projeto

```
IHC-Project/
├── index.html          # (página 1 - Home/Menu)
├── page-1.html         # Home com contexto ambiental
├── page-2.html         # Galeria com lightbox
├── page-3.html         # Sobre/Contato
├── main.js             # Lógica principal (menu, galeria, tema)
├── photoData.js        # Base de dados das fotos
├── styles.css          # Estilos globais com tema claro/escuro
├── README.md           # Este arquivo
└── img/                # Imagens (30+ fotografias)
    ├── flower-*.jpeg   # 15 imagens de flores
    ├── fruit-*.jpeg    # 4 imagens de frutos
    ├── bush-*.jpeg     # 4 imagens de arbustos
    ├── leaves-*.jpeg   # 2 imagens de folhas
    ├── tree-*.jpeg     # 2 imagens de árvores
    ├── sunset-*.jpeg   # 3 imagens de paisagens
    ├── ecological_nook.jpeg
    ├── header.jpeg
    ├── lamp_post.jpeg
    └── logo-*.png      # Logos (claro/escuro)
```

## 🎨 Decisões de Design Relacionadas a IHC

### 1. **Cores e Tema**
- **Modo Escuro (padrão)**: Reduz fadiga visual, ideal para galerias de fotos
- **Modo Claro**: Alternativa acessível para diferentes preferências
- **Contraste**: Cores complementares para máxima legibilidade

### 2. **Tipografia**
- **Títulos (Merriweather)**: Elegância e sofisticação
- **Corpo (Montserrat)**: Clareza e legibilidade
- **Tamanhos**: Proporções bem definidas para hierarquia visual

### 3. **Layout**
- **Grid responsivo**: Adapta-se a diferentes tamanhos de tela
- **Espaçamento**: Mantém a "respiração" visual
- **Alinhamento**: Centralizado para harmonia

### 4. **Interatividade**
- **Feedback visual**: Hover, cliques e transições indicam interatividade
- **Estados visuais**: Botão ativo, itens desabilitados, carregamento
- **Preventivo**: Mensagens de erro claras e caminhos de retorno

## 📱 Instruções de Navegação

### Home (page-1.html)
1. Contextualização sobre o Dia Mundial do Meio Ambiente
2. Texto introdutório sobre o projeto
3. Galeria de exibição com seleção de fotos

### Galeria (page-2.html)
1. Filtros de categoria no topo
2. Grid de fotos em colunas responsivas
3. Clique em qualquer foto para abrir o lightbox
4. No lightbox:
   - Use setas para navegar
   - Clique nos pontos para pular para foto específica
   - Veja informações detalhadas na base
   - Use o botão para baixar a imagem original

### Sobre/Contato (page-3.html)
- Informações sobre o projeto
- Dados de contato
- Créditos dos fotógrafos

## Modo Claro/Escuro

Clique no ícone de sol/lua na navegação para alternar entre os modos:
- **Lua 🌙**: Modo escuro (padrão)
- **Sol ☀️**: Modo claro

A preferência é salva no navegador e mantida entre sessões.

## Recursos de Acessibilidade

- Todas as imagens possuem alt text descritivos
- Contraste mínimo 4.5:1 (WCAG AA)
- Navegação por teclado totalmente funcional
- Aria-labels em botões e controles
- Sem conteúdo que pisca mais de 3x por segundo
- Fonte mínima de 14px para legibilidade

## 📊 Estatísticas do Projeto

- **Total de imagens**: 30+
- **Linhas de código**: ~1500+ (HTML + CSS + JS)
- **Páginas**: 3
- **Categorias**: 5
- **Tempo de carregamento**: <2s (otimizado)

## Como Executar

### Opção 1: Abrir Localmente
```bash
# Clone o repositório
git clone <URL-do-repositorio>

# Navegue até a pasta
cd IHC-Project

# Abra page-1.html no navegador
# Ou inicie um servidor local
python -m http.server 8000
# Acesse http://localhost:8000
```

### Opção 2: Hospedagem Online
- Deploy no GitHub Pages
- Deploy no Vercel ou Netlify
- Deploy em servidor próprio

## 📝 Notas Importantes

- Todas as fotografias são de autoria da equipe IHC
- Uma fotografia será selecionada para exposição nos murais da Fatec Itu
- Dados científicos estão baseados em identificações visuais da flora local
- Otimizado para navegadores modernos (Chrome, Firefox, Safari, Edge)

## 👥 Créditos

**Projeto IHC - Fatec Itu**
- Disciplina: Interação Humano-Computador
- Tema: Sustentabilidade e Dia Mundial do Meio Ambiente
- Data: Junho de 2024
    - Miguel Luiz Fredo
    - Pedro Henrique Rodrigues de Aguiar

## 📄 Licença

Este projeto é para fins educacionais. As imagens fotografadas são propriedade intelectual dos fotógrafos da equipe.
