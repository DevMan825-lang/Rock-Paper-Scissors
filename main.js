var playerscore = 0;
var computerscore = 0; 
function myFunction(){
    var playerChoose = document.getElementById("choose").value; 
    var choose = new Array("Rock", "Paper", "Scissors"); 
    var computerChoose = choose[Math.floor(Math.random() * choose.length)]; 
    document.getElementById("playerChoose").textContent = " Player Choose : " + " " + playerChoose;
    document.getElementById("demo").textContent = " Computer Choose : " + " " + computerChoose;
    document.getElementById("container2").style.visibility = "visible"; 
    document.getElementById("container4").style.visibility = "visible";
    if(playerChoose == "Rock"){
         document.getElementById("container2").src = "images/rock.png"; 
    } else if(playerChoose == "Paper"){
         document.getElementById("container2").src = "images/Paper.png"; 
    }  if(playerChoose == "Scissors"){
         document.getElementById("container2").src = "images/Scissors.png"; 
    }

    if(computerChoose == "Rock"){
         document.getElementById("container4").src = "images/rock.png"; 
    } else if(computerChoose == "Paper"){
         document.getElementById("container4").src = "images/Paper.png"; 
    }  if(computerChoose == "Scissors"){
         document.getElementById("container4").src = "images/Scissors.png"; 
    }

    if(playerChoose == "Rock" && computerChoose == "Scissors"){
        document.getElementById("conditions").textContent = " Player won \n the game...! "; 
        playerscore = playerscore + 1; 
        document.getElementById("playerScore").textContent = "Player :" + " " + playerscore;
        console.log("Player won the game"); 
    }
    else if(playerChoose === "Scissors" && computerChoose === "Rock"){
         document.getElementById("conditions").textContent = " Computer won \n the game...! ";
         computerscore = computerscore + 1; 
         document.getElementById("computerScore").textContent = "Computer :" + " " + computerscore;
         console.log("Computer won the game");
    }
    else if(playerChoose === "Scissors" && computerChoose === "Paper"){
         document.getElementById("conditions").textContent = " Player won \n the game...! ";
         playerscore = playerscore + 1; 
        document.getElementById("playerScore").textContent = "Player :" + " " + playerscore;
         console.log("Player won the game"); 
    }
    else if(playerChoose === "Paper" && computerChoose === "Scissors"){
         document.getElementById("conditions").textContent = " Computer won \n the game...! ";
         computerscore = computerscore + 1; 
        document.getElementById("computerScore").textContent = "Computer :" + " " + computerscore;
         console.log("Computer won the game");

    }
    else if(playerChoose === "Paper" && computerChoose === "Rock"){
         document.getElementById("conditions").textContent = " Player won \n the game...! ";
         playerscore = playerscore + 1; 
        document.getElementById("playerScore").textContent = "Player :" + " " + playerscore;
        console.log("Player won the game"); 
    }
    else if(playerChoose === "Rock" && computerChoose === "Paper"){
         document.getElementById("conditions").textContent = " Computer won \n the game...! ";
         computerscore = computerscore + 1; 
        document.getElementById("computerScore").textContent = "Computer :" + " " + computerscore;
        console.log("Computer won the game"); 
    }
    else{
        document.getElementById("conditions").textContent = " Match is draw...! ";
        console.log("Match is draw"); 
    }
}