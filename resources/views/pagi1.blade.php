<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NexCore Tech — Inovação em IA & Robótica | Robotinick</title>
<meta name="description" content="NexCore Tech: empresa de tecnologia especializada em IA, Robótica Humanoide e Automação. Conheça o Robotinick, nossa plataforma educacional de robótica.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800;900&family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('resources/css/app.css') }}">
</head>
<body>

<!-- SKIP TO MAIN CONTENT (acessibilidade) -->
<a href="#main-content" class="skip-link">Ir para o conteúdo principal</a>

<div class="grid-bg" aria-hidden="true"></div>

<!-- SPLASH -->
<div id="splash" role="status" aria-label="Carregando NexCore Tech">
  <div style="font-size:80px;animation:float 2s ease-in-out infinite;margin-bottom:20px" aria-hidden="true">🤖</div>
  <div class="splash-logo">NexCore Tech</div>
  <div class="splash-sub">INOVAÇÃO EM IA & ROBÓTICA</div>
  <div style="font-family:'Exo 2',sans-serif;font-size:13px;letter-spacing:4px;color:var(--text3);margin-top:8px">ROBOTINICK — PLATAFORMA EDUCACIONAL</div>
  <div class="splash-loading" aria-hidden="true">
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
  </div>
</div>

<!-- TOP BAR -->
<header>
  <nav id="topbar" aria-label="Navegação principal">
    <a class="logo" onclick="showCorpHome()" href="#" aria-label="NexCore Tech - Ir para página inicial">
      NexCore<span id="logo-sub">NEXCORE TECH</span>
    </a>

    <!-- Desktop Nav -->
    <div class="nav-links" role="menubar">
      <button class="nav-link active" id="nav-corp" onclick="showCorpHome()" role="menuitem">Início</button>
      <button class="nav-link" id="nav-about" onclick="showPage('about-page');setActiveNav('nav-about')" role="menuitem">Sobre</button>
      <button class="nav-link" id="nav-sol" onclick="showPage('solutions-page');setActiveNav('nav-sol')" role="menuitem">Soluções</button>
      <button class="nav-link" id="nav-team" onclick="showPage('team-page');setActiveNav('nav-team')" role="menuitem">Equipe</button>
      <button class="nav-link" id="nav-contact" onclick="showPage('contact-page');setActiveNav('nav-contact')" role="menuitem">Contato</button>
      <button class="nav-link" id="nav-robo" onclick="showRobotinick()" role="menuitem" style="color:var(--neon-blue);border:1px solid rgba(56,189,248,0.3);border-radius:6px;padding:5px 10px">🤖 Robotinick</button>
    </div>

    <div class="top-controls">
      <!-- Hamburger -->
      <button class="ham-btn" id="hamBtn" onclick="toggleMobileNav()" aria-label="Abrir menu de navegação" aria-expanded="false">☰</button>

      <button class="home-btn" id="homeBtn" onclick="showCorpHome()" aria-label="Voltar para início" style="display:none">
        ← Início
      </button>
      <div class="score-display" aria-label="Pontuação atual" role="status">
        <span class="score-icon" aria-hidden="true">⚡</span>
        <div>
          <div class="score-label" id="scoreLabel">PONTOS</div>
          <div class="score-val" id="scoreVal" aria-live="polite">0</div>
        </div>
      </div>
      <select class="lang-sel" id="langSel" onchange="changeLang(this.value)" aria-label="Selecionar idioma">
        <option value="pt">🇧🇷 PT</option>
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
        <option value="fr">🇫🇷 FR</option>
      </select>
      <button class="audio-btn active" id="audioBtn" onclick="toggleAudio()" aria-label="Assistente de voz - ativo" title="Assistente de Voz">
        🔊
      </button>
    </div>
  </nav>

  <!-- Mobile Nav Overlay -->
  <div class="mobile-nav" id="mobileNav" role="menu" aria-label="Menu mobile">
    <button class="nav-link" onclick="showCorpHome();closeMobileNav()" role="menuitem">🏠 Início</button>
    <button class="nav-link" onclick="showPage('about-page');setActiveNav('nav-about');closeMobileNav()" role="menuitem">🏢 Sobre</button>
    <button class="nav-link" onclick="showPage('solutions-page');setActiveNav('nav-sol');closeMobileNav()" role="menuitem">🚀 Soluções</button>
    <button class="nav-link" onclick="showPage('team-page');setActiveNav('nav-team');closeMobileNav()" role="menuitem">👥 Equipe</button>
    <button class="nav-link" onclick="showPage('contact-page');setActiveNav('nav-contact');closeMobileNav()" role="menuitem">📬 Contato</button>
    <button class="nav-link" onclick="showRobotinick();closeMobileNav()" role="menuitem" style="color:var(--neon-blue)">🤖 Robotinick</button>
  </div>
</header>

<!-- TOAST -->
<div class="toast" id="toast" role="status" aria-live="polite"></div>

<!-- ══════════════════════════════════════
     PAGE: CORPORATE HOME
══════════════════════════════════════ -->
<main id="main-content">

