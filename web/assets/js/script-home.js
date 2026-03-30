const stats = document.querySelector('#statsGrid');
const description = document.querySelector('#desc');
const btnTV1 = document.querySelector('#btnTV1');
const btnTV2 = document.querySelector('#btnTV2');
const btnTV3 = document.querySelector('#btnTV3');
const eIcon = document.querySelector('#eIcon');
const infoBtn = document.querySelector('#infoBtn');

const enemiesData = [
    {
        desc: "正在回数据... (EULE)",
        icon: "img/eule-icon.png",
        wiki: "https://signalis.fandom.com/wiki/Eule"
    },
    {
        desc: "在选择数据... (STAR)",
        icon: "img/star-icon.png",
        wiki: "https://signalis.fandom.com/wiki/Star"
    },
    {
        desc: "正进数据... (ADLER)",
        icon: "img/adler-icon.png",
        wiki: "https://signalis.fandom.com/wiki/Adler"
    }
];

infoBtn.addEventListener('click', () => {
    window.open('https://signalis.fandom.com/wiki/Signalis_Wiki', '_blank');
});


function createStatsGrid() {


    for (let i = 0; i < 6; i++) {
        const statItem = document.createElement('li');
        statItem.classList.add('stats-grid-item');
        if (i === 1) {
            statItem.textContent = `0${i}     REG     F0     NULL`;
        } else if (i === 2) {
            statItem.textContent = `0${i}     DAT     R2     1823`;
        } else if (i === 3) {
            statItem.textContent = `0${i}     SYS     F0     NULL`;
        }else if (i === 4) {
            statItem.textContent = `0${i}     SEN     A8     TER`;

        } else if (i === 5) {
            statItem.textContent = `0${i}     SPE     N2     EQ`;
        }

        stats.appendChild(statItem);
    }
}

createStatsGrid();

let currentIndex = 0;
function renderCurrentEnemy() {
    const currentEnemy = enemiesData[currentIndex];
    
    description.textContent = currentEnemy.desc;
    eIcon.src = currentEnemy.icon;
}

// BOTÓN ATRÁS (btnTV1)
btnTV1.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = enemiesData.length - 1;
    }
    renderCurrentEnemy();
});

// BOTÓN SELECCIONAR (btnTV2) - Puedes usarlo para un efecto visual
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
