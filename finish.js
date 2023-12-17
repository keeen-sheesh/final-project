function finish(){
    if(levelActual < level.length - 1){
       document.querySelector("#levelUp").classList.add("visible"); 
    }else{
        document.querySelector("#endGame").classList.add("visible");
    }
    
}