<div id="corp-home" class="page active">
  <section class="corp-hero" aria-labelledby="corp-title">
    <!-- Logo Mark SVG -->
    <div class="corp-logo-mark" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="rgba(56,189,248,0.3)" stroke-width="1"/>
        <circle cx="50" cy="50" r="36" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
        <!-- Hexagon shape -->
        <polygon points="50,8 88,29 88,71 50,92 12,71 12,29" fill="none" stroke="url(#grad1)" stroke-width="2"/>
        <!-- N letter -->
        <text x="50" y="62" text-anchor="middle" font-family="Orbitron" font-size="30" font-weight="900" fill="url(#grad1)">N</text>
        <!-- Orbit dots -->
        <circle cx="88" cy="50" r="4" fill="#38bdf8"/>
        <circle cx="12" cy="50" r="4" fill="#a78bfa"/>
        <circle cx="50" cy="8" r="3" fill="#4ade80"/>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#a78bfa"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="corp-badge" aria-label="Empresa de tecnologia">⚡ EMPRESA DE TECNOLOGIA DO FUTURO</div>
    <h1 class="corp-title" id="corp-title">NexCore<br>Tech</h1>
    <p class="corp-slogan">Construindo o Amanhã — Hoje</p>
    <p class="corp-tagline">Somos pioneiros em Inteligência Artificial, Robótica Humanoide e Automação Inteligente. Transformamos o impossível de hoje na realidade de amanhã.</p>

    <div class="stats-bar" role="list" aria-label="Estatísticas da empresa">
      <div class="stat-item" role="listitem">
        <div class="num" aria-label="6 projetos ativos">6+</div>
        <div class="lbl">Projetos Ativos</div>
      </div>
      <div class="stat-item" role="listitem">
        <div class="num" aria-label="4 soluções tecnológicas">4</div>
        <div class="lbl">Soluções Tech</div>
      </div>
      <div class="stat-item" role="listitem">
        <div class="num" aria-label="2025 ano de fundação">2025</div>
        <div class="lbl">Fundação</div>
      </div>
      <div class="stat-item" role="listitem">
        <div class="num" aria-label="100 porcento inovação">100%</div>
        <div class="lbl">Inovação</div>
      </div>
    </div>

    <div class="cta-group">
      <button class="cta-primary" onclick="showPage('solutions-page');setActiveNav('nav-sol')" aria-label="Ver nossas soluções tecnológicas">
        🚀 Nossas Soluções
      </button>
      <button class="cta-secondary" onclick="showRobotinick()" aria-label="Acessar plataforma Robotinick">
        🤖 Plataforma Robotinick
      </button>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>▼</span>
      <span style="font-size:10px;letter-spacing:2px">EXPLORE</span>
    </div>
  </section>

  <!-- SOLUTIONS PREVIEW -->
  <section class="solutions-preview" aria-labelledby="solutions-h2">
    <div class="section-header">
      <span class="section-eyebrow">O QUE FAZEMOS</span>
      <h2 class="section-h2" id="solutions-h2">NOSSAS TECNOLOGIAS</h2>
      <p class="section-sub">Da inteligência artificial à robótica humanoide, desenvolvemos soluções que redefinem os limites da tecnologia.</p>
    </div>
    <div class="solutions-grid">
      <article class="solution-card" style="--card-border:rgba(56,189,248,0.3);--card-glow:rgba(56,189,248,0.06)" onclick="showPage('solutions-page');setActiveNav('nav-sol')" tabindex="0" onkeydown="if(event.key==='Enter')this.click()" aria-label="Inteligência Artificial - Ver detalhes">
        <span class="sol-icon" aria-hidden="true">🧠</span>
        <div class="sol-tag" style="--sol-color:#38bdf8">INTELIGÊNCIA ARTIFICIAL</div>
        <h3 class="sol-title">IA Generativa & Cognitiva</h3>
        <p class="sol-desc">Modelos de aprendizado profundo que percebem, raciocinam e agem de forma autônoma em ambientes complexos.</p>
      </article>
      <article class="solution-card" style="--card-border:rgba(167,139,250,0.3);--card-glow:rgba(167,139,250,0.06)" onclick="showPage('solutions-page');setActiveNav('nav-sol')" tabindex="0" onkeydown="if(event.key==='Enter')this.click()" aria-label="Robótica Humanoide - Ver detalhes">
        <span class="sol-icon" aria-hidden="true">🤖</span>
        <div class="sol-tag" style="--sol-color:#a78bfa">ROBÓTICA HUMANOIDE</div>
        <h3 class="sol-title">Robôs de Nova Geração</h3>
        <p class="sol-desc">Robôs humanoides com percepção avançada, mobilidade bípede e capacidade de aprendizado em tempo real.</p>
      </article>
      <article class="solution-card" style="--card-border:rgba(74,222,128,0.3);--card-glow:rgba(74,222,128,0.06)" onclick="showPage('solutions-page');setActiveNav('nav-sol')" tabindex="0" onkeydown="if(event.key==='Enter')this.click()" aria-label="Automação Industrial - Ver detalhes">
        <span class="sol-icon" aria-hidden="true">⚙️</span>
        <div class="sol-tag" style="--sol-color:#4ade80">AUTOMAÇÃO INDUSTRIAL</div>
        <h3 class="sol-title">Fábricas do Futuro</h3>
        <p class="sol-desc">Sistemas de automação inteligente que integram IoT, visão computacional e controle em tempo real.</p>
      </article>
      <article class="solution-card" style="--card-border:rgba(251,146,60,0.3);--card-glow:rgba(251,146,60,0.06)" onclick="showPage('solutions-page');setActiveNav('nav-sol')" tabindex="0" onkeydown="if(event.key==='Enter')this.click()" aria-label="Tecnologia do Futuro - Ver detalhes">
        <span class="sol-icon" aria-hidden="true">🔮</span>
        <div class="sol-tag" style="--sol-color:#fb923c">TECNOLOGIA DO FUTURO</div>
        <h3 class="sol-title">Computação Quântica & BCI</h3>
        <p class="sol-desc">Exploramos interfaces cérebro-computador, computação quântica e nanorobótica para definir o próximo século.</p>
      </article>
    </div>
  </section>

  <!-- ROBOTINICK PROMO -->
  <section class="robo-promo" aria-labelledby="robo-promo-h2">
    <div style="font-size:72px;animation:float 3s ease-in-out infinite;display:inline-block;margin-bottom:20px" aria-hidden="true">🤖</div>
    <h2 id="robo-promo-h2">ROBOTINICK</h2>
    <p class="corp-slogan" style="-webkit-text-fill-color:var(--neon-cyan);margin-bottom:16px">PLATAFORMA EDUCACIONAL DE ROBÓTICA</p>
    <p>Nossa plataforma educacional interativa com 6 robôs especializados. Aprenda eletrônica, programação, mecânica, IA e muito mais de forma divertida e gamificada!</p>
    <div class="cta-group" style="justify-content:center">
      <button class="cta-primary" onclick="showRobotinick()" aria-label="Acessar plataforma educacional Robotinick">
        🚀 Acessar Plataforma
      </button>
    </div>
  </section>
