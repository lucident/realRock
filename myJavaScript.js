console.log("hello world")

function getComputerChoice(){
    const option = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * 3);
    
    return option[random]
}