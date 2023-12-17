function startCounter(){
    let movementText;
    movement++;
    movementText = movement;

    if(movement > level[levelActual].movementMax){
        gameOver();
        return;
    }

    if(movement < 10){
        movementText = "0" + movement;
    }
    document.querySelector("#move").innerText = movementText;
}

function maxCount(){
    let movementMaxText = level[levelActual].movementMax;
    if(movementMaxText < 10){
        movementMaxText = "0" + movementMaxText;
    }
    document.querySelector("#move-total").innerText = movementMaxText;
}