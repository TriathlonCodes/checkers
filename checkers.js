var r = "red"
var b = "black"
var checkerBoard = [b,null,b,null,b,null,b,null,
					null,b,null,b,null,b,null,b,
					b,null,b,null,b,null,b,null,
					null,null,null,null,null,null,null,null,
					null,null,null,null,null,null,null,null,
					null,r,null,r,null,r,null,r,
					r,null,r,null,r,null,r,null,
					null,r,null,r,null,r,null,r]

var CheckersGame = function(board){
	this.board = generateBoard(board)
	this.player1 = b;
	this.player2 = r;
	this.playerTurn = this.player1
	this.otherPlayer = this.player2
}

var BlackChip = function(location, player){
	this.color = "black"
	this.location = location
	this.player = player
	this.kinged = false
}

var RedChip = function(location, player){
	this.color = "red"
	this.location = location
	this.player = player
	this.kinged = false
}

var generateBoard = function(board){
	for (var i = 0; i < board.length; i++){
		if (board[i] == "black") {
			board[i] = new BlackChip(i, this.player1)
		} else if (board[i] == "red") {
			board[i] = new RedChip(i, this.player2)
		}
	}
	return (board)
}

CheckersGame.prototype.upRight = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		if(this.board[location -7] == null){
			this.moveChip(location, location -7)
		}
	}
}

CheckersGame.prototype.downRight = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		if (this.board[location + 9] == null){
			this.moveChip(location, location + 9)
		}
	}
}

CheckersGame.prototype.moveChip = function(currentLocation, intendedLocation){
	this.board[intendedLocation] = this.board[currentLocation]
	this.board[intendedLocation].location = intendedLocation
	this.board[currentLocation] = null
}

CheckersGame.prototype.upLeft = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else {
		console.log("hit!")
		if (this.board[location -9] == null){
			tthis.moveChip(location, location - 9)
		}
	}
}

CheckersGame.prototype.downLeft = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
		// need other errors in here
	} else {
		console.log("hit!")
		if (this.board[location +7] == null){
			this.moveChip(location, location + 7)
		}
	}
}

CheckersGame.prototype.jumpDownLeft = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location + 7].color != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location + 14] != null) {
		console.log("already a chip here")
	} else {
		this.killChip(location +7)
		this.moveChip(location, location + 14)
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpLeft = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 9].color != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 18] != null) {
		console.log("already a chip here")
	} else {
		this.killChip(location -9)
		this.moveChip(location, location -18)
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpDownRight = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location + 9].color != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.checkForChips[location + 14]) {
		console.log("already a chip here")
	} else {
		this.killChip(location +9)
		this.moveChip(location, location +18)
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpRight = function(location){
	if(!this.checkForChips(location)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 7].color != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 14] != null) {
		console.log("already a chip here")
	} else {
		this.killChip(location -7)
		this.moveChip(location, location -14)	}
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
		case "upRight":
			if (this.boardConstraints(currentLocation, currentLocation -7)){
				this.upRight(currentLocation)
			}
			break;
		case "downRight":
			if (this.boardConstraints(currentLocation, currentLocation +9)){
				this.downRight(currentLocation)
			}
			break;
		case "upLeft":
			if (this.boardConstraints(currentLocation, currentLocation -9)){
				this.upLeft(currentLocation)
			}
			break;
		case "downLeft":
			if (this.boardConstraints(currentLocation, currentLocation +7)){
				this.downLeft(currentLocation)
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

CheckersGame.prototype.hasWon = function(){
	if (game.board.include)
}

