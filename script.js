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
        displayController.switchTurn()
        console.log(board)
        displayController.checkWinner()
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
      if (displayController.activeUser == Player1){
        displayController.activeUser = Player2
      }
      else {
          displayController.activeUser = Player1
    }    

    }

    let winningCombinations = [
        [0,1,2],
    ]

    function checkWinner (){
       if (gameBoard.board[1] == Player1.mark){
           console.log('winner')
       }
       else console.log('havent won')

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

