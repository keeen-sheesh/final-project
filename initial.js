function initial(){
    movement = 0;
    distributeCard(level[levelActual].card);

    document.querySelector("#move").innerText = "00";
    maxCount()
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#levelUp").classList.remove("visible");
    document.querySelectorAll('.card').forEach(function(element){
        element.addEventListener("click", discover);
    });

    // countDown();
}

function restart(){
    levelActual = 0;
    updateLevel();
    initial();
}
initial();

document.querySelectorAll(".restart").forEach(function(element){
    element.addEventListener("click", restart);
});

document.querySelector("#nextLevel").addEventListener("click", LoadNewLevel);