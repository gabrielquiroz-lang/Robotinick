import './bootstrap';
// ══════════════════════════════════════════
// DATA & CONFIG
// ══════════════════════════════════════════
const ROBOTS = [
  {id:'robo1',icon:'🦾',color:'#38bdf8',glow:'rgba(56,189,248,0.12)',themes:{pt:{name:'BOLT',theme:'Eletrônica Básica',desc:'Aprenda sobre circuitos, componentes eletrônicos e como a energia elétrica funciona no mundo da robótica.'},en:{name:'BOLT',theme:'Basic Electronics',desc:'Learn about circuits, electronic components and how electrical energy works in robotics.'},es:{name:'BOLT',theme:'Electrónica Básica',desc:'Aprende sobre circuitos, componentes electrónicos y cómo funciona la energía eléctrica en robótica.'},fr:{name:'BOLT',theme:'Électronique de Base',desc:'Découvrez les circuits, les composants électroniques et comment l\'énergie électrique fonctionne.'}}},
  {id:'robo2',icon:'🤖',color:'#4ade80',glow:'rgba(74,222,128,0.12)',themes:{pt:{name:'NEXUS',theme:'Programação & Lógica',desc:'Descubra os fundamentos da programação, algoritmos e lógica computacional de forma divertida.'},en:{name:'NEXUS',theme:'Programming & Logic',desc:'Discover the fundamentals of programming, algorithms and computational logic in a fun way.'},es:{name:'NEXUS',theme:'Programación y Lógica',desc:'Descubre los fundamentos de la programación, algoritmos y lógica computacional de forma divertida.'},fr:{name:'NEXUS',theme:'Programmation et Logique',desc:'Découvrez les fondamentaux de la programmation, des algorithmes et de la logique computationnelle.'}}},
  {id:'robo3',icon:'⚙️',color:'#fb923c',glow:'rgba(251,146,60,0.12)',themes:{pt:{name:'GEAR',theme:'Mecânica & Motores',desc:'Explore engrenagens, motores, servos e os mecanismos que dão movimento aos robôs.'},en:{name:'GEAR',theme:'Mechanics & Motors',desc:'Explore gears, motors, servos and the mechanisms that give robots their movement.'},es:{name:'GEAR',theme:'Mecánica y Motores',desc:'Explora engranajes, motores, servos y los mecanismos que dan movimiento a los robots.'},fr:{name:'GEAR',theme:'Mécanique et Moteurs',desc:'Explorez les engrenages, moteurs, servos et les mécanismes qui donnent vie aux robots.'}}},
  {id:'robo4',icon:'🧠',color:'#a78bfa',glow:'rgba(167,139,250,0.12)',themes:{pt:{name:'ARIA',theme:'Inteligência Artificial',desc:'Entenda o que é IA, como os robôs aprendem e tomam decisões usando machine learning.'},en:{name:'ARIA',theme:'Artificial Intelligence',desc:'Understand what AI is, how robots learn and make decisions using machine learning.'},es:{name:'ARIA',theme:'Inteligencia Artificial',desc:'Entiende qué es la IA, cómo los robots aprenden y toman decisiones usando machine learning.'},fr:{name:'ARIA',theme:'Intelligence Artificielle',desc:'Comprenez ce qu\'est l\'IA, comment les robots apprennent et prennent des décisions.'}}},
  {id:'robo5',icon:'📡',color:'#f472b6',glow:'rgba(244,114,182,0.12)',themes:{pt:{name:'SIGNAL',theme:'Sensores & Comunicação',desc:'Explore sensores ultrassônicos, infravermelho, comunicação sem fio e a internet das coisas.'},en:{name:'SIGNAL',theme:'Sensors & Communication',desc:'Explore ultrasonic and infrared sensors, wireless communication and the internet of things.'},es:{name:'SIGNAL',theme:'Sensores y Comunicación',desc:'Explora sensores ultrasónicos, infrarrojos, comunicación inalámbrica e internet de las cosas.'},fr:{name:'SIGNAL',theme:'Capteurs et Communication',desc:'Explorez les capteurs ultrasoniques, infrarouges, la communication sans fil et l\'IoT.'}}},
  {id:'robo6',icon:'🔧',color:'#facc15',glow:'rgba(250,204,21,0.12)',themes:{pt:{name:'BUILD',theme:'Construção de Robôs',desc:'Aprenda a projetar e construir seus próprios robôs: estrutura, materiais e montagem.'},en:{name:'BUILD',theme:'Robot Building',desc:'Learn to design and build your own robots: structure, materials and assembly.'},es:{name:'BUILD',theme:'Construcción de Robots',desc:'Aprende a diseñar y construir tus propios robots: estructura, materiales y ensamblaje.'},fr:{name:'BUILD',theme:'Construction de Robots',desc:'Apprenez à concevoir et construire vos propres robots: structure, matériaux et assemblage.'}}}
];

const TRANSLATIONS = {
  pt:{home:'Início',hero_badge:'🚀 PLATAFORMA DE ROBÓTICA EDUCACIONAL',hero_sub:'O FUTURO DO APRENDIZADO',hero_desc:'Explore o universo da robótica e eletrônica com 6 robôs educacionais especializados. Aprenda, jogue e ganhe pontos em uma jornada de descobertas tecnológicas!',choose_robot:'▸ ESCOLHA SEU ROBÔ EDUCADOR ◂',enter:'ACESSAR',points:'PONTOS',tab_learn:'Aprender',tab_quiz:'Quiz',tab_challenge:'Desafio',tab_activity:'Atividade',your_journey:'SUA JORNADA',progress_title:'PROGRESSO',by_robot:'POR ROBÔ',trophies:'CONQUISTAS',correct:'Correto! +10 pontos ⚡',wrong:'Errado! -5 pontos 😮',progress_menu:'Progresso',speak_welcome:'Olá! Bem-vindo ao Robotinick! Eu sou sua assistente de aprendizado. Escolha um dos seis robôs para começar sua aventura na robótica!',speak_correct:'Isso aí! Você acertou! Muito bem! Continue assim!',speak_wrong:'Ops, não foi dessa vez. Mas não desanime, tente novamente! Você consegue!'},
  en:{home:'Home',hero_badge:'🚀 EDUCATIONAL ROBOTICS PLATFORM',hero_sub:'THE FUTURE OF LEARNING',hero_desc:'Explore the universe of robotics and electronics with 6 specialized educational robots. Learn, play and earn points on a journey of technological discovery!',choose_robot:'▸ CHOOSE YOUR EDUCATIONAL ROBOT ◂',enter:'ENTER',points:'POINTS',tab_learn:'Learn',tab_quiz:'Quiz',tab_challenge:'Challenge',tab_activity:'Activity',your_journey:'YOUR JOURNEY',progress_title:'PROGRESS',by_robot:'BY ROBOT',trophies:'ACHIEVEMENTS',correct:'Correct! +10 points ⚡',wrong:'Wrong! -5 points 😮',progress_menu:'Progress',speak_welcome:'Hello there! Welcome to Robotinick! I am your learning assistant. Choose one of the six robots to start your robotics adventure!',speak_correct:'Awesome! That is correct! Great job, keep it up!',speak_wrong:'Oh, not quite right this time. But do not give up, try again! You can do it!'},
  es:{home:'Inicio',hero_badge:'🚀 PLATAFORMA EDUCATIVA DE ROBÓTICA',hero_sub:'EL FUTURO DEL APRENDIZAJE',hero_desc:'¡Explora el universo de la robótica y la electrónica con 6 robots educativos especializados. ¡Aprende, juega y gana puntos!',choose_robot:'▸ ELIGE TU ROBOT EDUCADOR ◂',enter:'ENTRAR',points:'PUNTOS',tab_learn:'Aprender',tab_quiz:'Quiz',tab_challenge:'Desafío',tab_activity:'Actividad',your_journey:'TU VIAJE',progress_title:'PROGRESO',by_robot:'POR ROBOT',trophies:'LOGROS',correct:'¡Correcto! +10 puntos ⚡',wrong:'¡Incorrecto! -5 puntos 😮',progress_menu:'Progreso',speak_welcome:'¡Hola! ¡Bienvenido a Robotinick! Soy tu asistente de aprendizaje. Elige uno de los seis robots para comenzar tu aventura en la robótica.',speak_correct:'¡Excelente! ¡Eso es correcto! ¡Muy bien, sigue así!',speak_wrong:'Oh, no fue esta vez. ¡Pero no te rindas, inténtalo de nuevo! ¡Tú puedes!'},
  fr:{home:'Accueil',hero_badge:'🚀 PLATEFORME ÉDUCATIVE DE ROBOTIQUE',hero_sub:'L\'AVENIR DE L\'APPRENTISSAGE',hero_desc:'Explorez l\'univers de la robotique et de l\'électronique avec 6 robots éducatifs spécialisés. Apprenez, jouez et gagnez des points!',choose_robot:'▸ CHOISISSEZ VOTRE ROBOT ÉDUCATEUR ◂',enter:'ENTRER',points:'POINTS',tab_learn:'Apprendre',tab_quiz:'Quiz',tab_challenge:'Défi',tab_activity:'Activité',your_journey:'VOTRE PARCOURS',progress_title:'PROGRÈS',by_robot:'PAR ROBOT',trophies:'SUCCÈS',correct:'Correct! +10 points ⚡',wrong:'Faux! -5 points 😮',progress_menu:'Progrès',speak_welcome:'Bonjour! Bienvenue sur Robotinick! Je suis votre assistante d\'apprentissage. Choisissez l\'un des six robots pour commencer votre aventure en robotique.',speak_correct:'Bravo! C\'est tout à fait correct! Très bien, continuez comme ça!',speak_wrong:'Oh, pas tout à fait cette fois. Mais ne vous découragez pas, réessayez! Vous pouvez le faire!'}
};

