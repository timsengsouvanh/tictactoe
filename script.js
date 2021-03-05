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
       square.innerHTML = displayController.Player2.mark
        displayController.switchTurn()
       })
   })
    return {
        board,
    };
    })();

//display module
const displayController = (() => {
    //making players
    const Player1 = Player('player', 'X')
    const Player2 = Player('player2', 'O')
    
    //switch turns 
    let turn = false; 
    function switchTurn() {
      if (displayController.turn === false){
        displayController.turn = true
        gameBoard.square.innerHTML = displayController.Player1.mark
      }
      else {
          displayController.turn = false;
          gameBoard.square.innerHTML = displayController.Player2.mark
          console.log(displayController.turn)
    }       
    }
    return {
        Player1,
        Player2,
        switchTurn,
        turn
    };
})()

