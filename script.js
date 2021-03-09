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
         displayController.moves++
         console.log(displayController.moves)
         displayController.checkTie()
         color()
        }
       })
   })

   //add color to winning squares
   function color() {
       squarearr.forEach((square, index) => {
           if (board[index] == 'win'){
            square.classList.add('victory')
           }
       })
   }


    return {
        board,
        color,
    };
    })();



//display module
const displayController = (() => {
    let square = document.querySelectorAll('.grid-square')
   
    //making players
    const Player1 = Player('Player 1', 'X')
    const Player2 = Player('Player 2', 'O')
    
    //number of moves
    let moves = 0

    //sets winner for check tie function
    let winner = false;

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

    let wrapper = document.querySelector('.wrapper')
    let winningArea = document.createElement('div')
    

    function checkWinner (){
       winningCombinations.forEach((item) => {
        if (gameBoard.board[item[0]] === displayController.activeUser.mark && gameBoard.board[item[1]] === displayController.activeUser.mark && gameBoard.board[item[2]] === displayController.activeUser.mark){
            winningArea.innerHTML = displayController.activeUser.name + ' wins!'
            winningArea.classList.add('winning-area')
            wrapper.appendChild(winningArea)
            winner = true;
            gameBoard.board[item[0]] = 'win'
            gameBoard.board[item[1]] = 'win'
            gameBoard.board[item[2]] = 'win'
        }
       })
    }

    function checkTie (){
     if (displayController.moves === 9 && winner == false) {
        winningArea.innerHTML = 'Game is Drawn'
        winningArea.classList.add('winning-area')
        wrapper.appendChild(winningArea)
     }
        }

    function newGame () {
        let square = document.querySelectorAll('.grid-square')
        let squarearr = Array.from(square)
        gameBoard.board.forEach((x, index) => {
            gameBoard.board[index] = ""
        })
        squarearr.forEach((square) => {
            square.innerHTML = ""
            square.classList.remove('victory')
            winningArea.innerHTML = ""


       })
       displayController.activeUser = Player1
       displayController.winner = false;
       displayController.moves = 0

       }
    

    return {
        Player1,
        Player2,
        moves,
        switchTurn,
        checkWinner,
        checkTie,
        newGame,
        winningCombinations,
        activeUser
    };
})()

