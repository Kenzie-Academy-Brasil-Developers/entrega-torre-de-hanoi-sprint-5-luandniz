let mainContent = document.getElementById("mainContainer");
let discsAmount = 3;

// Counter
const moveCounter = document.getElementById('counter');
let counter = 0;
moveCounter.innerText = `Movimentos: \n ${counter}`;

function addCounter() {
    counter++
    moveCounter.innerText = `Movimentos: \n ${counter}`;
}

// Create Towers
function createTowers() {
    for (let i = 0; i < 3; i++) {
        let tower = document.createElement("div");
        tower.classList.add("tower");
        //classe para estilizar a tower --> .tower
        tower.id = "tower" + i;
        // o id da torre é tower+índice
        // tower0, tower1,tower2 (para handler de click)       
        mainContent.appendChild(tower);
    }
}
createTowers()

// Create Discs
function createDisc(n) {
    let firstTower = document.getElementById("tower0");

    for (let i = 0; i < n; i++) {
        let wid = 100 - (i * 25);
        let disc = document.createElement("div");
        disc.classList.add("discStyle");
        //classe para estilizar os discos --> .discStyle
        disc.id = "disc" + i;
        // o id de disc é disc+índice
        // disc0, disc1, disc2 

        disc.style.width = `${wid}px`;
        firstTower.appendChild(disc);
    }
}
createDisc(discsAmount);

// Níveis de dificuldade
let levelF = document.getElementById('btn1');
levelF.addEventListener('click', () => setLevel(3));

let levelM = document.getElementById('btn2');
levelM.addEventListener('click', () => setLevel(4));

let levelD = document.getElementById('btn3');
levelD.addEventListener('click', () => setLevel(5));

function setLevel(n) {
    let firstTower = document.getElementById("tower0");
    reset(n);
    firstTower.innerHTML = '';
    discsAmount = n;
    createDisc(n);
}

// evento de click
let towers = document.querySelector("main");
towers.addEventListener('click', handleAction);

let currentState = false;
let selection;

function handleAction(event, discsAmt) {
    let selectedTower = event.target;

    // Caso o usuário selecione algum disco, será direcionado para a torre
    if (selectedTower.className === 'discStyle') {
        selectedTower = selectedTower.parentElement;
    }

    let tower = document.getElementById(`${selectedTower.id}`);
    let elementCount = tower.childElementCount;

    // selecionada a torre
    if (selectedTower.className === 'tower') {

        if (currentState === false) {
            if (elementCount !== 0) {
                selection = selectedTower;
                currentState = true;

                return currentState;
            }

        } else {
            let lastKid = selection.lastElementChild;
            let lastKidWidth = lastKid.style.width;
            let lastKidNumber = parseInt(lastKidWidth, 10);

            if (elementCount === 0) {
                tower.appendChild(lastKid);
                addCounter();

            } else {
                let elementWidth = selectedTower.lastElementChild.style.width;
                let elementNumber = parseInt(elementWidth, 10);

                if (lastKidNumber < elementNumber) {
                    tower.appendChild(lastKid);
                    addCounter();
                }
            }
            currentState = false;
            winner(discsAmount);
            return currentState;
        }
    }
}

// Div with buttons
const buttons = document.getElementById('buttons__box');

// CONDIÇÃO DE VENCEDOR CONDIÇÃO DE VENCEDOR CONDIÇÃO DE VENCEDOR 
let winnerBox = document.getElementById('win');
let winmsg = document.createElement('p');
function winner(discsAmt) {
    let win = document.getElementById("tower2");
    if (win.childElementCount === discsAmount) {
        win.classList.add("tower--winBackground")
        winnermsg()
    }
}

function winnermsg() {
    winnerBox.appendChild(winmsg);
    winmsg.innerText = "VOCÊ VENCEU!!";
}

// Reset Button
const resetButton = document.createElement('input');
buttons.appendChild(resetButton);
resetButton.setAttribute('type', 'reset');
resetButton.addEventListener('click', reset);

function reset(discsAmt) {
    let tower0 = document.getElementById('tower0');
    for (let i = 0; i < discsAmount; i++) {
        let disc = document.getElementById(`disc${i}`);
        tower0.appendChild(disc);
    }

    counter = 0;
    moveCounter.innerText = `Movimentos: \n ${counter}`;
    
    if(winnerBox.childElementCount > 0){
    let win = document.getElementById("tower2");
    win.classList.remove("tower--winBackground");
    winnerBox.removeChild(winmsg);
    }

    return reset;
}