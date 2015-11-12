var r = "red"
var b = "black"
var checkerBoard = [b,b,b,b,b,b,b,b,
					b,b,b,b,b,b,b,b,
					null,null,null,null,null,null,null,null,
					null,null,b,null,null,null,null,null,
					null,null,null,r,null,null,null,null,
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
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		if(this.board[location -8] == null){
			this.board[location - 8] = this.playerTurn
			this.board[location] = null
		}
	}
}

CheckersGame.prototype.down = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		if (this.board[location + 8] == null){
			this.board[location + 8] = this.playerTurn
			this.board[location] = null
		}
	}
}

CheckersGame.prototype.right = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		if (this.board[location + 1] == null){
			this.board[location + 1] = this.playerTurn
			this.board[location] = null
		}
	}
}

CheckersGame.prototype.left = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
		// need other errors in here
	} else {
		console.log("hit!")
		if (this.board[location - 1] == null){
			this.board[location - 1] = this.playerTurn
			this.board[location] = null
		}
	}
}

CheckersGame.prototype.jumpDownLeft = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location + 7] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location + 14] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		killChip(location +7)
		this.board[location + 14] = this.playerTurn
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpLeft = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 9] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 18] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.killChip(location -9)
		this.board[location - 18] = this.playerTurn
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpDownRight = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location + 9] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.checkForChips[location + 14]) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.killChip(location +9)
		this.board[location + 18] = this.playerTurn
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpRight = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location] != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 7] != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 14] != null) {
		console.log("already a chip here")
	} else {
		this.board[location] = null;
		this.killChip(location -7)
		this.board[location - 14] = this.playerTurn
	}
}

// Rules of Chekers
// First black goes, then red
CheckersGame.prototype.nextTurn = function(){
	if (this.playerTurn == this.player1){
		this.otherPlayer = this.player1
		this.playerTurn = this.player2
	} else {
		this.playerTurn = this.player1
		this.otherPlayer = this.player2
	}
}

// you can only move up down right or left if there is no other chip there

CheckersGame.prototype.checkForChips = function(location){
	if( this.board[location] != null ){
		return true
	} else {
		return false
	}
}

// you cannot jump from one side of the board to another
CheckersGame.prototype.boardConstraints = function(currentLocation, intendedLocation){
	// this could be better done in a hash?
	var rowNow = currentLocation % 8
	var rowLater = intendedLocation % 8
	if (Math.abs(rowNow - rowLater)>2){
		return false
	} else {
		return true
	}
}

// remove a player than has been jumped over
CheckersGame.prototype.killChip = function(deadChipLocation){
	this.board[deadChipLocation] 	= null
}

CheckersGame.prototype.fullTurn = function(currentLocation, direction){
	switch(direction){
		case "up":
			if (this.boardConstraints(currentLocation, currentLocation -8)){
				this.up(currentLocation)
			}
			break;
		case "down":
			if (this.boardConstraints(currentLocation, currentLocation +8)){
				this.down(currentLocation)
			}
			break;
		case "left":
			if (this.boardConstraints(currentLocation, currentLocation -1)){
				this.left(currentLocation)
			}
			break;
		case "right":
			if (this.boardConstraints(currentLocation, currentLocation +1)){
				this.right(currentLocation)
			}
			break;
		case "jumpUpRight":
			if (this.boardConstraints(currentLocation, currentLocation -14)){
				this.jumpUpRight(currentLocation)
			}
			this.board
			break;
		case "jumpUpLeft":
			if (this.boardConstraints(currentLocation, currentLocation -18)){
				this.jumpUpLeft(currentLocation)
			}
			break;
		case "jumpDownRight":
			if (this.boardConstraints(currentLocation, currentLocation +18)){
				this.jumpDownRight(currentLocation)
			}
			break;
		case "jumpDownLeft":
			if (this.boardConstraints(currentLocation, currentLocation +14)){
				this.jumpDownLeft(currentLocation)
			}
			break;
	}
	this.nextTurn()
	displayChips()
}




