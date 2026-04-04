const stats = document.querySelector('#statsGrid');
const description = document.querySelector('#desc');
const btnTV1 = document.querySelector('#btnTV1');
const btnTV2 = document.querySelector('#btnTV2');
const btnTV3 = document.querySelector('#btnTV3');
const eIcon = document.querySelector('#eIcon');
const infoBtn = document.querySelector('#infoBtn');

const enemiesData = [
    {
        desc: "EULR (Einfache Universelle Leichte Replika), (Simple Universal Light Replika 'Owl') or Eule, are Generation 4 Low-Cost General Purpose Replikas. These units are the standard multi-purpose unit of the Eusan Nation deployed in domestic tasks such as serving as Cooks, Nurses, Cleaning, as well as Simple Medical and Office...",
        icon: "../assets/img/ReplikaWireframe_EULR.png",
        wiki: "https://signalis.fandom.com/wiki/Eule",
        stats: ["01 REG EU R04", "02 DAT R2 1823", "03 SYS FO NULL", "04 SEN A8 TER", "05 SPE N2 EQ"],
        kData: [
            { bar: "■■■■■□□□", label: "社交模块" }, // Alta inteligencia social
            { bar: "■□□□□□□□", label: "低装甲" },   // Armadura mínima
            { bar: "■■■■□□□□", label: "医疗系统" }  // Soporte básico
        ]
    },
    {
        desc: "STAR (Sicherheitstechniker-Aufseher-Replika), (Security Technician Guard Replika 'Starling') or Star, are Generation 4 Low-Cost Combat Replikas. These units are Protektor Security Technicians Guards...",
        icon: "../assets/img/ReplikaWireframe_STAR.png",
        wiki: "https://signalis.fandom.com/wiki/Star",
        stats: ["01 REG ST R01", "02 DAT R5 9901", "03 SYS CRITICAL", "04 SEN HI DET", "05 SPE ATK HI"],
        kData: [
            { bar: "■■■■□□□□", label: "战斗模块" }, // Combate estándar
            { bar: "■■■■□□□□", label: "中型装甲" }, // Armadura equilibrada
            { bar: "■■■■■■□□", label: "武器系统" }  // Enfoque en armas
        ]
    },
    {
        desc: "ADLR (Administration-, Datenverarbeitung-, Logistik-Replika), (Administration, Data Processing, Logistics Replika 'Eagle') or Adler, are Generation 5 High Command Specialist Replikas. Adlers are Protektor Führungskommando Administrator units....",
        icon: "../assets/img/ReplikaWireframe_ADLR.png",
        wiki: "https://signalis.fandom.com/wiki/Adler",
        stats: ["01 REG AD R03", "02 DAT R3 4567", "03 SYS F0 NULL", "04 SEN A5 MED", "05 SPE N1 EQ"],
        kData: [
            { bar: "■■■■■■■□", label: "管理模块" }, // Administrador
            { bar: "■■□□□□□□", label: "轻型装甲" }, // Poca resistencia
            { bar: "■■■□□□□□", label: "逻辑系统" }  // Alta capacidad lógica
        ]
    },
    {
        desc: "ARAR (Allzweck-Reparatur-Arbeiter Replika), (All-Purpose Repair Worker Replika 'Macaw') or Ara, are Generation 2 Low-Cost General Purpose Replikas used in Repair, Maintenance, Construction and Production of Industrial goods...",
        icon: "../assets/img/ReplikaWireframe_ARAR.png",
        wiki: "https://signalis.fandom.com/wiki/ARAR",
        stats: ["01 REG AR R02", "02 DAT R4 7890", "03 SYS F0 NULL", "04 SEN A7 HIGH", "05 SPE N3 EQ"],
        kData: [
            { bar: "■■■□□□□□", label: "工程模块" }, // Mantenimiento
            { bar: "■■■■■□□□", label: "加固装甲" }, // Armadura reforzada
            { bar: "■■■■■■□□", label: "维修系统" }  // Reparación
        ]
    },
    {
        desc: "FKLR (Führungskommando-Leiteinheit-Replika), (Operational Command Control Unit Replika 'Falcon') or Falke, are Generation 6 High-Tech Bioresonance Command Replikas. These Replikas are used in every AEON facility across the Eusan Nation as the commander of the Protektor security forces of these facilities...",
        icon: "../assets/img/ReplikaWireframe_FKLR.png",
        wiki: "https://signalis.fandom.com/wiki/FKLR_(Falke)",
        stats: ["01 REG FK R05", "02 DAT R6 1234", "03 SYS F0 NULL", "04 SEN A9 HIGH", "05 SPE N4 EQ"],
        kData: [
            { bar: "■■■■■■■■", label: "指挥模块" }, // Bioresonancia/Mando
            { bar: "■■■■■■■□", label: "极高装甲" }, // Muy resistente
            { bar: "■■■■■■■■", label: "神性系统" }  // Sistema "divino"
        ]
    },
    {
        desc: "KLBR (Kommando-Leiteinheit Bioresonanztechnik-Replika), (Commando Control Unit Bioresonance Technology Replika 'Hummingbird') or Kolibri, are Generation 6 High-Tech Bioresonance Specialist Replikas. These Units are used as Commando Control Units, using their Bio-resonance to increase squad cohesion as well as improve the mental stability of all units in a squad. Their role is described as being an 'Elite Protektor'...",
        icon: "../assets/img/ReplikaWireframe_KLBR.png",
        wiki: "https://signalis.fandom.com/wiki/KLBR_(Kolibri)",
        stats: ["01 REG KL R06", "02 DAT R7 5678", "03 SYS F0 NULL", "04 SEN A6 MED", "05 SPE N5 EQ"],
        kData: [
            { bar: "■■■■■■■■", label: "共振模块" }, // Bioresonancia máxima
            { bar: "■□□□□□□□", label: "脆弱装甲" }, // Muy frágil
            { bar: "■■■■■■■□", label: "精神系统" }  // Enfoque mental
        ]
    },
    {
        desc: "LSTR (Landvermessungs-/Schiff-Techniker Replika), (Land Survey/Ship Technician Replika 'Magpie') or Elster, are Generation 5 Kosmo-Pioneer Specialist Replikas designed to assist in orbital missions and are Combat Engineers and Technicians. These units were primarily used in the Penrose mission due to their survivability and adaptability in volatile and isolated conditions...",
        icon: "../assets/img/ReplikaWireframe_LSTR.png",
        wiki: "https://signalis.fandom.com/wiki/LSTR_(Elster)",
        stats: ["01 REG LS R07", "02 DAT R8 9012", "03 SYS F0 NULL", "04 SEN A4 LOW", "05 SPE N6 EQ"],
        kData: [
            { bar: "■■■■■■□□", label: "生存模块" }, // Especialista en supervivencia
            { bar: "■■■□□□□□", label: "轻量装甲" }, // Movilidad sobre defensa
            { bar: "■■■■■■■□", label: "侦察系统" }  // Exploración
        ]
    },
    {
        desc: "MNHR (Minenarbeit-,Nukleartechnik-,Hochsicherheits-Replika), (Mining, Nuclear Tech, High-Security Replika 'Mynah') or Mynah are Generation 3 Industrial Specialist Replikas. These units are used in the mines below Sierpinski and across the Eusan Nation... SAPR (Schnäpper): SAPR (Schwere Anti-Panzer Replika) also known as a Schnapper is a hinted at Combat Variant of the MNHR unit that does not appear within the game. (only mentioned in Replika Overview: MNHR)",
        icon: "../assets/img/ReplikaWireframe_MNHR.png",
        wiki: "https://signalis.fandom.com/wiki/MNHR_(Mynah)",
        stats: ["01 REG MN R08", "02 DAT R9 3456", "03 SYS F0 NULL", "04 SEN A3 LOW", "05 SPE N7 EQ"],
        kData: [
            { bar: "■■□□□□□□", label: "工业模块" }, // Uso industrial
            { bar: "■■■■■■■■", label: "重型机甲" }, // La armadura más pesada
            { bar: "■■■■■□□□", label: "热能系统" }  // Sistema de propulsión/calor
        ]
    },
    {
        desc: "STCR (Sicherheitstechniker-Controller-Replika), (Security Technician Controller Replika 'Stork') or Storch, are Generation 5 Combat Lead Replikas. These units are deployed as overwatch and coordination of STARs...",
        icon: "../assets/img/ReplikaWireframe_STCR.png",
        wiki: "https://signalis.fandom.com/wiki/STCR_(Storch)",
        stats: ["01 REG ST R09", "02 DAT R10 7890", "03 SYS F0 NULL", "04 SEN A2 LOW", "05 SPE N8 EQ"],
        kData: [
            { bar: "■■■■■□□□", label: "强制模块" }, // Disciplina/Fuerza
            { bar: "■■■■■■□□", label: "强化装甲" }, // Muy resistente
            { bar: "■■■■■■□□", label: "压制系统" }  // Control de masas
        ]
    },
    {
        desc: "KNCR is a high ranked Replika unit in charge of Blockwarts. It is only mentioned as sender in Message Inbox...",
        icon: "../assets/img/KNCR_Logo.png",
        wiki: "https://signalis.fandom.com/wiki/Replika_Units",
        stats: ["01 REG KN R16", "02 DAT HQ 0001", "03 SYS F0 NULL", "04 SEN A2 LOW", "05 SPE ? ?"],
        kData: [
            { bar: "■■■■■■■□", label: "监察模块" }, 
            { bar: "■■■■■□□□", label: "强化装甲" }, 
            { bar: "■■■■■■■■", label: "情报系统" } 
        ]
    }
];