</div>

<!-- ══════════════════════════════════════
     PAGE: SOBRE
══════════════════════════════════════ -->
<div id="about-page" class="page">
  <div class="corp-page-wrap">
    <div class="page-title-block">
      <span class="page-eyebrow">QUEM SOMOS</span>
      <h1 class="page-h1">SOBRE A NEXCORE TECH</h1>
      <p class="page-lead">A NexCore Tech é uma empresa de tecnologia de vanguarda fundada com a missão de democratizar a inteligência artificial, a robótica e a automação. Acreditamos que a tecnologia do futuro deve ser acessível, educativa e humana.</p>
    </div>

    <!-- Missão, Visão, Impacto -->
    <div class="mvi-grid" role="list">
      <article class="mvi-card" role="listitem" aria-label="Missão da empresa">
        <span class="mvi-icon" aria-hidden="true">🎯</span>
        <div class="mvi-label">MISSÃO</div>
        <h2 class="mvi-title">Nossa Razão de Existir</h2>
        <p class="mvi-text">Democratizar o acesso à tecnologia de ponta — tornando IA, robótica e automação compreensíveis, acessíveis e transformadoras para pessoas, escolas e empresas ao redor do mundo.</p>
      </article>
      <article class="mvi-card" role="listitem" aria-label="Visão da empresa">
        <span class="mvi-icon" aria-hidden="true">🔭</span>
        <div class="mvi-label">VISÃO</div>
        <h2 class="mvi-title">Onde Queremos Chegar</h2>
        <p class="mvi-text">Ser a referência global em tecnologia educacional e robótica inteligente até 2030 — contribuindo para uma geração capaz de criar, programar e inovar com autonomia e consciência.</p>
      </article>
      <article class="mvi-card" role="listitem" aria-label="Impacto social da empresa">
        <span class="mvi-icon" aria-hidden="true">🌍</span>
        <div class="mvi-label">IMPACTO</div>
        <h2 class="mvi-title">Nosso Compromisso</h2>
        <p class="mvi-text">Mais de 500 estudantes impactados com nossa plataforma Robotinick. Parceria com escolas técnicas e universidades. Foco em inclusão digital e acessibilidade no ensino de tecnologia.</p>
      </article>
    </div>

    <!-- Valores -->
    <h2 style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:800;color:#fff;letter-spacing:3px;margin-bottom:20px">NOSSOS VALORES</h2>
    <div class="values-list" role="list">
      <div class="value-item" role="listitem">
        <span class="value-icon" aria-hidden="true">💡</span>
        <div class="value-text"><strong>Inovação</strong><span>Sempre além do estado da arte</span></div>
      </div>
      <div class="value-item" role="listitem">
        <span class="value-icon" aria-hidden="true">♿</span>
        <div class="value-text"><strong>Acessibilidade</strong><span>Tecnologia para todos</span></div>
      </div>
      <div class="value-item" role="listitem">
        <span class="value-icon" aria-hidden="true">🤝</span>
        <div class="value-text"><strong>Colaboração</strong><span>Juntos somos mais fortes</span></div>
      </div>
      <div class="value-item" role="listitem">
        <span class="value-icon" aria-hidden="true">🎓</span>
        <div class="value-text"><strong>Educação</strong><span>Aprendizado contínuo</span></div>
      </div>
      <div class="value-item" role="listitem">
        <span class="value-icon" aria-hidden="true">🛡️</span>
        <div class="value-text"><strong>Ética</strong><span>IA responsável e segura</span></div>
      </div>
      <div class="value-item" role="listitem">
        <span class="value-icon" aria-hidden="true">🌱</span>
        <div class="value-text"><strong>Sustentabilidade</strong><span>Futuro consciente</span></div>
      </div>
    </div>

    <!-- Timeline -->
    <h2 style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:800;color:#fff;letter-spacing:3px;margin:40px 0 24px">NOSSA HISTÓRIA</h2>
    <div class="timeline" aria-label="Linha do tempo da empresa">
      <div class="tl-item" style="--tl-color:#38bdf8">
        <div class="tl-year">2023</div>
        <div class="tl-title">Fundação da NexCore Tech</div>
        <p class="tl-desc">Nascida de um projeto universitário, a NexCore Tech foi fundada por estudantes de Engenharia e Ciências da Computação apaixonados por robótica e IA.</p>
      </div>
      <div class="tl-item" style="--tl-color:#a78bfa">
        <div class="tl-year">2024</div>
        <div class="tl-title">Lançamento do Robotinick v1.0</div>
        <p class="tl-desc">Primeira versão da plataforma educacional Robotinick, com suporte a 3 robôs educacionais e 2 idiomas. Piloto em 5 escolas parceiras.</p>
      </div>
      <div class="tl-item" style="--tl-color:#4ade80">
        <div class="tl-year">2025</div>
        <div class="tl-title">Expansão & Robotinick v2.0</div>
        <p class="tl-desc">6 robôs educacionais, suporte a 4 idiomas, sistema de pontos e conquistas. Parcerias com faculdades e institutos federais de tecnologia.</p>
      </div>
      <div class="tl-item" style="--tl-color:#facc15">
        <div class="tl-year">2026+</div>
        <div class="tl-title">Visão: IA Embarcada em Robôs Físicos</div>
        <p class="tl-desc">Desenvolvimento de kits físicos de robótica integrados à plataforma Robotinick, com IA embarcada e conectividade IoT.</p>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     PAGE: SOLUÇÕES