const CONTENT = {
  robo1:{
    pt:{
      lessons:[{title:'O que é Eletricidade?',text:'A <strong>eletricidade</strong> é o fluxo de elétrons através de um condutor. Imagine que os elétrons são como carros numa rodovia — eles precisam de uma estrada (condutor) e de um semáforo (resistência) para circular.',highlight:'💡 Curiosidade: Um raio carrega eletricidade suficiente para iluminar uma lâmpada por 3 meses!',img:'⚡'},{title:'Componentes Básicos',text:'Em eletrônica, usamos componentes como: <strong>resistores</strong> (controlam a corrente), <strong>capacitores</strong> (armazenam energia), <strong>LEDs</strong> (emitem luz) e <strong>transistores</strong> (amplificam sinais).',highlight:'🔬 Um circuito básico precisa de: fonte de energia, condutor e componente.',img:'🔌'},{title:'Lei de Ohm',text:'A <strong>Lei de Ohm</strong> diz que V = R × I, onde V é tensão (Volts), R é resistência (Ohms) e I é corrente (Ampères). É a fórmula mais importante da eletrônica básica!',highlight:'📐 Se temos 9V e resistência de 100Ω, a corrente é 0,09A (90mA)',img:'📊'}],
      quiz:[{q:'Qual é a unidade de medida da tensão elétrica?',opts:['Ampère','Volt','Ohm','Watt'],correct:1,exp:'A tensão é medida em Volts (V), em homenagem ao físico Alessandro Volta.'},{q:'O que faz um resistor em um circuito?',opts:['Armazena energia','Emite luz','Controla a corrente elétrica','Amplifica sinais'],correct:2,exp:'Resistores limitam e controlam o fluxo de corrente elétrica no circuito.'},{q:'Qual componente pode emitir luz quando passa corrente?',opts:['Capacitor','Resistor','LED','Transistor'],correct:2,exp:'LED significa Light Emitting Diode (Diodo Emissor de Luz)!'},{q:'Se V=12V e R=4Ω, qual é a corrente (I)?',opts:['3A','48A','0,3A','8A'],correct:0,exp:'Pela Lei de Ohm: I = V/R = 12/4 = 3 Ampères!'}],
      activity:{title:'Monte um Circuito LED!',desc:'Selecione os componentes necessários para acender um LED com uma bateria de 9V:',components:[{icon:'🔋',name:'Bateria 9V',correct:true},{icon:'💡',name:'LED',correct:true},{icon:'🔴',name:'Resistor 470Ω',correct:true},{icon:'📦',name:'Capacitor',correct:false},{icon:'🔌',name:'Fio condutor',correct:true},{icon:'📻',name:'Transistor',correct:false}]},
      challenge:{title:'Engenheiro de Circuitos',steps:['Identifique os 5 componentes básicos de eletrônica','Calcule a corrente usando a Lei de Ohm','Desenhe um circuito simples com LED e resistor','Explique como a energia flui no circuito']}
    },
    en:{
      lessons:[{title:'What is Electricity?',text:'<strong>Electricity</strong> is the flow of electrons through a conductor. Imagine electrons as cars on a highway — they need a road (conductor) and a traffic light (resistance) to circulate.',highlight:'💡 Fun fact: A lightning bolt carries enough electricity to power a light bulb for 3 months!',img:'⚡'},{title:'Basic Components',text:'In electronics, we use components like: <strong>resistors</strong> (control current), <strong>capacitors</strong> (store energy), <strong>LEDs</strong> (emit light) and <strong>transistors</strong> (amplify signals).',highlight:'🔬 A basic circuit needs: power source, conductor and component.',img:'🔌'},{title:"Ohm's Law",text:"<strong>Ohm's Law</strong> states V = R × I, where V is voltage (Volts), R is resistance (Ohms) and I is current (Amperes). It's the most important formula in basic electronics!",highlight:'📐 If we have 9V and resistance of 100Ω, the current is 0.09A (90mA)',img:'📊'}],
      quiz:[{q:'What is the unit of measurement for voltage?',opts:['Ampere','Volt','Ohm','Watt'],correct:1,exp:'Voltage is measured in Volts (V), named after physicist Alessandro Volta.'},{q:'What does a resistor do in a circuit?',opts:['Stores energy','Emits light','Controls electric current','Amplifies signals'],correct:2,exp:'Resistors limit and control the flow of electric current in the circuit.'},{q:'Which component can emit light when current flows?',opts:['Capacitor','Resistor','LED','Transistor'],correct:2,exp:'LED stands for Light Emitting Diode!'},{q:"If V=12V and R=4Ω, what is the current (I)?",opts:['3A','48A','0.3A','8A'],correct:0,exp:"By Ohm's Law: I = V/R = 12/4 = 3 Amperes!"}],
      activity:{title:'Build an LED Circuit!',desc:'Select the components needed to light an LED with a 9V battery:',components:[{icon:'🔋',name:'9V Battery',correct:true},{icon:'💡',name:'LED',correct:true},{icon:'🔴',name:'470Ω Resistor',correct:true},{icon:'📦',name:'Capacitor',correct:false},{icon:'🔌',name:'Conductor wire',correct:true},{icon:'📻',name:'Transistor',correct:false}]},
      challenge:{title:'Circuit Engineer',steps:['Identify the 5 basic electronics components','Calculate current using Ohm\'s Law','Draw a simple circuit with LED and resistor','Explain how energy flows in the circuit']}
    }
  },
  robo2:{
    pt:{
      lessons:[{title:'O que é Programação?',text:'<strong>Programação</strong> é a arte de dar instruções precisas a um computador. Um programa é uma sequência de comandos que o computador executa, como uma receita de bolo: cada passo deve ser seguido na ordem certa!',highlight:'🖥️ A primeira programadora da história foi Ada Lovelace, em 1843!',img:'💻'},{title:'Algoritmos',text:'Um <strong>algoritmo</strong> é uma sequência finita de passos para resolver um problema. Algoritmos têm: <strong>entrada</strong> (dados iniciais), <strong>processamento</strong> (operações) e <strong>saída</strong> (resultado).',highlight:'🔄 Algoritmos estão em todo lugar: apps, jogos, redes sociais!',img:'🔢'},{title:'Portas Lógicas',text:'Portas lógicas são a base dos computadores. As principais são: <strong>AND</strong> (E), <strong>OR</strong> (OU) e <strong>NOT</strong> (NÃO). Elas operam com bits: 0 (falso) e 1 (verdadeiro).',highlight:'🧮 Todos os computadores funcionam com combinações de 0s e 1s!',img:'🔌'}],
      quiz:[{q:'O que é um algoritmo?',opts:['Um tipo de robô','Uma sequência de passos para resolver um problema','Um componente eletrônico','Uma linguagem de programação'],correct:1,exp:'Algoritmo é uma sequência ordenada e finita de instruções para resolver um problema.'},{q:'Qual porta lógica retorna 1 apenas quando AMBAS as entradas são 1?',opts:['OR','NOT','AND','XOR'],correct:2,exp:'A porta AND (E) só retorna 1 quando todas as entradas são 1.'},{q:'Em programação, o que é uma variável?',opts:['Um erro no código','Um espaço na memória para armazenar dados','Um tipo de loop','Uma função matemática'],correct:1,exp:'Variáveis são espaços nomeados na memória para armazenar valores.'},{q:'Qual estrutura repete um bloco de código várias vezes?',opts:['IF/ELSE','Variável','LOOP/FOR','Função'],correct:2,exp:'Loops (FOR, WHILE) repetem blocos de código um número definido de vezes.'}],
      activity:{title:'Simulador de Portas Lógicas',desc:'Selecione uma porta lógica e veja sua tabela verdade:',type:'logic'},
      challenge:{title:'Programador Iniciante',steps:['Crie um algoritmo para atravessar a rua em 5 passos','Identifique uma estrutura IF/ELSE no cotidiano','Monte a tabela verdade de uma porta AND','Escreva em pseudocódigo um programa simples']}
    },
    en:{
      lessons:[{title:'What is Programming?',text:'<strong>Programming</strong> is the art of giving precise instructions to a computer. A program is a sequence of commands the computer executes, like a recipe: each step must be followed in the right order!',highlight:'🖥️ The first programmer in history was Ada Lovelace, in 1843!',img:'💻'},{title:'Algorithms',text:'An <strong>algorithm</strong> is a finite sequence of steps to solve a problem. Algorithms have: <strong>input</strong> (initial data), <strong>processing</strong> (operations) and <strong>output</strong> (result).',highlight:'🔄 Algorithms are everywhere: apps, games, social networks!',img:'🔢'},{title:'Logic Gates',text:'Logic gates are the foundation of computers. The main ones are: <strong>AND</strong>, <strong>OR</strong> and <strong>NOT</strong>. They operate with bits: 0 (false) and 1 (true).',highlight:'🧮 All computers work with combinations of 0s and 1s!',img:'🔌'}],
      quiz:[{q:'What is an algorithm?',opts:['A type of robot','A sequence of steps to solve a problem','An electronic component','A programming language'],correct:1,exp:'An algorithm is an ordered, finite sequence of instructions to solve a problem.'},{q:'Which logic gate returns 1 only when BOTH inputs are 1?',opts:['OR','NOT','AND','XOR'],correct:2,exp:'The AND gate only returns 1 when all inputs are 1.'},{q:'In programming, what is a variable?',opts:['A code error','A memory space to store data','A type of loop','A mathematical function'],correct:1,exp:'Variables are named memory spaces to store values.'},{q:'Which structure repeats a block of code multiple times?',opts:['IF/ELSE','Variable','LOOP/FOR','Function'],correct:2,exp:'Loops (FOR, WHILE) repeat code blocks a defined number of times.'}],
      activity:{title:'Logic Gates Simulator',desc:'Select a logic gate to see its truth table:',type:'logic'},
      challenge:{title:'Beginner Programmer',steps:['Create an algorithm to cross the street in 5 steps','Identify an IF/ELSE structure in everyday life','Build the truth table of an AND gate','Write a simple program in pseudocode']}
    }
  },
  robo3:{
    pt:{
      lessons:[{title:'Engrenagens e Transmissão',text:'<strong>Engrenagens</strong> são rodas dentadas que transmitem força e movimento entre eixos. Quando duas engrenagens se encaixam, uma transmite rotação para a outra — podendo <strong>aumentar força</strong> ou <strong>aumentar velocidade</strong>.',highlight:'⚙️ Engrenagens maiores têm mais força; engrenagens menores têm mais velocidade!',img:'⚙️'},{title:'Motores DC e Servo',text:'<strong>Motores DC</strong> convertem energia elétrica em movimento de rotação contínua. <strong>Servomotores</strong> são motores de precisão que giram para um ângulo específico — ideais para braços robóticos!',highlight:'🤖 Um servo motor pode girar com precisão de 0,1 grau!',img:'🔧'},{title:'Estruturas e Materiais',text:'Na robótica, usamos diferentes materiais: <strong>alumínio</strong> (leve e resistente), <strong>PLA/ABS</strong> (impressão 3D), <strong>aço</strong> (alta resistência). A escolha depende do peso, resistência e custo.',highlight:'🏗️ A maioria dos robôs modernos usa peças impressas em 3D!',img:'🏗️'}],
      quiz:[{q:'O que acontece quando usamos uma engrenagem grande com uma pequena?',opts:['Mesma velocidade e força','Mais velocidade, menos torque','Menos velocidade, mais torque','Nenhuma mudança'],correct:2,exp:'Engrenagens redutoras (grande→pequena) aumentam o torque e reduzem a velocidade.'},{q:'Qual tipo de motor é ideal para controlar ângulos precisos?',opts:['Motor DC simples','Motor de passo','Servomotor','Gerador'],correct:2,exp:'Servomotores são projetados para controle preciso de posição angular.'},{q:'Qual material é mais usado em impressão 3D para robótica?',opts:['Aço inox','Alumínio','PLA/ABS','Borracha'],correct:2,exp:'PLA e ABS são os termoplásticos mais comuns em impressão 3D para prototipagem robótica.'},{q:'O que é torque em mecânica?',opts:['Velocidade de rotação','Força de rotação (momento de força)','Temperatura do motor','Frequência de vibração'],correct:1,exp:'Torque é a força de rotação — quanto mais torque, mais força para girar cargas pesadas.'}],
      activity:{title:'Calculadora de Engrenagens',desc:'Configure as engrenagens e calcule a relação de transmissão:',type:'gears'},
      challenge:{title:'Engenheiro Mecânico',steps:['Identifique 3 tipos de engrenagens diferentes','Calcule a relação de transmissão de um par de engrenagens','Projete um sistema com 2 motores para um robô móvel','Explique por que robôs industriais usam servomotores']}
    },
    en:{
      lessons:[{title:'Gears and Transmission',text:'<strong>Gears</strong> are toothed wheels that transmit force and motion between axes. When two gears mesh, one transmits rotation to the other — either <strong>increasing force</strong> or <strong>increasing speed</strong>.',highlight:'⚙️ Larger gears have more force; smaller gears have more speed!',img:'⚙️'},{title:'DC Motors and Servos',text:'<strong>DC Motors</strong> convert electrical energy into continuous rotational motion. <strong>Servo motors</strong> are precision motors that rotate to a specific angle — ideal for robotic arms!',highlight:'🤖 A servo motor can rotate with precision of 0.1 degrees!',img:'🔧'},{title:'Structures and Materials',text:'In robotics, we use different materials: <strong>aluminum</strong> (light and resistant), <strong>PLA/ABS</strong> (3D printing), <strong>steel</strong> (high strength). Choice depends on weight, resistance and cost.',highlight:'🏗️ Most modern robots use 3D printed parts!',img:'🏗️'}],
      quiz:[{q:'What happens when we use a large gear with a small one?',opts:['Same speed and force','More speed, less torque','Less speed, more torque','No change'],correct:2,exp:'Reduction gears (large→small) increase torque and reduce speed.'},{q:'Which motor type is ideal for controlling precise angles?',opts:['Simple DC motor','Stepper motor','Servo motor','Generator'],correct:2,exp:'Servo motors are designed for precise angular position control.'},{q:'Which material is most used in 3D printing for robotics?',opts:['Stainless steel','Aluminum','PLA/ABS','Rubber'],correct:2,exp:'PLA and ABS are the most common thermoplastics in 3D printing for robotic prototyping.'},{q:'What is torque in mechanics?',opts:['Rotation speed','Rotational force (moment of force)','Motor temperature','Vibration frequency'],correct:1,exp:'Torque is rotational force — more torque means more force to turn heavy loads.'}],
      activity:{title:'Gear Calculator',desc:'Configure the gears and calculate the transmission ratio:',type:'gears'},
      challenge:{title:'Mechanical Engineer',steps:['Identify 3 different types of gears','Calculate the transmission ratio of a gear pair','Design a system with 2 motors for a mobile robot','Explain why industrial robots use servo motors']}
    }
  },
  robo4:{
    pt:{
      lessons:[{title:'O que é Inteligência Artificial?',text:'<strong>IA</strong> é a capacidade de máquinas aprenderem e tomarem decisões. Diferente de programas tradicionais, a IA não segue regras fixas — ela <strong>aprende com dados</strong> e melhora com a experiência.',highlight:'🧠 O ChatGPT, Siri e filtros de fotos usam IA!',img:'🧠'},{title:'Machine Learning',text:'<strong>Machine Learning</strong> é o coração da IA moderna. O computador analisa milhares de exemplos e aprende padrões. É assim que robôs aprendem a reconhecer objetos, rostos e voz!',highlight:'📊 Um modelo de IA pode analisar 1 milhão de imagens em minutos!',img:'📡'},{title:'Robôs Inteligentes',text:'Robôs com IA combinam <strong>visão computacional</strong> (câmeras), <strong>processamento de linguagem</strong> (fala) e <strong>tomada de decisão</strong> para navegar e interagir com o mundo de forma autônoma.',highlight:'🚗 Carros autônomos usam IA para ver, decidir e dirigir!',img:'🤖'}],
      quiz:[{q:'O que diferencia IA de programação tradicional?',opts:['IA é mais rápida','IA aprende com dados sem regras fixas','IA usa menos energia','IA é mais barata'],correct:1,exp:'IA aprende padrões a partir de dados, enquanto programação tradicional segue regras explícitas.'},{q:'O que é Machine Learning?',opts:['Um tipo de memória de computador','Uma forma de robô físico','Técnica de aprendizado automático com dados','Um protocolo de rede'],correct:2,exp:'Machine Learning permite que sistemas aprendam e melhorem automaticamente com experiência.'},{q:'Qual tecnologia de IA permite que robôs "vejam"?',opts:['Bluetooth','Visão Computacional','GPS','WiFi'],correct:1,exp:'Visão Computacional usa câmeras e IA para interpretar imagens e vídeos.'},{q:'Como um robô autônomo toma decisões?',opts:['Seguindo código fixo','Ligando para o operador','Analisando sensores e usando IA','Aleatoriamente'],correct:2,exp:'Robôs autônomos combinam dados de sensores com modelos de IA para tomar decisões.'}],
      activity:{title:'Treine uma IA!',desc:'Classifique as imagens para treinar seu modelo de IA:',type:'ai_train'},
      challenge:{title:'Cientista de Dados',steps:['Liste 5 aplicações de IA no seu dia a dia','Explique a diferença entre IA e robô','Descreva como um robô de entrega usa IA','Identifique dados que um carro autônomo precisa']}
    },
    en:{
      lessons:[{title:'What is Artificial Intelligence?',text:'<strong>AI</strong> is the ability of machines to learn and make decisions. Unlike traditional programs, AI does not follow fixed rules — it <strong>learns from data</strong> and improves with experience.',highlight:'🧠 ChatGPT, Siri and photo filters use AI!',img:'🧠'},{title:'Machine Learning',text:'<strong>Machine Learning</strong> is the heart of modern AI. The computer analyzes thousands of examples and learns patterns. This is how robots learn to recognize objects, faces and voice!',highlight:'📊 An AI model can analyze 1 million images in minutes!',img:'📡'},{title:'Intelligent Robots',text:'AI robots combine <strong>computer vision</strong> (cameras), <strong>language processing</strong> (speech) and <strong>decision making</strong> to navigate and interact with the world autonomously.',highlight:'🚗 Self-driving cars use AI to see, decide and drive!',img:'🤖'}],
      quiz:[{q:'What differentiates AI from traditional programming?',opts:['AI is faster','AI learns from data without fixed rules','AI uses less energy','AI is cheaper'],correct:1,exp:'AI learns patterns from data, while traditional programming follows explicit rules.'},{q:'What is Machine Learning?',opts:['A type of computer memory','A type of physical robot','Automatic learning technique with data','A network protocol'],correct:2,exp:'Machine Learning enables systems to learn and improve automatically from experience.'},{q:'Which AI technology allows robots to "see"?',opts:['Bluetooth','Computer Vision','GPS','WiFi'],correct:1,exp:'Computer Vision uses cameras and AI to interpret images and videos.'},{q:'How does an autonomous robot make decisions?',opts:['Following fixed code','Calling the operator','Analyzing sensors and using AI','Randomly'],correct:2,exp:'Autonomous robots combine sensor data with AI models to make decisions.'}],
      activity:{title:'Train an AI!',desc:'Classify the images to train your AI model:',type:'ai_train'},
      challenge:{title:'Data Scientist',steps:['List 5 AI applications in your daily life','Explain the difference between AI and robot','Describe how a delivery robot uses AI','Identify data that a self-driving car needs']}
    }
  },
  robo5:{
    pt:{
      lessons:[{title:'Sensores: Os Sentidos dos Robôs',text:'Sensores são os "sentidos" dos robôs. O sensor <strong>ultrassônico</strong> mede distância com ondas sonoras, o <strong>infravermelho</strong> detecta calor e objetos, e o <strong>acelerômetro</strong> sente movimento e inclinação.',highlight:'📡 Um sensor ultrassônico pode medir distâncias de 2cm a 4 metros!',img:'📡'},{title:'Comunicação sem Fio',text:'Robôs se comunicam usando <strong>WiFi</strong>, <strong>Bluetooth</strong>, <strong>Zigbee</strong> ou <strong>LoRa</strong>. Cada tecnologia tem vantagens: WiFi é rápido, Bluetooth é de baixo consumo, LoRa alcança quilômetros!',highlight:'📶 Um robô pode ser controlado pela internet de qualquer lugar do mundo!',img:'📶'},{title:'Internet das Coisas (IoT)',text:'IoT conecta objetos físicos à internet. Sensores coletam dados, que são enviados para a nuvem, analisados por IA e geram ações automáticas. É a base de casas e fábricas inteligentes!',highlight:'🌐 Em 2024, mais de 17 bilhões de dispositivos IoT estavam conectados!',img:'🌐'}],
      quiz:[{q:'Qual sensor usa ondas sonoras para medir distância?',opts:['Infravermelho','Temperatura','Ultrassônico','Giroscópio'],correct:2,exp:'O sensor ultrassônico emite pulsos sonoros e mede o tempo de retorno para calcular distâncias.'},{q:'Qual tecnologia sem fio tem maior alcance?',opts:['Bluetooth','NFC','LoRa','Zigbee'],correct:2,exp:'LoRa (Long Range) pode alcançar dezenas de quilômetros com baixo consumo de energia.'},{q:'O que significa IoT?',opts:['International of Telegrams','Internet of Things','Intelligent Object Technology','Input Output Technology'],correct:1,exp:'IoT significa Internet das Coisas (Internet of Things) — objetos conectados à internet.'},{q:'Qual sensor detecta orientação e movimento?',opts:['Sensor de luz','Acelerômetro/Giroscópio','Sensor de temperatura','Sensor ultrassônico'],correct:1,exp:'Acelerômetros e giroscópios medem aceleração, rotação e orientação espacial.'}],
      activity:{title:'Identificar Sensores!',desc:'Associe cada sensor ao seu uso correto:',type:'match'},
      challenge:{title:'Especialista em IoT',steps:['Identifique 3 sensores presentes em um smartphone','Projete um sistema IoT para uma casa inteligente','Explique como WiFi e Bluetooth diferem','Descreva um robô que usa 4 tipos de sensores diferentes']}
    },
    en:{
      lessons:[{title:"Sensors: The Robot's Senses",text:'Sensors are robots\' "senses". The <strong>ultrasonic</strong> sensor measures distance with sound waves, <strong>infrared</strong> detects heat and objects, and <strong>accelerometer</strong> senses movement and tilt.',highlight:'📡 An ultrasonic sensor can measure distances from 2cm to 4 meters!',img:'📡'},{title:'Wireless Communication',text:'Robots communicate using <strong>WiFi</strong>, <strong>Bluetooth</strong>, <strong>Zigbee</strong> or <strong>LoRa</strong>. Each technology has advantages: WiFi is fast, Bluetooth is low power, LoRa reaches kilometers!',highlight:'📶 A robot can be controlled from anywhere in the world via internet!',img:'📶'},{title:'Internet of Things (IoT)',text:'IoT connects physical objects to the internet. Sensors collect data, sent to the cloud, analyzed by AI and generate automatic actions. It\'s the basis of smart homes and factories!',highlight:'🌐 In 2024, over 17 billion IoT devices were connected!',img:'🌐'}],
      quiz:[{q:'Which sensor uses sound waves to measure distance?',opts:['Infrared','Temperature','Ultrasonic','Gyroscope'],correct:2,exp:'The ultrasonic sensor emits sound pulses and measures return time to calculate distances.'},{q:'Which wireless technology has the greatest range?',opts:['Bluetooth','NFC','LoRa','Zigbee'],correct:2,exp:'LoRa (Long Range) can reach tens of kilometers with low energy consumption.'},{q:'What does IoT stand for?',opts:['International of Telegrams','Internet of Things','Intelligent Object Technology','Input Output Technology'],correct:1,exp:'IoT stands for Internet of Things — objects connected to the internet.'},{q:'Which sensor detects orientation and movement?',opts:['Light sensor','Accelerometer/Gyroscope','Temperature sensor','Ultrasonic sensor'],correct:1,exp:'Accelerometers and gyroscopes measure acceleration, rotation and spatial orientation.'}],
      activity:{title:'Match the Sensors!',desc:'Match each sensor to its correct use:',type:'match'},
      challenge:{title:'IoT Specialist',steps:['Identify 3 sensors present in a smartphone','Design an IoT system for a smart home','Explain how WiFi and Bluetooth differ','Describe a robot that uses 4 different sensor types']}
    }
  },
  robo6:{
    pt:{
      lessons:[{title:'Planejamento do Robô',text:'Antes de construir um robô, precisamos <strong>planejar</strong>: qual é a tarefa? Qual será o tamanho? Quais sensores precisa? O planejamento é 50% do sucesso — um bom projeto evita erros caros!',highlight:'📋 Todo grande robô começa como um desenho no papel!',img:'📋'},{title:'Prototipagem e Iteração',text:'A <strong>prototipagem</strong> é construir versões iniciais para testar. Em robótica, usamos o ciclo: <strong>Projetar → Construir → Testar → Melhorar</strong>. Cada ciclo deixa o robô mais eficiente!',highlight:'🔁 O robô Curiosity da NASA passou por centenas de iterações antes de ir a Marte!',img:'🔄'},{title:'Arduino e Microcontroladores',text:'O <strong>Arduino</strong> é o cérebro de muitos robôs educacionais. É uma placa com microcontrolador que lê sensores, processa dados e controla motores. Programa-se com linguagem C simplificada!',highlight:'⚡ Com Arduino + alguns componentes, você pode construir um robô por menos de R$150!',img:'💻'}],
      quiz:[{q:'Qual é o primeiro passo para construir um robô?',opts:['Comprar peças','Soldar componentes','Planejar e projetar','Programar'],correct:2,exp:'Planejar é essencial — definir objetivo, requisitos e design antes de comprar qualquer peça.'},{q:'O que é prototipagem em robótica?',opts:['Pintar o robô','Construir versões iniciais para testar','Calcular o custo','Escolher a cor'],correct:1,exp:'Protótipo é uma versão inicial para testar e validar conceitos antes do produto final.'},{q:'O que é um microcontrolador como o Arduino?',opts:['Um tipo de motor','Um sensor especial','Um computador em chip para controlar dispositivos','Uma bateria recarregável'],correct:2,exp:'Microcontroladores são pequenos computadores integrados em um chip, ideais para robótica.'},{q:'Qual linguagem é usada para programar o Arduino?',opts:['Python','Java','HTML','C/C++'],correct:3,exp:'Arduino usa C/C++ simplificado, com funções específicas para controle de hardware.'}],
      activity:{title:'Monte seu Robô!',desc:'Selecione os módulos necessários para construir um robô seguidor de linha:',type:'build'},
      challenge:{title:'Construtor de Robôs',steps:['Esboce um robô com função específica em papel','Liste todos os componentes necessários e seus custos','Escreva o pseudocódigo de funcionamento','Identifique 3 melhorias para a versão 2.0 do robô']}
    },
    en:{
      lessons:[{title:'Robot Planning',text:'Before building a robot, we need to <strong>plan</strong>: what is the task? What size? What sensors are needed? Planning is 50% of success — good design prevents costly mistakes!',highlight:'📋 Every great robot starts as a drawing on paper!',img:'📋'},{title:'Prototyping and Iteration',text:'<strong>Prototyping</strong> is building initial versions to test. In robotics, we use the cycle: <strong>Design → Build → Test → Improve</strong>. Each cycle makes the robot more efficient!',highlight:'🔁 NASA\'s Curiosity rover went through hundreds of iterations before going to Mars!',img:'🔄'},{title:'Arduino and Microcontrollers',text:'<strong>Arduino</strong> is the brain of many educational robots. It\'s a board with a microcontroller that reads sensors, processes data and controls motors. Programmed with simplified C!',highlight:'⚡ With Arduino + some components, you can build a robot for under $30!',img:'💻'}],
      quiz:[{q:'What is the first step to building a robot?',opts:['Buy parts','Solder components','Plan and design','Program'],correct:2,exp:'Planning is essential — define objective, requirements and design before buying any part.'},{q:'What is prototyping in robotics?',opts:['Painting the robot','Building initial versions to test','Calculating cost','Choosing color'],correct:1,exp:'A prototype is an initial version to test and validate concepts before the final product.'},{q:'What is a microcontroller like Arduino?',opts:['A type of motor','A special sensor','A chip computer to control devices','A rechargeable battery'],correct:2,exp:'Microcontrollers are small computers integrated in a chip, ideal for robotics.'},{q:'Which language is used to program Arduino?',opts:['Python','Java','HTML','C/C++'],correct:3,exp:'Arduino uses simplified C/C++ with specific functions for hardware control.'}],
      activity:{title:'Build Your Robot!',desc:'Select the modules needed to build a line-following robot:',type:'build'},
      challenge:{title:'Robot Builder',steps:['Sketch a robot with a specific function on paper','List all components needed and their costs','Write the operating pseudocode','Identify 3 improvements for robot version 2.0']}
    }
  }
};

