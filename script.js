 // for signle user name will only win if win key has taken by computer
const condition=[
    {
        name:"rock",
        win:"scissors"
    },
    {
        name:"paper",
        win:"rock"
    },
    {
        name:'scissors',
        win:"paper"
    }
]
let userScoreCount = 0;
let computerScoreCount = 0;

for (const singleDom of condition) {
    document.querySelector(`#${singleDom.name}`).addEventListener("click",()=>{
        const computerInput = Math.round(Math.random()*2);
        const randomComputerInput = condition[computerInput].name;
        condition.forEach(element => { 
            document.querySelector(`#${element.name}-com`).className='ComputerChoice' ;
        }); 
        document.querySelector(`#${randomComputerInput}-com`).classList.add("ComputerChoiceActive");
        let msgStore = document.querySelector("#draw");
        let userScore = document.querySelector("#user-score");
        let computerScore = document.querySelector("#computer-score");

        //checking condition for user
        if(singleDom.name===randomComputerInput){
            msgStore.style.display="inline-block";
            msgStore.innerText = "DRAW!!!";
        }else{
            
            if(singleDom.win===randomComputerInput){
                msgStore.style.display="inline-block";
                msgStore.innerText = "User Win";
                userScore.innerText = ++userScoreCount;
            }else{
                msgStore.style.display="inline-block";
                msgStore.innerText = "Computer Win";
                computerScore.innerText = ++computerScoreCount;
            }
        }
    })
}