══════════════════════════════════════ -->
<div id="solutions-page" class="page">
  <div class="corp-page-wrap">
    <div class="page-title-block">
      <span class="page-eyebrow">TECNOLOGIAS</span>
      <h1 class="page-h1">NOSSAS SOLUÇÕES</h1>
      <p class="page-lead">Desenvolvemos tecnologia de ponta em quatro frentes estratégicas que moldarão os próximos 50 anos da civilização humana.</p>
    </div>

    <div class="solution-detail" style="--sol-c:#38bdf8">
      <div class="sol-detail-icon" aria-hidden="true">🧠</div>
      <div>
        <div class="sol-detail-badge" style="--sol-c:#38bdf8">ÁREA 01</div>
        <h2 class="sol-detail-title">INTELIGÊNCIA ARTIFICIAL</h2>
        <p class="sol-detail-desc">Desenvolvemos modelos de IA que combinam percepção visual, processamento de linguagem natural e tomada de decisão autônoma. Nossa IA aprende continuamente com dados do mundo real, adaptando-se a novos contextos sem necessidade de reprogramação manual. Aplicações em saúde, educação, logística e manufatura.</p>
        <div class="feature-list" role="list" aria-label="Funcionalidades de IA">
          <span class="feature-tag" role="listitem">🔬 Machine Learning</span>
          <span class="feature-tag" role="listitem">👁️ Visão Computacional</span>
          <span class="feature-tag" role="listitem">💬 NLP / LLM</span>
          <span class="feature-tag" role="listitem">🎯 RL Autônomo</span>
          <span class="feature-tag" role="listitem">📊 Análise Preditiva</span>
          <span class="feature-tag" role="listitem">🧬 IA Generativa</span>
        </div>
      </div>
    </div>

    <div class="solution-detail" style="--sol-c:#a78bfa">
      <div class="sol-detail-icon" aria-hidden="true">🤖</div>
      <div>
        <div class="sol-detail-badge" style="--sol-c:#a78bfa">ÁREA 02</div>
        <h2 class="sol-detail-title">ROBÓTICA HUMANOIDE</h2>
        <p class="sol-detail-desc">Projetamos robôs humanoides com mais de 30 graus de liberdade, capazes de navegar em ambientes humanos, manipular objetos delicados e comunicar-se em linguagem natural. Integração nativa com modelos de IA para aprendizado por demonstração e adaptação em tempo real.</p>
        <div class="feature-list" role="list" aria-label="Funcionalidades de robótica">
          <span class="feature-tag" role="listitem">🦾 Mobilidade Bípede</span>
          <span class="feature-tag" role="listitem">✋ Manipulação Fina</span>
          <span class="feature-tag" role="listitem">🗣️ Voz Natural</span>
          <span class="feature-tag" role="listitem">📡 Multi-Sensor</span>
          <span class="feature-tag" role="listitem">🔋 8h Autonomia</span>
          <span class="feature-tag" role="listitem">☁️ Cloud-Connected</span>
        </div>
      </div>
    </div>

    <div class="solution-detail" style="--sol-c:#4ade80">
      <div class="sol-detail-icon" aria-hidden="true">⚙️</div>
      <div>
        <div class="sol-detail-badge" style="--sol-c:#4ade80">ÁREA 03</div>
        <h2 class="sol-detail-title">AUTOMAÇÃO INTELIGENTE</h2>
        <p class="sol-detail-desc">Sistemas de automação que vão além do controle programático tradicional. Integramos sensores IoT, visão computacional e IA para criar linhas de produção que se auto-otimizam, detectam falhas preventivamente e se adaptam a variações de demanda sem intervenção humana.</p>
        <div class="feature-list" role="list" aria-label="Funcionalidades de automação">
          <span class="feature-tag" role="listitem">🏭 Industry 4.0</span>
          <span class="feature-tag" role="listitem">📶 IoT Integration</span>
          <span class="feature-tag" role="listitem">⚡ Real-time Control</span>
          <span class="feature-tag" role="listitem">🔍 Predictive Maintenance</span>
          <span class="feature-tag" role="listitem">🌐 SCADA/DCS</span>
          <span class="feature-tag" role="listitem">🛡️ Cyber-Security</span>
        </div>
      </div>
    </div>

    <div class="solution-detail" style="--sol-c:#fb923c">
      <div class="sol-detail-icon" aria-hidden="true">🔮</div>
      <div>
        <div class="sol-detail-badge" style="--sol-c:#fb923c">ÁREA 04</div>
        <h2 class="sol-detail-title">TECNOLOGIA DO FUTURO</h2>
        <p class="sol-detail-desc">Nossa divisão de P&D explora as fronteiras do possível: interfaces cérebro-computador (BCI) para controle direto de robôs via pensamento, computação quântica aplicada à otimização de trajetórias robóticas, e nanorobótica para aplicações médicas minimamente invasivas.</p>
        <div class="feature-list" role="list" aria-label="Tecnologias futuras">
          <span class="feature-tag" role="listitem">🧬 BCI / Neurotech</span>
          <span class="feature-tag" role="listitem">⚛️ Computação Quântica</span>
          <span class="feature-tag" role="listitem">🔬 Nanorobótica</span>
          <span class="feature-tag" role="listitem">🌌 Space Robotics</span>
          <span class="feature-tag" role="listitem">🧪 Biohíbridos</span>
          <span class="feature-tag" role="listitem">🔗 Blockchain + IA</span>
        </div>
      </div>
    </div>

    <!-- Robotinick como produto -->
    <div class="solution-detail" style="--sol-c:#22d3ee;margin-top:28px">
      <div class="sol-detail-icon" aria-hidden="true">🎓</div>
      <div>
        <div class="sol-detail-badge" style="--sol-c:#22d3ee">PRODUTO EDUCACIONAL</div>
        <h2 class="sol-detail-title">ROBOTINICK — PLATAFORMA EDUCACIONAL</h2>
        <p class="sol-detail-desc">Nossa principal solução comercial para o setor educacional. O Robotinick é uma plataforma SaaS gamificada de ensino de robótica, eletrônica, programação e IA para estudantes do ensino médio ao universitário. Sistema de pontos, conquistas, 4 idiomas e 6 robôs educacionais interativos.</p>
        <div class="feature-list" role="list" aria-label="Funcionalidades do Robotinick">
          <span class="feature-tag" role="listitem">🤖 6 Robôs Temáticos</span>
          <span class="feature-tag" role="listitem">🌎 4 Idiomas</span>
          <span class="feature-tag" role="listitem">🏆 Gamificação</span>
          <span class="feature-tag" role="listitem">🔊 Assistente de Voz</span>
          <span class="feature-tag" role="listitem">♿ Acessível</span>
          <span class="feature-tag" role="listitem">📱 Responsivo</span>
        </div>
        <button class="cta-primary" style="margin-top:20px" onclick="showRobotinick()" aria-label="Acessar plataforma Robotinick">
          🚀 Acessar Robotinick
        </button>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     PAGE: EQUIPE & CRONOGRAMA
