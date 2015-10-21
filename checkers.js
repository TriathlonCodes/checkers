var r = "red"
var b = "black"
var checkerBoard = [b,b,b,b,b,b,b,b,
					b,b,b,b,b,b,b,b,
					null,null,null,null,null,null,null,null,
					null,null,null,null,null,null,null,null,
					null,null,null,null,null,null,null,null,
					null,null,null,null,null,null,null,null,
					r,r,r,r,r,r,r,r,
					r,r,r,r,r,r,r,r]

var CheckersGame = function(){
	this.board = checkerBoard;
	this.player1 = b;
	this.player2 = r;
	this.playerTurn = this.player1
}



CheckersGame.prototype.up = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		this.board[location - 8] = this.playerTurn
		this.board[location] = null
	}
}

CheckersGame.prototype.down = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		this.board[location + 8] = this.playerTurn
		this.board[location] = null
	}
}

CheckersGame.prototype.right = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		this.board[location + 1] = this.playerTurn
		this.board[location] = null
	}
}

CheckersGame.prototype.up = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		this.board[location - 1] = this.playerTurn
		this.board[location] = null
	}
}