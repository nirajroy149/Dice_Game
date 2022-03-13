let heading = document.querySelector(".heading");
let img_1 =document.querySelector("#img-1");
let img_2 = document.querySelector("#img-2");

function play(){
    let num1 = Math.floor(Math.random()*6 + 1);
    let num2 = Math.floor(Math.random()*6 + 1);
    
    if(num1>num2){
        heading.innerHTML = "🚩Player 1 wins!";
    } else if(num1<num2){
        heading.innerHTML = "Player 2 wins! 🚩";
    } else{
        heading.innerHTML = "🚩 Draw! 🚩"
    }

    img_1.src = "./images/dice" + num1 + ".png";
    img_2.src = "./images/dice" + num2 + ".png";

}