══════════════════════════════════════ -->
<div id="team-page" class="page">
  <div class="corp-page-wrap">
    <div class="page-title-block">
      <span class="page-eyebrow">PESSOAS</span>
      <h1 class="page-h1">NOSSA EQUIPE</h1>
      <p class="page-lead">Um time multidisciplinar de apaixonados por tecnologia, design e educação — unidos pelo propósito de construir o futuro.</p>
    </div>

    <div class="team-grid" role="list" aria-label="Membros da equipe">
      <article class="team-card" role="listitem">
        <div class="team-avatar" aria-hidden="true">👩‍💻</div>
        <div class="team-name">ANA SILVA</div>
        <div class="team-role">Líder de Projeto & Dev Full-Stack</div>
        <p class="team-task">Coordenação geral, desenvolvimento do front-end no Robotinick, arquitetura do sistema e integração com backend Laravel.</p>
      </article>
      <article class="team-card" role="listitem">
        <div class="team-avatar" aria-hidden="true">👨‍🎨</div>
        <div class="team-name">PEDRO COSTA</div>
        <div class="team-role">UI/UX Designer & Figma</div>
        <p class="team-task">Protótipo de alta fidelidade no Figma, identidade visual, sistema de design, paleta de cores e componentes da interface.</p>
      </article>
      <article class="team-card" role="listitem">
        <div class="team-avatar" aria-hidden="true">👩‍🔬</div>
        <div class="team-name">JULIA MENDES</div>
        <div class="team-role">Conteúdo Educacional & IA</div>
        <p class="team-task">Criação dos conteúdos educacionais dos 6 robôs, pesquisa pedagógica, quiz e desafios interativos da plataforma Robotinick.</p>
      </article>
      <article class="team-card" role="listitem">
        <div class="team-avatar" aria-hidden="true">👨‍⚙️</div>
        <div class="team-name">LUCAS OLIVEIRA</div>
        <div class="team-role">Back-end & Laravel/Vite</div>
        <p class="team-task">Configuração do ambiente Laravel + Vite, estrutura de rotas, banco de dados, API REST e deploy do sistema.</p>
      </article>
      <article class="team-card" role="listitem">
        <div class="team-avatar" aria-hidden="true">👩‍📊</div>
        <div class="team-name">CAMILA FERREIRA</div>
        <div class="team-role">Apresentação & Marketing</div>
        <p class="team-task">Criação da apresentação em Canva/PPT, roteiro e edição do vídeo de 1:50–3 minutos, cronograma e documentação do projeto.</p>
      </article>
      <article class="team-card" role="listitem">
        <div class="team-avatar" aria-hidden="true">👨‍🔧</div>
        <div class="team-name">RAFAEL SANTOS</div>
        <div class="team-role">Acessibilidade & QA</div>
        <p class="team-task">Testes de acessibilidade WCAG, validação de contraste, semântica HTML, responsividade mobile e garantia de qualidade geral.</p>
      </article>
    </div>

    <!-- CRONOGRAMA -->
    <h2 style="font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;color:#fff;letter-spacing:3px;margin-bottom:24px">CRONOGRAMA DO PROJETO</h2>
    <div style="overflow-x:auto" role="region" aria-label="Tabela de cronograma do projeto">
      <table class="cronograma-table" aria-label="Cronograma de tarefas por integrante">
        <thead>
          <tr>
            <th scope="col">SEMANA</th>
            <th scope="col">INTEGRANTE</th>
            <th scope="col">FUNÇÃO</th>
            <th scope="col">TAREFA</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sem. 1</td>
            <td>Ana Silva</td>
            <td>Líder / Dev</td>
            <td>Definição de escopo, estrutura HTML/CSS base, criação das 6 páginas principais</td>
            <td><span class="status-badge status-done">✅ Concluído</span></td>
          </tr>
          <tr>
            <td>Sem. 1</td>
            <td>Pedro Costa</td>
            <td>UI/UX</td>
            <td>Wireframes low-fi, paleta de cores, tipografia, logo e slogan no Figma</td>
            <td><span class="status-badge status-done">✅ Concluído</span></td>
          </tr>
          <tr>
            <td>Sem. 2</td>
            <td>Julia Mendes</td>
            <td>Conteúdo</td>
            <td>Criação dos conteúdos educacionais dos 6 robôs, quizzes e desafios</td>
            <td><span class="status-badge status-done">✅ Concluído</span></td>
          </tr>
          <tr>
            <td>Sem. 2</td>
            <td>Lucas Oliveira</td>
            <td>Back-end</td>
            <td>Setup Laravel + Vite, rotas, banco de dados SQLite para progresso do usuário</td>
            <td><span class="status-badge status-progress">🔄 Em andamento</span></td>
          </tr>
          <tr>
            <td>Sem. 3</td>
            <td>Ana Silva</td>
            <td>Dev Full-Stack</td>
            <td>Sistema de pontos, conquistas, assistente de voz, suporte a 4 idiomas</td>
            <td><span class="status-badge status-done">✅ Concluído</span></td>
          </tr>
          <tr>
            <td>Sem. 3</td>
            <td>Pedro Costa</td>
            <td>UI/UX</td>
            <td>Protótipo alta fidelidade Figma, animações, componentes interativos</td>
            <td><span class="status-badge status-done">✅ Concluído</span></td>
          </tr>
          <tr>
            <td>Sem. 4</td>
            <td>Rafael Santos</td>
            <td>QA / Acessibilidade</td>
            <td>Testes WCAG 2.1, atributos ARIA, contraste, semântica, responsividade mobile</td>
            <td><span class="status-badge status-progress">🔄 Em andamento</span></td>
          </tr>
          <tr>
            <td>Sem. 4</td>
            <td>Camila Ferreira</td>
            <td>Marketing</td>
            <td>Roteiro e gravação do vídeo (2 min), apresentação Canva, cronograma</td>
            <td><span class="status-badge status-progress">🔄 Em andamento</span></td>
          </tr>
          <tr>
            <td>Sem. 5</td>
            <td>Todos</td>
            <td>Entrega Final</td>
            <td>Revisão geral, ajustes finais, deploy, documentação e apresentação ao professor</td>
            <td><span class="status-badge status-pending">⏳ Pendente</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Tecnologias usadas -->
    <h2 style="font-family:'Orbitron',sans-serif;font-size:16px;font-weight:800;color:#fff;letter-spacing:3px;margin-bottom:20px">TECNOLOGIAS UTILIZADAS</h2>
    <div class="feature-list" role="list" aria-label="Tecnologias do projeto" style="gap:12px">
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">🟠 Laravel 11</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">⚡ Vite 5</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">🎨 HTML5 + CSS3</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">⚙️ JavaScript ES2024</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">🎯 Figma</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">♿ WCAG 2.1</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">🔊 Web Speech API</span>
      <span class="feature-tag" role="listitem" style="font-size:13px;padding:8px 16px">📱 Responsive Design</span>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     PAGE: CONTATO
