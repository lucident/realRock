console.log("hello world")

function getComputerChoice(){
    const option = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * 3);
    
    return option[random]
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors, SHOO!")

    return choice
}