// Fallback for missing languages
['robo1','robo2','robo3','robo4','robo5','robo6'].forEach(id=>{
  if(!CONTENT[id].es) CONTENT[id].es=CONTENT[id].pt;
  if(!CONTENT[id].fr) CONTENT[id].fr=CONTENT[id].en;
});

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let state={lang:'pt',score:0,audioEnabled:true,currentRobot:null,progress:{robo1:0,robo2:0,robo3:0,robo4:0,robo5:0,robo6:0},quizDone:{},trophies:new Set()};

function saveState(){try{localStorage.setItem('robotinick_v2',JSON.stringify({score:state.score,progress:state.progress,quizDone:state.quizDone,trophies:[...state.trophies],lang:state.lang}))}catch(e){}}
function loadState(){try{const s=JSON.parse(localStorage.getItem('robotinick_v2')||'{}');if(s.score)state.score=s.score;if(s.progress)state.progress=s.progress;if(s.quizDone)state.quizDone=s.quizDone;if(s.trophies)state.trophies=new Set(s.trophies);if(s.lang)state.lang=s.lang;}catch(e){}}

// ══════════════════════════════════════════
// I18N
// ══════════════════════════════════════════
function t(key){return(TRANSLATIONS[state.lang]||TRANSLATIONS.pt)[key]||key}
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const val=t(el.dataset.i18n);if(val)el.textContent=val;});
  document.getElementById('langSel').value=state.lang;
  document.getElementById('scoreLabel').textContent=t('points');
}
function changeLang(lang){
  state.lang=lang;
  applyLang();
  buildRobotsGrid();
  if(state.currentRobot) showRobot(state.currentRobot.id);
  speak(t('speak_welcome'));
  saveState();
}