══════════════════════════════════════ -->
<div id="contact-page" class="page">
  <div class="corp-page-wrap">
    <div class="page-title-block">
      <span class="page-eyebrow">FALE CONOSCO</span>
      <h1 class="page-h1">CONTATO</h1>
      <p class="page-lead">Interessado em implementar o Robotinick na sua instituição ou conhecer nossas soluções? Entre em contato com nossa equipe.</p>
    </div>

    <div class="contact-grid">
      <div class="contact-info-block" aria-label="Informações de contato">
        <h2>INFORMAÇÕES</h2>
        <div class="contact-item">
          <div class="ci-icon" aria-hidden="true">📍</div>
          <div>
            <div class="ci-label">Endereço</div>
            <div class="ci-value">Av. Tecnologia, 2048<br>São Paulo, SP — Brasil</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="ci-icon" aria-hidden="true">📧</div>
          <div>
            <div class="ci-label">E-mail</div>
            <div class="ci-value">contato@nexcoretech.com.br</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="ci-icon" aria-hidden="true">📱</div>
          <div>
            <div class="ci-label">Telefone</div>
            <div class="ci-value">+55 (11) 9 8765-4321</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="ci-icon" aria-hidden="true">🕐</div>
          <div>
            <div class="ci-label">Horário</div>
            <div class="ci-value">Seg–Sex: 08h–18h<br>Sáb: 09h–13h</div>
          </div>
        </div>
        <div style="margin-top:20px;padding:16px;background:rgba(56,189,248,0.06);border:1px solid rgba(56,189,248,0.2);border-radius:12px">
          <div style="font-size:12px;color:var(--neon-blue);letter-spacing:2px;margin-bottom:8px">🎓 PARA INSTITUIÇÕES</div>
          <p style="font-size:13px;color:var(--text2);line-height:1.6">Oferecemos planos especiais para escolas, faculdades e institutos federais. Solicite uma demonstração gratuita do Robotinick!</p>
        </div>
      </div>

      <div class="contact-form" aria-label="Formulário de contato">
        <h2>ENVIAR MENSAGEM</h2>
        <div class="form-group">
          <label class="form-label" for="contact-name">Nome completo</label>
          <input type="text" id="contact-name" class="form-input" placeholder="Seu nome" autocomplete="name" required aria-required="true">
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-email">E-mail</label>
          <input type="email" id="contact-email" class="form-input" placeholder="seu@email.com" autocomplete="email" required aria-required="true">
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-inst">Instituição</label>
          <input type="text" id="contact-inst" class="form-input" placeholder="Nome da escola/faculdade" autocomplete="organization">
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-subject">Assunto</label>
          <select id="contact-subject" class="form-input" aria-label="Selecione o assunto">
            <option value="">Selecione...</option>
            <option value="demo">Demo do Robotinick</option>
            <option value="parceria">Parceria Educacional</option>
            <option value="solucoes">Soluções Corporativas</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="contact-msg">Mensagem</label>
          <textarea id="contact-msg" class="form-input" placeholder="Sua mensagem..." aria-required="true" required></textarea>
        </div>
        <button class="cta-primary" style="width:100%;justify-content:center" onclick="submitForm()" aria-label="Enviar mensagem de contato">
          📨 Enviar Mensagem
        </button>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     PAGE: ROBOTINICK HOME
