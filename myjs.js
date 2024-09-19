function getComputerChoice() {
  // 生成 0 到 2 的随机整数
  const randomNumber = Math.floor(Math.random() * 3);

  // 根据随机数返回 "rock", "paper" 或 "scissors"
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  let userChoice = prompt(
    "Please enter rock, paper, or scissors:"
  ).toLowerCase();

  if (validChoices.includes(userChoice)) {
    return userChoice;
  } else {
    console.log("Invalid choice. Please try again.");
    return getHumanChoice();
  }
}

// 调用函数并打印结果

let humanScore = 0;
let computerScore = 0;

const res = document.querySelector("#result");

function playRound(humanChoice, computerChoice) {
  // 将 humanChoice 转换为小写，确保不区分大小写
  humanChoice = humanChoice.toLowerCase();

  // 定义不同情况的胜负规则
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    // 如果人类获胜
    humanScore++;
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}`
    );
  } else {
    // 如果计算机获胜
    computerScore++;
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}`
    );
  }
    res.textContent = `你的分数为：${humanScore} 电脑分数为：${computerScore}`;
    
}

const btns=document.querySelectorAll('button');
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        playRound(btn.textContent,getComputerChoice());
        console.log(`${btn.textContent}`);
    });
});