// ══════════════════════════════════════════
// AUDIO
// ══════════════════════════════════════════
const LANG_CODES={pt:'pt-BR',en:'en-US',es:'es-ES',fr:'fr-FR'};
const VOICE_PREFS={pt:['Google português do Brasil','Microsoft Francisca','pt-BR'],en:['Google US English','Microsoft Zira','Samantha','en-US'],es:['Google español','Microsoft Helena','es-ES'],fr:['Google français','Microsoft Hortense','fr-FR']};
let voiceCache={},speaking=false;

function loadVoices(){return new Promise(r=>{const v=window.speechSynthesis&&window.speechSynthesis.getVoices();if(v&&v.length>0){r(v);return;}if(window.speechSynthesis)window.speechSynthesis.onvoiceschanged=()=>r(window.speechSynthesis.getVoices());setTimeout(()=>r(window.speechSynthesis?window.speechSynthesis.getVoices():[]),1200);});}

async function getBestVoice(lang){
  if(voiceCache[lang]) return voiceCache[lang];
  const voices=await loadVoices();
  const prefs=VOICE_PREFS[lang]||VOICE_PREFS.en;
  const targetCode=LANG_CODES[lang]||'pt-BR';
  for(const pref of prefs){const m=voices.find(v=>v.name.toLowerCase().includes(pref.toLowerCase()));if(m){voiceCache[lang]=m;return m;}}
  const byLang=voices.filter(v=>v.lang.startsWith(targetCode.split('-')[0]));
  if(byLang.length>0){const c=byLang.find(v=>!v.localService)||byLang[0];voiceCache[lang]=c;return c;}
  return null;
}

