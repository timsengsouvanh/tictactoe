//player factory
const Player = (name, mark) => {
    return {
        name, mark
    }
};

//gameBoard module
const gameBoard = (() => {
    let board = []
    for (let i=0; i<9; i++){
        board.push('')
    }
    //display gameboard
    let gameArea = document.querySelector('.game-area')
    board.forEach((item, index) => {
        let square = document.createElement('div')
        square.classList.add('grid-square')
        gameArea.appendChild(square)
    })

   //add event listeners
   let square = document.querySelectorAll('.grid-square')
   let squarearr = Array.from(square)
    squarearr.forEach((square, index) => {
       square.addEventListener('click', () => {
        if (square.innerHTML == "") { //stops overwriting previous marks
        square.innerHTML = displayController.activeUser.mark
        board[index] = displayController.activeUser.mark
        square.setAttribute('data', displayController.activeUser.mark)
         displayController.checkWinner()
         console.log(board)
         displayController.switchTurn()
        
       
        }
        
       })
   })
   
    return {
        board,
    };
    })();



//display module
const displayController = (() => {
    let square = document.querySelectorAll('.grid-square')
   

    //making players
    const Player1 = Player('player', 'X')
    const Player2 = Player('player2', 'O')
    
    //switch turns 
    let activeUser = Player1; 
    function switchTurn() {
      if (displayController.activeUser === Player1){
        displayController.activeUser = Player2
        console.log(displayController.activeUser)
      }
      else {
          displayController.activeUser = Player1
          console.log(displayController.activeUser)
    }    

    }

    let winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function checkWinner (){
       winningCombinations.forEach((item) => {
        if (gameBoard.board[item[0]] === displayController.activeUser.mark && gameBoard.board[item[1]] === displayController.activeUser.mark && gameBoard.board[item[2]] === displayController.activeUser.mark){
        alert('winner is ' + displayController.activeUser.mark)
        }
       })
       

    }

    return {
        Player1,
        Player2,
        switchTurn,
        checkWinner,
        winningCombinations,
        activeUser
    };
})()

