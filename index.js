var prompt = require('prompt');

var Game = function() {
  this.board = [
    ['- ', '- ', '- '],
    ['- ', '- ', '- '],
    ['- ', '- ', '- ']
  ];
  this.currentPlayer = 'Player 1';
  this.gameState = true;
};

Game.prototype.drawBoard = function(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      process.stdout.write(board[i][j] + ' ');
    }
    process.stdout.write('\n');
  }
};

Game.prototype.checkWin = function() {
  if (this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2] && this.board[0][0] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2] && this.board[1][0] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2] && this.board[2][0] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0] && this.board[0][0] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1] && this.board[0][1] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2] && this.board[0][2] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  } else if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0] && this.board[0][2] !== '- ') {
    console.log(this.currentPlayer + ' Wins!!!!!!!!');
    this.gameState = false;
  }
};

Game.prototype.playerAction = function(x, y) {
  if (this.currentPlayer === 'Player 1') {
    this.board[x][y] = 'O ';
    this.drawBoard(this.board);
    this.checkWin();
    this.currentPlayer = 'Player 2';
  } else if (this.currentPlayer === 'Player 2') {
    this.board[x][y] = 'X ';
    this.drawBoard(this.board);
    this.checkWin();
    this.currentPlayer = 'Player 1';
  }
  if (this.gameState) {
    this.startGame();
  }
};

Game.prototype.startGame = function() {
  console.log(this.currentPlayer + '\'s turn:');
  prompt.start();
  prompt.get(['x', 'y'], function(err, res) {
    this.playerAction(res.x, res.y);
  }.bind(this));
};

var TicTacToe = new Game();
TicTacToe.startGame();