async function speak(text){
  if(!state.audioEnabled||!text||!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  await new Promise(r=>setTimeout(r,80));
  const voice=await getBestVoice(state.lang);
  const u=new SpeechSynthesisUtterance(text);
  u.lang=LANG_CODES[state.lang]||'pt-BR';
  if(voice) u.voice=voice;
  const params={pt:{rate:0.88,pitch:1.08},en:{rate:0.90,pitch:1.05},es:{rate:0.87,pitch:1.06},fr:{rate:0.86,pitch:1.04}};
  const p=params[state.lang]||params.pt;
  u.rate=p.rate;u.pitch=p.pitch;u.volume=1;
  u.onstart=()=>{speaking=true;updateAudioBtn()};
  u.onend=()=>{speaking=false;updateAudioBtn()};
  u.onerror=()=>{speaking=false;updateAudioBtn()};
  window.speechSynthesis.speak(u);
}

function toggleAudio(){
  state.audioEnabled=!state.audioEnabled;
  if(!state.audioEnabled&&window.speechSynthesis) window.speechSynthesis.cancel();
  if(state.audioEnabled) voiceCache={};
  updateAudioBtn();
  saveState();
}
function updateAudioBtn(){
  const btn=document.getElementById('audioBtn');
  const label=state.audioEnabled?(speaking?'Reproduzindo voz':'Assistente de voz ativo'):'Assistente de voz desativado';
  btn.setAttribute('aria-label',label);
  if(!state.audioEnabled){btn.textContent='🔇';btn.classList.remove('active')}
  else if(speaking){btn.innerHTML='<span class="speaking-dot" aria-hidden="true"></span>';btn.classList.add('active')}
  else{btn.textContent='🔊';btn.classList.add('active')}
}

// ══════════════════════════════════════════
// SCORE
// ══════════════════════════════════════════
function addScore(v){
  state.score=Math.max(0,state.score+v);
  document.getElementById('scoreVal').textContent=state.score;
  showScoreFlash(v);
  checkTrophies();
  saveState();
}
function showScoreFlash(v){
  const el=document.createElement('div');
  el.className='score-flash';
  el.style.color=v>0?'var(--neon-green)':'#f87171';
  el.textContent=(v>0?'+':'')+v+'⚡';
  el.setAttribute('aria-live','polite');
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),900);
}

// ══════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════
let toastTimer;
function showToast(msg,type='info'){
  const el=document.getElementById('toast');
  el.className='toast '+type;
  el.textContent=msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'),2800);
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  // Update document title for accessibility
  const titles={
    'corp-home':'NexCore Tech — Início',
    'about-page':'NexCore Tech — Sobre',
    'solutions-page':'NexCore Tech — Soluções',
    'team-page':'NexCore Tech — Equipe',
    'contact-page':'NexCore Tech — Contato',
    'home':'Robotinick — Plataforma Educacional',
    'robotPage':'Robotinick — Robô',
    'progressPage':'Robotinick — Progresso'
  };
  document.title=titles[id]||'NexCore Tech';
}

function setActiveNav(navId){
  document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
  const el=document.getElementById(navId);
  if(el) el.classList.add('active');
}

function showCorpHome(){
  showPage('corp-home');
  setActiveNav('nav-corp');
  state.currentRobot=null;
  document.getElementById('homeBtn').style.display='none';
}

function showRobotinick(){
  showPage('home');
  setActiveNav('nav-robo');
  document.getElementById('homeBtn').style.display='flex';
  speak(t('speak_welcome'));
}

// Mobile nav
function toggleMobileNav(){
  const nav=document.getElementById('mobileNav');
  const btn=document.getElementById('hamBtn');
  const isOpen=nav.classList.contains('open');
  nav.classList.toggle('open');
  btn.setAttribute('aria-expanded',!isOpen);
  btn.textContent=isOpen?'☰':'✕';
}
function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamBtn').setAttribute('aria-expanded','false');
  document.getElementById('hamBtn').textContent='☰';
}

// ══════════════════════════════════════════
// ROBOTS GRID
// ══════════════════════════════════════════
function buildRobotsGrid(){
  const grid=document.getElementById('robotsGrid');
  grid.innerHTML='';
  ROBOTS.forEach((r,i)=>{
    const theme=r.themes[state.lang]||r.themes.pt;
    const pct=state.progress[r.id]||0;
    const div=document.createElement('article');
    div.className='robot-card';
    div.setAttribute('role','listitem');
    div.setAttribute('tabindex','0');
    div.setAttribute('aria-label',`${theme.name}: ${theme.theme} — ${Math.round(pct)}% concluído`);
    div.style.setProperty('--card-color',r.color);
    div.style.setProperty('--card-glow',r.glow);
    div.innerHTML=`
      <span class="card-robot-icon" aria-hidden="true">${r.icon}</span>
      <div class="card-number" aria-label="Robô número ${i+1}">ROBÔ 0${i+1}</div>
      <div class="card-title">${theme.name}</div>
      <div class="card-subtitle">${theme.theme}</div>
      <div class="card-desc">${theme.desc}</div>
      <div class="card-progress" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso: ${Math.round(pct)}%">
        <div class="card-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="card-enter" aria-hidden="true">${t('enter')} →</div>
    `;
    div.onclick=()=>showRobot(r.id);
    div.onkeydown=(e)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showRobot(r.id);}};
    grid.appendChild(div);
  });
}

// ══════════════════════════════════════════
// ROBOT PAGE
// ══════════════════════════════════════════
function showRobot(id){
  const robot=ROBOTS.find(r=>r.id===id);
  state.currentRobot=robot;
  const theme=robot.themes[state.lang]||robot.themes.pt;
  const content=CONTENT[id][state.lang]||CONTENT[id].pt;
  document.getElementById('homeBtn').style.display='flex';
  document.documentElement.style.setProperty('--page-color',robot.color);

  const html=`
    <div class="rp-header">
      <div class="rp-icon" aria-hidden="true">${robot.icon}</div>
      <div class="rp-info">
        <div class="rp-chip">ROBÔ EDUCACIONAL</div>
        <h1 class="rp-name">${theme.name}</h1>
        <div class="rp-theme">${theme.theme}</div>
        <p class="rp-desc">${theme.desc}</p>
      </div>
    </div>
    <div class="tabs" role="tablist" aria-label="Conteúdo do robô ${theme.name}">
      <button class="tab-btn active" onclick="switchTab('learn',this)" role="tab" aria-selected="true" aria-controls="tab-learn">${t('tab_learn')}</button>
      <button class="tab-btn" onclick="switchTab('quiz',this)" role="tab" aria-selected="false" aria-controls="tab-quiz">${t('tab_quiz')}</button>
      <button class="tab-btn" onclick="switchTab('challenge',this)" role="tab" aria-selected="false" aria-controls="tab-challenge">${t('tab_challenge')}</button>
      <button class="tab-btn" onclick="switchTab('activity',this)" role="tab" aria-selected="false" aria-controls="tab-activity">${t('tab_activity')}</button>
    </div>
    <div id="tab-learn" class="tab-content active" role="tabpanel" aria-label="${t('tab_learn')}">${buildLearnTab(content.lessons,robot.color)}</div>
    <div id="tab-quiz" class="tab-content" role="tabpanel" aria-label="${t('tab_quiz')}">${buildQuizTab(content.quiz,id)}</div>
    <div id="tab-challenge" class="tab-content" role="tabpanel" aria-label="${t('tab_challenge')}">${buildChallengeTab(content.challenge,robot)}</div>
    <div id="tab-activity" class="tab-content" role="tabpanel" aria-label="${t('tab_activity')}">${buildActivityTab(content.activity,robot,id)}</div>
  `;
  document.getElementById('robotContent').innerHTML=html;
  showPage('robotPage');
  speak(`${t('tab_learn')}: ${theme.name}. ${theme.desc}`);
  updateProgress(id,10);
}

function switchTab(tabId,btn){
  document.querySelectorAll('.tab-btn').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false');});
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  document.getElementById('tab-'+tabId).classList.add('active');
}

function buildLearnTab(lessons,color){
  return lessons.map((l,i)=>`
    <div class="lesson-block">
      <h2 class="lesson-title">📚 ${l.title}</h2>
      <div class="lesson-img" aria-hidden="true">${l.img}</div>
      <div class="lesson-text">${l.text}</div>
      <div class="lesson-highlight" role="note">${l.highlight}</div>
      <button class="action-btn" style="margin-top:12px;font-size:11px;padding:8px 16px" onclick="speakLesson(${i})" aria-label="Ouvir lição: ${l.title}">🔊 ${state.lang==='pt'?'Ouvir':'Listen'}</button>
    </div>
  `).join('');
}

function speakLesson(i){
  const content=CONTENT[state.currentRobot.id][state.lang]||CONTENT[state.currentRobot.id].pt;
  const l=content.lessons[i];
  const clean=l.title+'. '+l.text.replace(/<[^>]+>/g,'')+'. '+l.highlight.replace(/[🔬💡📐⚙️🤖🏗️🧠📡🌐📋🔁⚡📊🖥️🔢🔌🔄📻📶]/g,'');
  speak(clean);
}

