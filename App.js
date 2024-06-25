let Userscore = 0;
let ComScore = 0;
let User_score_updater = document.querySelector("#user-score"); 
let Com_score_updater = document.querySelector("#Computer-score"); 
let msg = document.querySelector("#msg");

// Genrate 
const GenComChoice = () => {
    // rock , paper , sissoer;
    let ComgenChoice = ["Rock", "Paper", "Sissors"];
    let RandIdx = Math.floor(Math.random()*ComgenChoice.length);
    turnU = true;
    return ComgenChoice[RandIdx];
}
const DrawGame = () => {
    msg.innerText = "Match Draw ! try Again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (uservarWin,userChoice,computerChoice) => {
    if(uservarWin === true){
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win ! ${userChoice} Beats ${computerChoice}`;
        User_score_updater.innerText = ++Userscore;
    }else{
        msg.style.backgroundColor = "red";
        msg.innerText = `You lose ! ${computerChoice} Beats ${userChoice}`;;
        Com_score_updater.innerText = ++ComScore;
    }

}
const choices = document.querySelectorAll(".Choice");
const playGame = (userChoice) =>{
    // gernate com cchoice 
    const computerChoice = GenComChoice();   
    if(userChoice == computerChoice){
        //  Draw unction
        DrawGame();
    }else {
        uservarWin = true;
        if(userChoice === "Rock"){
            uservarWin = computerChoice === "Paper" ? false:true;
        }else if("Paper"){
            uservarWin = computerChoice === "Sissors" ? false:true;
        }else{
            uservarWin = computerChoice === "Rock" ? false: true;
        }
        showWinner(uservarWin,userChoice,computerChoice);
    }


}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const Choise_id = choice.getAttribute("id");
        playGame(Choise_id);

    });
});
