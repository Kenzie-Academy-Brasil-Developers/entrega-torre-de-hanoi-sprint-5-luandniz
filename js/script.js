let mainContent = document.getElementById("mainContainer");

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

function createDisc() {
    let firstTower = document.getElementById("tower0");

    for (let i = 0; i < 4; i++) {
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
createDisc()


// evento de click evento de click evento de click evento de click 
let towers = document.querySelector("main");
towers.addEventListener('click', handleAction);

let currentState = false;
let selection;

function handleAction(event) {
    let selectedTower = event.target;

    // Caso o usuário selecione algum disco, será direcionado para a torre
    if (selectedTower.className === 'discStyle') {
        selectedTower = selectedTower.parentElement;
    }

    let tower = document.getElementById(`${selectedTower.id}`);
    let eleCount = tower.childElementCount;

    // selecionada a torre
    if (selectedTower.className === 'tower') {

        if (currentState === false) {
            selection = selectedTower;
            currentState = true;
            return;

        } else if (currentState === true) {
            let lastKid = selection.lastElementChild;
            let lastKidWidth = lastKid.style.width;
            let lastKidNumber = parseInt(lastKidWidth, 10);

            if (eleCount === 0) {
                tower.appendChild(lastKid);
            } if (eleCount > 0) {
                let eleWidth = selectedTower.lastElementChild.style.width;
                let eleNumber = parseInt(eleWidth, 10);

                if (lastKidNumber < eleNumber) {
                    tower.appendChild(lastKid);
                }
            }
            currentState = false;
            return;
        }

    }
}


// Reset Button
const resetButton = document.createElement('input');
document.body.appendChild(resetButton);
resetButton.setAttribute('type', 'reset');
resetButton.addEventListener('click', reset)

function reset(){
    let tower0 = document.getElementById('tower0');
    for(let i = 0; i < 4; i++){
    let disc = document.getElementById(`disc${i}`);
        tower0.appendChild(disc);
    }
    return reset;
}