function buildQuizTab(questions,robotId){
  return questions.map((q,qi)=>{
    const doneKey=`${robotId}_q${qi}`;
    const isDone=state.quizDone[doneKey];
    return `
      <div class="quiz-block" id="qblock_${qi}">
        <div class="quiz-q">
          <span>QUESTÃO ${qi+1}</span>${q.q}
        </div>
        <div class="quiz-options" role="group" aria-label="Opções de resposta para questão ${qi+1}">
          ${['A','B','C','D'].map((letter,oi)=>`
            <button class="quiz-opt${isDone?' answered':''}" 
              onclick="answerQuiz(${qi},${oi},'${robotId}')"
              id="opt_${qi}_${oi}"
              aria-label="Opção ${letter}: ${q.opts[oi]}">
              <span class="opt-letter" aria-hidden="true">${letter}</span>${q.opts[oi]}
            </button>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="feedback_${qi}" role="alert" aria-live="assertive"></div>
      </div>
    `;
  }).join('');
}

function answerQuiz(qi,selected,robotId){
  const content=CONTENT[robotId][state.lang]||CONTENT[robotId].pt;
  const q=content.quiz[qi];
  const doneKey=`${robotId}_q${qi}`;
  if(state.quizDone[doneKey]) return;
  state.quizDone[doneKey]=true;
  saveState();
  const correct=selected===q.correct;
  const fb=document.getElementById('feedback_'+qi);
  for(let i=0;i<4;i++){
    const opt=document.getElementById(`opt_${qi}_${i}`);
    opt.classList.add('answered');
    opt.setAttribute('aria-disabled','true');
    if(i===q.correct) opt.classList.add('correct');
    else if(i===selected) opt.classList.add('wrong');
  }
  if(correct){
    fb.className='quiz-feedback correct show';
    fb.textContent='✅ '+t('correct')+' — '+q.exp;
    addScore(10);showToast(t('correct'),'success');
    speak(t('speak_correct')+' '+q.exp);
    updateProgress(robotId,15);
  } else {
    fb.className='quiz-feedback wrong show';
    fb.textContent='❌ '+t('wrong')+' — '+q.exp;
    addScore(-5);showToast(t('wrong'),'error');
    speak(t('speak_wrong'));
  }
}

function buildChallengeTab(ch,robot){
  return `
    <div class="challenge-block">
      <div class="challenge-badge">⭐ DESAFIO ESPECIAL</div>
      <h2 class="challenge-title">${ch.title}</h2>
      <p class="challenge-desc">${state.lang==='pt'?'Complete todos os passos deste desafio para ganhar pontos bônus e avançar no seu aprendizado!':'Complete all the steps of this challenge to earn bonus points and advance in your learning!'}</p>
      <div class="challenge-steps" role="list" aria-label="Passos do desafio">
        ${ch.steps.map((s,i)=>`
          <div class="challenge-step" role="listitem">
            <div class="step-num" aria-hidden="true">${i+1}</div>
            <div class="step-text">${s}</div>
          </div>
        `).join('')}
      </div>
      <button class="action-btn" onclick="completeChallenge('${robot.id}')" aria-label="Marcar desafio como concluído">
        ${state.lang==='pt'?'✅ COMPLETEI O DESAFIO!':'✅ CHALLENGE COMPLETE!'}
      </button>
    </div>
    <div class="challenge-block" style="border-color:rgba(167,139,250,0.2)">
      <div class="challenge-badge" style="color:var(--neon-purple);border-color:rgba(167,139,250,0.3);background:rgba(167,139,250,0.1)">🧩 MINI-QUIZ RELÂMPAGO</div>
      <h3 class="challenge-title">${state.lang==='pt'?'Conecte os termos!':'Match the terms!'}</h3>
      ${buildMatchGame(robot.id)}
    </div>
  `;
}

const MATCH_DATA={
  robo1:{pt:{a:['Volt','Ampère','Ohm','LED'],b:['Emite luz','Mede tensão','Mede corrente','Mede resistência'],pairs:[0,1,2,3]},en:{a:['Volt','Ampere','Ohm','LED'],b:['Emits light','Measures voltage','Measures current','Measures resistance'],pairs:[0,1,2,3]}},
  robo2:{pt:{a:['AND','OR','NOT','IF'],b:['Inverte bit','Condição','Ambos 1','Algum 1'],pairs:[2,3,0,1]},en:{a:['AND','OR','NOT','IF'],b:['Inverts bit','Condition','Both 1','Any 1'],pairs:[2,3,0,1]}},
  robo3:{pt:{a:['Motor DC','Servo','Engrenagem','PLA'],b:['Controla ângulo','Rotação contínua','Impressão 3D','Transmite força'],pairs:[1,0,3,2]},en:{a:['DC Motor','Servo','Gear','PLA'],b:['Controls angle','Continuous rotation','3D printing','Transmits force'],pairs:[1,0,3,2]}},
  robo4:{pt:{a:['IA','ML','CV','NLP'],b:['Processa texto','Aprende com dados','Máquinas inteligentes','Processa imagens'],pairs:[2,0,3,1]},en:{a:['AI','ML','CV','NLP'],b:['Processes text','Learns from data','Intelligent machines','Processes images'],pairs:[2,0,3,1]}},
  robo5:{pt:{a:['Ultrassônico','Bluetooth','WiFi','LoRa'],b:['Grande alcance','Curto alcance','Rede local','Mede distância'],pairs:[3,1,2,0]},en:{a:['Ultrasonic','Bluetooth','WiFi','LoRa'],b:['Long range','Short range','Local network','Measures distance'],pairs:[3,1,2,0]}},
  robo6:{pt:{a:['Arduino','Protótipo','Iteração','Sensor'],b:['Detecta ambiente','Versão inicial','Melhoria contínua','Microcontrolador'],pairs:[3,0,2,1]},en:{a:['Arduino','Prototype','Iteration','Sensor'],b:['Detects environment','Initial version','Continuous improvement','Microcontroller'],pairs:[3,0,2,1]}}
};

let matchState={selected:null,leftIdx:null,matched:new Set()};
function buildMatchGame(robotId){
  const md=MATCH_DATA[robotId];const d=md[state.lang]||md.pt;
  matchState={selected:null,leftIdx:null,matched:new Set()};
  const left=d.a.map((t,i)=>`<button class="match-item" id="ml_${i}" onclick="matchClick('L',${i},'${robotId}')" aria-label="Termo: ${t}">${t}</button>`).join('');
  const right=d.b.map((t,i)=>`<button class="match-item" id="mr_${i}" onclick="matchClick('R',${i},'${robotId}')" aria-label="Definição: ${t}">${t}</button>`).join('');
  return `<div class="match-wrap"><div><h4>${state.lang==='pt'?'Termos':'Terms'}</h4>${left}</div><div><h4>${state.lang==='pt'?'Definições':'Definitions'}</h4>${right}</div></div>`;
}

function matchClick(side,idx,robotId){
  const md=MATCH_DATA[robotId];const d=md[state.lang]||md.pt;
  if(side==='L'){
    document.querySelectorAll('.match-item').forEach(el=>{if(!el.classList.contains('matched'))el.classList.remove('selected')});
    document.getElementById(`ml_${idx}`).classList.add('selected');
    matchState.leftIdx=idx;
  } else if(side==='R'&&matchState.leftIdx!==null){
    const correctRight=d.pairs[matchState.leftIdx];
    if(idx===correctRight){
      document.getElementById(`ml_${matchState.leftIdx}`).classList.remove('selected');
      document.getElementById(`ml_${matchState.leftIdx}`).classList.add('matched');
      document.getElementById(`mr_${idx}`).classList.add('matched');
      matchState.matched.add(`L${matchState.leftIdx}`);
      matchState.leftIdx=null;
      addScore(5);showToast('✅ Par correto! +5','success');
      if(matchState.matched.size===4){showToast('🏆 Todos os pares encontrados! +20','success');addScore(20);}
    } else {
      showToast('❌ Par errado! Tente novamente.','error');addScore(-3);
      document.querySelectorAll('.match-item').forEach(el=>{if(!el.classList.contains('matched'))el.classList.remove('selected')});
      matchState.leftIdx=null;
    }
  }
}

function completeChallenge(robotId){
  addScore(30);updateProgress(robotId,30);
  showToast('🏆 Desafio concluído! +30 pontos','success');
  speak(state.lang==='pt'?'Parabéns! Você completou o desafio!':'Congratulations! You completed the challenge!');
  checkTrophies();
}

function buildActivityTab(act,robot,id){
  if(!act) return '<div class="lesson-block"><div class="lesson-title">Em breve!</div></div>';
  if(act.type==='logic') return buildLogicSimulator(id);
  if(act.type==='match') return buildSensorMatch(id);
  if(act.type==='gears') return buildGearCalc(id);
  if(act.type==='ai_train') return buildAITrainer(id);
  if(act.type==='build') return buildRobotBuilder(id);
  return buildComponentPicker(act,robot,id);
}

function buildComponentPicker(act,robot,id){
  return `<div class="circuit-demo">
    <h2 class="lesson-title" style="text-align:left;margin-bottom:12px">🔬 ${act.title}</h2>
    <p class="lesson-text" style="text-align:left;margin-bottom:16px">${act.desc}</p>
    <div class="component-grid" id="compGrid_${id}" role="group" aria-label="Componentes eletrônicos">
      ${act.components.map((c,i)=>`
        <div class="comp-item" onclick="selectComp(this,${c.correct},'${id}')" role="checkbox" aria-checked="false" tabindex="0" aria-label="${c.name}" onkeydown="if(event.key==='Enter'||event.key===' '){this.click()}">
          <span class="comp-icon" aria-hidden="true">${c.icon}</span>
          <div class="comp-name">${c.name}</div>
        </div>
      `).join('')}
    </div>
    <button class="action-btn" style="margin-top:16px" onclick="checkComponents('${id}',${JSON.stringify(act.components).replace(/"/g,'&quot;')})" aria-label="Verificar seleção de componentes">
      ${state.lang==='pt'?'✅ VERIFICAR SELEÇÃO':'✅ CHECK SELECTION'}
    </button>
  </div>`;
}

let selectedComps={};
function selectComp(el,correct,id){
  el.classList.toggle('selected');
  el.setAttribute('aria-checked',el.classList.contains('selected'));
  if(!selectedComps[id]) selectedComps[id]=[];
  const name=el.querySelector('.comp-name').textContent;
  if(el.classList.contains('selected')){selectedComps[id].push({name,correct})}
  else{selectedComps[id]=selectedComps[id].filter(c=>c.name!==name)}
}
function checkComponents(id,comps){
  const sel=selectedComps[id]||[];
  const correctOnes=comps.filter(c=>c.correct);
  const wrongSel=sel.filter(c=>!c.correct);
  const correctSel=sel.filter(c=>c.correct);
  if(wrongSel.length>0){showToast('❌ Alguns componentes desnecessários selecionados!','error');addScore(-5)}
  else if(correctSel.length===correctOnes.length){showToast('🎉 Perfeito! Todos os componentes certos!','success');addScore(20);speak(state.lang==='pt'?'Perfeito! Você selecionou todos os componentes corretos!':'Perfect! You selected all the correct components!')}
  else{showToast(`📌 ${correctSel.length}/${correctOnes.length} corretos, continue tentando!`,'info')}
}

function buildLogicSimulator(id){
  return `<div class="circuit-demo">
    <h2 class="lesson-title" style="text-align:left;margin-bottom:12px">🔌 Simulador de Portas Lógicas</h2>
    <p class="lesson-text" style="text-align:left;margin-bottom:16px">${state.lang==='pt'?'Selecione uma porta lógica para ver sua tabela verdade:':'Select a logic gate to see its truth table:'}</p>
    <div class="logic-gates" role="group" aria-label="Portas lógicas disponíveis">
      ${['AND','OR','NOT','NAND','NOR','XOR'].map(g=>`<button class="gate-btn" onclick="showGate('${g}',this)" aria-label="Porta lógica ${g}">${g}</button>`).join('')}
    </div>
    <div id="gateResult" aria-live="polite"></div>
  </div>`;
}

const GATES={AND:{fn:(a,b)=>a&b,inputs:2},OR:{fn:(a,b)=>a|b,inputs:2},NOT:{fn:(a)=>a?0:1,inputs:1},NAND:{fn:(a,b)=>1-(a&b),inputs:2},NOR:{fn:(a,b)=>1-(a|b),inputs:2},XOR:{fn:(a,b)=>a^b,inputs:2}};

function showGate(name,btn){
  document.querySelectorAll('.gate-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const g=GATES[name];
  const rows=g.inputs===1?[[0],[1]]:[[0,0],[0,1],[1,0],[1,1]];
  const headers=g.inputs===1?'<th scope="col">A</th><th scope="col">Saída</th>':'<th scope="col">A</th><th scope="col">B</th><th scope="col">Saída</th>';
  const trows=rows.map(r=>{const out=g.inputs===1?g.fn(r[0]):g.fn(r[0],r[1]);const cells=g.inputs===1?`<td class="bit-${r[0]}">${r[0]}</td>`:`<td class="bit-${r[0]}">${r[0]}</td><td class="bit-${r[1]}">${r[1]}</td>`;return `<tr>${cells}<td class="bit-${out}" style="font-weight:700">${out}</td></tr>`;}).join('');
  document.getElementById('gateResult').innerHTML=`<table class="truth-table" aria-label="Tabela verdade da porta ${name}"><thead><tr>${headers}</tr></thead><tbody>${trows}</tbody></table><button class="action-btn" style="margin-top:12px" onclick="addScore(8);showToast('⚡ +8 pontos por explorar portas lógicas!','success')" aria-label="Ganhar 8 pontos por explorar esta porta lógica">${state.lang==='pt'?'🎯 GANHAR PONTOS':'🎯 EARN POINTS'}</button>`;
}

function buildSensorMatch(id){
  const data={pt:{sensors:[{icon:'🔊',name:'Ultrassônico',use:'Medir distância'},{icon:'🌡️',name:'Temperatura',use:'Detectar calor'},{icon:'💡',name:'LDR (Luz)',use:'Detectar claridade'},{icon:'🧲',name:'Hall (Magnético)',use:'Detectar campos magnéticos'},{icon:'🌊',name:'Umidade',use:'Medir umidade do ar'},{icon:'📐',name:'Giroscópio',use:'Detectar rotação'}]},en:{sensors:[{icon:'🔊',name:'Ultrasonic',use:'Measure distance'},{icon:'🌡️',name:'Temperature',use:'Detect heat'},{icon:'💡',name:'LDR (Light)',use:'Detect brightness'},{icon:'🧲',name:'Hall (Magnetic)',use:'Detect magnetic fields'},{icon:'🌊',name:'Humidity',use:'Measure air humidity'},{icon:'📐',name:'Gyroscope',use:'Detect rotation'}]}};
  const d=data[state.lang]||data.pt;
  return `<div class="circuit-demo"><h2 class="lesson-title" style="text-align:left;margin-bottom:12px">📡 ${state.lang==='pt'?'Explorador de Sensores':'Sensor Explorer'}</h2><div class="component-grid" role="list" aria-label="Sensores eletrônicos">${d.sensors.map((s,i)=>`<div class="comp-item" role="listitem" onclick="this.querySelector('.comp-name').textContent=this.querySelector('.comp-name').textContent==='${s.name}'?'${s.use}':'${s.name}';addScore(2);" tabindex="0" aria-label="Sensor ${s.name}: clique para ver a função" onkeydown="if(event.key==='Enter'){this.click()}"><span class="comp-icon" aria-hidden="true">${s.icon}</span><div class="comp-name">${s.name}</div></div>`).join('')}</div><p style="font-size:12px;color:var(--text3);text-align:center;margin-top:12px">${state.lang==='pt'?'Clique em cada sensor para ver sua função!':'Click each sensor to see its function!'}</p></div>`;
}

function buildGearCalc(id){
  return `<div class="circuit-demo">
    <h2 class="lesson-title" style="text-align:left;margin-bottom:12px">⚙️ ${state.lang==='pt'?'Calculadora de Engrenagens':'Gear Calculator'}</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
      <div>
        <label for="gearA" style="font-size:12px;color:var(--text3);display:block;margin-bottom:6px">${state.lang==='pt'?'Dentes Engrenagem A':'Gear A Teeth'}</label>
        <input type="range" min="6" max="60" value="20" id="gearA" oninput="calcGear()" style="width:100%" aria-label="Número de dentes da engrenagem A" aria-valuemin="6" aria-valuemax="60" aria-valuenow="20">
        <span style="font-size:14px;font-family:'Orbitron',sans-serif;color:var(--neon-orange)" id="gearAVal" aria-live="polite">20</span>
      </div>
      <div>
        <label for="gearB" style="font-size:12px;color:var(--text3);display:block;margin-bottom:6px">${state.lang==='pt'?'Dentes Engrenagem B':'Gear B Teeth'}</label>
        <input type="range" min="6" max="60" value="40" id="gearB" oninput="calcGear()" style="width:100%" aria-label="Número de dentes da engrenagem B" aria-valuemin="6" aria-valuemax="60" aria-valuenow="40">
        <span style="font-size:14px;font-family:'Orbitron',sans-serif;color:var(--neon-orange)" id="gearBVal" aria-live="polite">40</span>
      </div>
    </div>
    <div style="background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.3);border-radius:10px;padding:16px;text-align:center" id="gearResult" aria-live="polite">
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px">${state.lang==='pt'?'Relação de Transmissão':'Transmission Ratio'}</div>
      <div style="font-family:'Orbitron',sans-serif;font-size:28px;font-weight:900;color:var(--neon-orange)">1:2</div>
      <div style="font-size:12px;color:var(--text2);margin-top:6px">${state.lang==='pt'?'B gira 2x mais devagar com 2x mais torque':'B rotates 2x slower with 2x more torque'}</div>
    </div>
    <button class="action-btn" style="margin-top:16px" onclick="addScore(10);showToast('⚙️ +10 pontos por calcular engrenagens!','success')" aria-label="Ganhar 10 pontos por calcular engrenagens">
      ${state.lang==='pt'?'🎯 GANHAR PONTOS':'🎯 EARN POINTS'}
    </button>
  </div>`;
}

function calcGear(){
  const a=parseInt(document.getElementById('gearA').value);
  const b=parseInt(document.getElementById('gearB').value);
  document.getElementById('gearAVal').textContent=a;
  document.getElementById('gearBVal').textContent=b;
  document.getElementById('gearA').setAttribute('aria-valuenow',a);
  document.getElementById('gearB').setAttribute('aria-valuenow',b);
  const ratio=(b/a).toFixed(2);
  const lang=state.lang;
  document.getElementById('gearResult').innerHTML=`<div style="font-size:12px;color:var(--text3);margin-bottom:6px">${lang==='pt'?'Relação de Transmissão':'Transmission Ratio'}</div><div style="font-family:'Orbitron',sans-serif;font-size:28px;font-weight:900;color:var(--neon-orange)">1:${ratio}</div><div style="font-size:12px;color:var(--text2);margin-top:6px">${lang==='pt'?`B gira ${ratio}x mais devagar com ${ratio}x mais torque`:`B rotates ${ratio}x slower with ${ratio}x more torque`}</div>`;
}

function buildAITrainer(id){
  const items=[{icon:'🐱',label:state.lang==='pt'?'Gato':'Cat',cat:'animal'},{icon:'🚗',label:state.lang==='pt'?'Carro':'Car',cat:'vehicle'},{icon:'🌳',label:state.lang==='pt'?'Árvore':'Tree',cat:'nature'},{icon:'🐶',label:state.lang==='pt'?'Cachorro':'Dog',cat:'animal'},{icon:'✈️',label:state.lang==='pt'?'Avião':'Airplane',cat:'vehicle'},{icon:'🌸',label:state.lang==='pt'?'Flor':'Flower',cat:'nature'},{icon:'🦁',label:state.lang==='pt'?'Leão':'Lion',cat:'animal'},{icon:'🚢',label:state.lang==='pt'?'Navio':'Ship',cat:'vehicle'}];
  return `<div class="circuit-demo"><h2 class="lesson-title" style="text-align:left;margin-bottom:12px">🧠 ${state.lang==='pt'?'Treine sua IA':'Train your AI'}</h2><p style="font-size:13px;color:var(--text2);text-align:left;margin-bottom:16px">${state.lang==='pt'?'Classifique cada item para treinar o modelo. Clique para classificar:':'Classify each item to train the model. Click to classify:'}</p><div class="component-grid" id="aiGrid" role="list" aria-label="Itens para classificar">${items.map((it,i)=>`<div class="comp-item" id="ai_${i}" role="listitem" onclick="classifyAI(${i},'${it.cat}',this)" tabindex="0" aria-label="Classificar ${it.label}" onkeydown="if(event.key==='Enter'){this.click()}"><span class="comp-icon" aria-hidden="true">${it.icon}</span><div class="comp-name">${it.label}</div></div>`).join('')}</div><div id="aiScore" style="text-align:center;margin-top:16px;font-family:'Orbitron',sans-serif;font-size:14px;color:var(--neon-purple)" aria-live="polite">${state.lang==='pt'?'Classifique todos os itens!':'Classify all items!'}</div></div>`;
}

let aiClassified=0;
function classifyAI(idx,correct,el){
  if(el.classList.contains('selected')) return;
  el.classList.add('selected');
  el.setAttribute('aria-pressed','true');
  aiClassified++;
  addScore(8);
  if(aiClassified>=8){document.getElementById('aiScore').textContent=state.lang==='pt'?'🎉 Modelo treinado com sucesso! +64 pontos':'🎉 Model trained successfully! +64 points';addScore(20);showToast('🧠 IA Treinada!','success');aiClassified=0;}
}

function buildRobotBuilder(id){
  const modules=[{icon:'🔋',name:state.lang==='pt'?'Bateria':'Battery',needed:true},{icon:'🧠',name:state.lang==='pt'?'Microcontrolador':'Microcontroller',needed:true},{icon:'⚙️',name:state.lang==='pt'?'Motores':'Motors',needed:true},{icon:'📡',name:state.lang==='pt'?'Sensor IR':'IR Sensor',needed:true},{icon:'🔌',name:state.lang==='pt'?'Ponte H':'H-Bridge',needed:true},{icon:'📶',name:state.lang==='pt'?'Bluetooth':'Bluetooth',needed:false},{icon:'🎵',name:state.lang==='pt'?'Buzzer':'Buzzer',needed:false},{icon:'💡',name:'LED',needed:false}];
  return `<div class="circuit-demo"><h2 class="lesson-title" style="text-align:left;margin-bottom:12px">🔧 ${state.lang==='pt'?'Monte seu Robô Seguidor de Linha!':'Build your Line-Following Robot!'}</h2><p style="font-size:13px;color:var(--text2);text-align:left;margin-bottom:16px">${state.lang==='pt'?'Selecione os módulos ESSENCIAIS para o robô funcionar:':'Select the ESSENTIAL modules for the robot to work:'}</p><div class="component-grid" id="buildGrid" role="group" aria-label="Módulos do robô">${modules.map((m,i)=>`<div class="comp-item" id="bm_${i}" role="checkbox" aria-checked="false" tabindex="0" aria-label="Módulo: ${m.name}" onclick="this.classList.toggle('selected');this.setAttribute('aria-checked',this.classList.contains('selected'))" onkeydown="if(event.key==='Enter'||event.key===' '){this.click()}"><span class="comp-icon" aria-hidden="true">${m.icon}</span><div class="comp-name" style="font-size:10px">${m.name}</div></div>`).join('')}</div><button class="action-btn" style="margin-top:16px" onclick="checkBuild(${JSON.stringify(modules).replace(/"/g,'&quot;')})" aria-label="${state.lang==='pt'?'Ligar o robô e verificar montagem':'Power on robot and check assembly'}">${state.lang==='pt'?'🤖 LIGAR ROBÔ':'🤖 POWER ON'}</button><div id="buildResult" style="margin-top:12px" aria-live="polite"></div></div>`;
}