infoBtn.addEventListener('click', () => {
    window.open('https://signalis.fandom.com/wiki/Signalis_Wiki', '_blank');
});

// Función para renderizar el enemigo actual
let currentIndex = 0;
function renderCurrentEnemy() {
    const currentEnemy = enemiesData[currentIndex];
    
    description.textContent = currentEnemy.desc;
    eIcon.src = currentEnemy.icon;

    stats.innerHTML = ''; 
    currentEnemy.stats.forEach(text => {
        const statItem = document.createElement('li');
        statItem.classList.add('stats-grid-item');
        statItem.textContent = text;
        stats.appendChild(statItem);
    });

    const squares = [".square-1", ".square-3", ".square-5"];
    squares.forEach((selector, index) => {
        const container = document.querySelector(selector);
        // Usamos currentEnemy.kData[index]
        if (container && currentEnemy.kData[index]) {
            const barChart = container.querySelector('.bar-chart');
            const cjkText = container.querySelector('.cjk-text');
            
            if (barChart) barChart.textContent = currentEnemy.kData[index].bar;
            if (cjkText) cjkText.textContent = currentEnemy.kData[index].label;
        }
    });
}

// BOTÓN ATRÁS (btnTV1)
btnTV1.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = enemiesData.length - 1;
    }
    renderCurrentEnemy();
});

// BOTÓN SELECCIONAR (btnTV2)
btnTV2.addEventListener('click', () => {
    // 1. Obtenemos los datos del enemigo que está en pantalla ahora mismo
    const currentEnemy = enemiesData[currentIndex];
    
    // 2. Feedback visual en la terminal (opcional, muy estilo Signalis)
    description.textContent = "EXTRACTING EXTERNAL DATA...";
    
    // 3. Abrimos la URL en una nueva pestaña después de un pequeño delay
    setTimeout(() => {
        window.open(currentEnemy.wiki, '_blank');
        
        // Restauramos el texto original después de abrir la wiki
        description.textContent = currentEnemy.desc;
    }, 500); 
});

// BOTÓN ADELANTE (btnTV3)
btnTV3.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= enemiesData.length) {
        currentIndex = 0;
    }
    renderCurrentEnemy();
});

renderCurrentEnemy();