══════════════════════════════════════ -->
<div id="home" class="page">
  <div class="hero">
    <div class="hero-badge" data-i18n="hero_badge">🚀 PLATAFORMA DE ROBÓTICA EDUCACIONAL</div>
    <div class="robot-mascot" aria-hidden="true">🤖</div>
    <h1>ROBOTINICK</h1>
    <div class="hero-sub" data-i18n="hero_sub">O FUTURO DO APRENDIZADO</div>
    <p data-i18n="hero_desc">Explore o universo da robótica e eletrônica com 6 robôs educacionais especializados. Aprenda, jogue e ganhe pontos em uma jornada de descobertas tecnológicas!</p>
    <button class="cta-secondary" onclick="showCorpHome()" style="margin:0 auto;display:inline-flex" aria-label="Voltar ao site da empresa NexCore Tech">
      ← Voltar para NexCore Tech
    </button>
  </div>

  <div class="section-title" data-i18n="choose_robot" role="heading" aria-level="2">▸ ESCOLHA SEU ROBÔ EDUCADOR ◂</div>

  <div class="robots-grid" id="robotsGrid" role="list" aria-label="Robôs educacionais disponíveis"></div>
</div>

<!-- ══════════════════════════════════════
     PAGE: ROBOT (dinâmica)
══════════════════════════════════════ -->
<div id="robotPage" class="page">
  <div class="robot-page" id="robotContent"></div>