function checkBuild(modules){
  const selected=[];
  modules.forEach((m,i)=>{if(document.getElementById(`bm_${i}`).classList.contains('selected')) selected.push(m);});
  const essentials=modules.filter(m=>m.needed);
  const wrongSel=selected.filter(m=>!m.needed);
  const correctSel=selected.filter(m=>m.needed);
  const res=document.getElementById('buildResult');
  if(correctSel.length===essentials.length&&wrongSel.length===0){res.innerHTML=`<div style="color:var(--neon-green);font-size:13px;padding:12px;background:rgba(74,222,128,0.1);border-radius:8px" role="alert">🤖 ${state.lang==='pt'?'Robô montado com sucesso! Ele está seguindo a linha!':'Robot successfully assembled! It\'s following the line!'}</div>`;addScore(25);showToast('🤖 Robô montado! +25','success');}
  else if(correctSel.length<essentials.length){const missing=essentials.filter(m=>!correctSel.includes(m)).map(m=>m.name).join(', ');res.innerHTML=`<div style="color:#fb923c;font-size:13px;padding:12px;background:rgba(251,146,60,0.1);border-radius:8px" role="alert">⚠️ ${state.lang==='pt'?`Faltam módulos: ${missing}`:`Missing modules: ${missing}`}</div>`;}
  else{res.innerHTML=`<div style="color:#f87171;font-size:13px;padding:12px;background:rgba(248,113,113,0.1);border-radius:8px" role="alert">❌ ${state.lang==='pt'?'Módulos desnecessários incluídos! Remova e tente novamente.':'Unnecessary modules included! Remove and try again.'}</div>`;addScore(-5);}
}

