let mainContent = document.getElementById("mainContainer");

function createTowers(){
    for(let i = 0; i < 3; i++){
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

function createDisc(){
    let firstTower = document.getElementById("tower0");

    for( let i = 0; i < 4; i++){
        let wid = 100 - (i*25);
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
towers.addEventListener('click', function(event){   
    let selectedTower = event.target; 
    console.log(selectedTower)
})
    



