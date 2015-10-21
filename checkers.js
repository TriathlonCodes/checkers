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
	this.otherPlayer = this.player2
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
		// need other errors in here
	} else {
		console.log("hit!")
		this.board[location - 1] = this.playerTurn
		this.board[location] = null
	}
}

CheckersGame.prototype.jumpDownLeft = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location + 7] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location + 14] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.board[location + 14] = this.playerTurn
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpLeft = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 9] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 18] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.board[location - 18] = this.playerTurn
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpDownRight = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location + 9] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location + 18] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.board[location + 18] = this.playerTurn
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpRight = function(location){
	if(this.board[location] == null){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 7] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 14] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.board[location - 14] = this.playerTurn
	}
	//need error handling for edges of the board
}