</div>

<!-- ══════════════════════════════════════
     PAGE: PROGRESS
══════════════════════════════════════ -->
<div id="progressPage" class="page">
  <div class="robot-page">
    <div style="margin-bottom:30px">
      <div style="font-family:'Orbitron',sans-serif;font-size:11px;letter-spacing:3px;color:var(--neon-cyan);margin-bottom:8px" data-i18n="your_journey">SUA JORNADA</div>
      <h2 style="font-family:'Orbitron',sans-serif;font-size:28px;font-weight:900;color:#fff;letter-spacing:2px" data-i18n="progress_title">PROGRESSO</h2>
    </div>
    <div class="progress-overview" id="progressStats" role="list" aria-label="Estatísticas de progresso"></div>
    <div style="font-family:'Orbitron',sans-serif;font-size:11px;letter-spacing:3px;color:var(--text3);text-transform:uppercase;margin:30px 0 16px" data-i18n="by_robot">POR ROBÔ</div>
    <div class="robot-prog-list" id="progressList" role="list" aria-label="Progresso por robô"></div>
    <div style="font-family:'Orbitron',sans-serif;font-size:11px;letter-spacing:3px;color:var(--text3);text-transform:uppercase;margin:30px 0 16px" data-i18n="trophies">CONQUISTAS</div>
    <div class="trophies-grid" id="trophiesGrid" role="list" aria-label="Conquistas desbloqueadas"></div>
  </div>
</div>

</main>

<!-- ══════════════════════════════════════
     FOOTER
══════════════════════════════════════ -->
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="logo-text">NexCore Tech</span>
      <span class="tagline">CONSTRUINDO O AMANHÃ — HOJE</span>
      <p>Empresa de tecnologia especializada em IA, Robótica Humanoide, Automação e Educação Tecnológica. Criadores da plataforma Robotinick.</p>
    </div>
    <nav class="footer-col" aria-label="Links da empresa">
      <h4>EMPRESA</h4>
      <ul>
        <li><button onclick="showCorpHome()">Início</button></li>
        <li><button onclick="showPage('about-page');setActiveNav('nav-about')">Sobre</button></li>
        <li><button onclick="showPage('team-page');setActiveNav('nav-team')">Equipe</button></li>
        <li><button onclick="showPage('contact-page');setActiveNav('nav-contact')">Contato</button></li>
      </ul>
    </nav>
    <nav class="footer-col" aria-label="Links de soluções">
      <h4>SOLUÇÕES</h4>
      <ul>
        <li><button onclick="showPage('solutions-page');setActiveNav('nav-sol')">Inteligência Artificial</button></li>
        <li><button onclick="showPage('solutions-page');setActiveNav('nav-sol')">Robótica Humanoide</button></li>
        <li><button onclick="showPage('solutions-page');setActiveNav('nav-sol')">Automação</button></li>
        <li><button onclick="showRobotinick()">Robotinick Edu</button></li>
      </ul>
    </nav>
    <nav class="footer-col" aria-label="Links do Robotinick">
      <h4>ROBOTINICK</h4>
      <ul>
        <li><button onclick="showRobotinick()">Plataforma</button></li>
        <li><button onclick="showRobotinick();setTimeout(()=>showProgress(),300)">Meu Progresso</button></li>
        <li><button onclick="showPage('solutions-page');setActiveNav('nav-sol')">Para Escolas</button></li>
        <li><button onclick="showPage('contact-page');setActiveNav('nav-contact')">Demonstração</button></li>
      </ul>
    </nav>
  </div>
  <div class="footer-bottom">
    <p>© 2025 NexCore Tech. Todos os direitos reservados. Robotinick® é uma marca registrada.</p>
    <div class="badges" role="list" aria-label="Certificações">
      <span class="footer-badge" role="listitem">♿ WCAG 2.1</span>
      <span class="footer-badge" role="listitem">📱 Responsivo</span>
      <span class="footer-badge" role="listitem">🌍 Multi-idioma</span>
    </div>
  </div>
</footer>

    <script src="{{ asset('js/robotinick.js') }}"></script>
</body>
</html>