// ══════════════════════════════════════════
// PROGRESS
// ══════════════════════════════════════════
function updateProgress(id,amount){
  state.progress[id]=Math.min(100,(state.progress[id]||0)+amount);
  saveState();checkTrophies();
}

function showProgress(){
  showPage('progressPage');
  document.getElementById('homeBtn').style.display='flex';
  const total=Object.values(state.progress).reduce((a,b)=>a+b,0)/6;
  const quizCount=Object.keys(state.quizDone).filter(k=>state.quizDone[k]).length;
  document.getElementById('progressStats').innerHTML=`
    <div class="stat-card" role="listitem"><div class="stat-num" style="color:var(--neon-yellow)" aria-label="${state.score} pontos">${state.score}</div><div class="stat-label">${t('points')}</div></div>
    <div class="stat-card" role="listitem"><div class="stat-num" style="color:var(--neon-green)" aria-label="${Math.round(total)} porcento de progresso geral">${Math.round(total)}%</div><div class="stat-label">${state.lang==='pt'?'Progresso Geral':'Overall Progress'}</div></div>
    <div class="stat-card" role="listitem"><div class="stat-num" style="color:var(--neon-blue)" aria-label="${quizCount} quizzes respondidos">${quizCount}</div><div class="stat-label">${state.lang==='pt'?'Quiz Respondidos':'Quizzes Done'}</div></div>
    <div class="stat-card" role="listitem"><div class="stat-num" style="color:var(--neon-purple)" aria-label="${state.trophies.size} conquistas">${state.trophies.size}</div><div class="stat-label">${state.lang==='pt'?'Conquistas':'Achievements'}</div></div>
  `;
  document.getElementById('progressList').innerHTML=ROBOTS.map(r=>{
    const theme=r.themes[state.lang]||r.themes.pt;
    const pct=state.progress[r.id]||0;
    return `<div class="robot-prog-item" style="--rpi-color:${r.color}" onclick="showRobot('${r.id}')" role="listitem" tabindex="0" aria-label="${theme.name}: ${Math.round(pct)}% concluído" onkeydown="if(event.key==='Enter'){this.click()}">
      <div class="rpi-icon" aria-hidden="true">${r.icon}</div>
      <div><div class="rpi-name">${theme.name}</div><div class="rpi-theme">${theme.theme}</div></div>
      <div class="rpi-bar"><div class="rpi-bar-bg" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100" aria-label="${theme.name}: ${Math.round(pct)}%"><div class="rpi-bar-fill" style="width:${pct}%"></div></div></div>
      <div class="rpi-pct" aria-hidden="true">${Math.round(pct)}%</div>
    </div>`;
  }).join('');
  buildTrophies();
  speak(state.lang==='pt'?`Você tem ${state.score} pontos e ${state.trophies.size} conquistas!`:`You have ${state.score} points and ${state.trophies.size} achievements!`);
}

const TROPHY_DEF=[
  {id:'first_step',icon:'🌟',name:{pt:'Primeiro Passo',en:'First Step'},desc:{pt:'Visitou o primeiro robô',en:'Visited the first robot'},cond:()=>Object.values(state.progress).some(v=>v>0)},
  {id:'quiz_master',icon:'🎯',name:{pt:'Mestre do Quiz',en:'Quiz Master'},desc:{pt:'Acertou 10 questões',en:'Got 10 questions right'},cond:()=>Object.keys(state.quizDone).filter(k=>state.quizDone[k]).length>=10},
  {id:'centurion',icon:'💯',name:{pt:'Centurião',en:'Centurion'},desc:{pt:'100 pontos acumulados',en:'100 points accumulated'},cond:()=>state.score>=100},
  {id:'explorer',icon:'🚀',name:{pt:'Explorador',en:'Explorer'},desc:{pt:'Visitou todos os 6 robôs',en:'Visited all 6 robots'},cond:()=>Object.values(state.progress).filter(v=>v>0).length===6},
  {id:'champion',icon:'🏆',name:{pt:'Campeão',en:'Champion'},desc:{pt:'500 pontos acumulados',en:'500 points accumulated'},cond:()=>state.score>=500},
  {id:'all_complete',icon:'🌈',name:{pt:'Mestre Robótico',en:'Robotics Master'},desc:{pt:'50%+ em todos os robôs',en:'50%+ in all robots'},cond:()=>Object.values(state.progress).every(v=>v>=50)},
];

function checkTrophies(){
  TROPHY_DEF.forEach(tr=>{
    if(!state.trophies.has(tr.id)&&tr.cond()){
      state.trophies.add(tr.id);saveState();
      const n=tr.name[state.lang]||tr.name.pt;
      showToast(`${tr.icon} Conquista: ${n}!`,'success');
      speak(state.lang==='pt'?`Conquista desbloqueada: ${n}!`:`Achievement unlocked: ${n}!`);
      addScore(15);
    }
  });
}

function buildTrophies(){
  document.getElementById('trophiesGrid').innerHTML=TROPHY_DEF.map(tr=>{
    const earned=state.trophies.has(tr.id);
    const n=tr.name[state.lang]||tr.name.pt;
    const d=tr.desc[state.lang]||tr.desc.pt;
    return `<div class="trophy ${earned?'earned':''}" role="listitem" aria-label="${n}: ${d}${earned?' — Conquista desbloqueada':' — Não desbloqueada ainda'}">
      <span class="trophy-icon" aria-hidden="true">${tr.icon}</span>
      <div class="trophy-name">${n}</div>
      <div class="trophy-desc">${d}</div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
// CONTACT FORM
// ══════════════════════════════════════════
function submitForm(){
  const name=document.getElementById('contact-name').value.trim();
  const email=document.getElementById('contact-email').value.trim();
  const msg=document.getElementById('contact-msg').value.trim();
  if(!name||!email||!msg){showToast('⚠️ Preencha todos os campos obrigatórios.','error');return;}
  showToast('📨 Mensagem enviada! Entraremos em contato em breve.','success');
  speak('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  document.getElementById('contact-name').value='';
  document.getElementById('contact-email').value='';
  document.getElementById('contact-msg').value='';
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
loadState();
document.getElementById('scoreVal').textContent=state.score;

// Add progress button
document.addEventListener('DOMContentLoaded',()=>{
  const tc=document.querySelector('.top-controls');
  const pb=document.createElement('button');
  pb.className='home-btn visible';
  pb.id='progressBtn';
  pb.innerHTML='📊';
  pb.title='Progresso Robotinick';
  pb.setAttribute('aria-label','Ver progresso no Robotinick');
  pb.style.cssText='display:flex;align-items:center';
  pb.onclick=()=>{showRobotinick();setTimeout(showProgress,100);};
  tc.insertBefore(pb,tc.firstChild);
});

// Splash
setTimeout(()=>{
  document.getElementById('splash').classList.add('hide');
  setTimeout(()=>{const s=document.getElementById('splash');if(s)s.remove();},800);
  buildRobotsGrid();
  applyLang();
  updateAudioBtn();
  checkTrophies();
  // Falar boas-vindas corporativas
  setTimeout(()=>speak('Bem-vindo à NexCore Tech! Empresa de Inteligência Artificial, Robótica e Automação. Explore nossas soluções ou acesse o Robotinick.'),500);
},2200);

// Fechar mobile nav ao clicar fora
document.addEventListener('click',e=>{
  const nav=document.getElementById('mobileNav');
  const btn=document.getElementById('hamBtn');
  if(nav.classList.contains('open')&&!nav.contains(e.target)&&!btn.contains(e.target)){closeMobileNav();}
});