var r = "red"

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
	this.potentials = function(){
		var potentials = [[this.location +7, this.location + 14, [this.location +21, this.location + 28], [this.location +23, this.location + 32]], [this.location + 9, this.location + 18, [this.location + 27, this.location + 36], [this.location + 25, this.location + 32]]]
		if (this.kinged) {
			potentials = potentials.concat([[this.location -7, this.location -14, [this.location -21, this.location -28], [this.location -23, this.location -32]], [this.location -9, this.location -18, [this.location -27, this.location - 36], [this.location - 25, this.location - 32]]])
		}
		return potentials
	}
}

var RedChip = function(location, player){
	this.color = "red"
	this.location = location
	this.player = player
	this.kinged = false
	this.potentials = function(){
		var potentials = [[this.location -7, this.location - 14, [this.location -21, this.location - 28], [this.location -23, this.location - 32]], [this.location - 9, this.location - 18, [this.location - 27, this.location - 36], [this.location - 25, this.location - 32]]]
		if (this.kinged) {
			potentials = potentials.concat([[this.location +7, this.location +14, [this.location +21, this.location +28], [this.location +23, this.location +32]], [this.location +9, this.location +18, [this.location +27, this.location + 36], [this.location + 25, this.location + 32]]])
		}
		console.log(potentials)
		return potentials
	}
}

BlackChip.prototype.kingMe = function(){
	if( this.location / 8 >= 7){
		this.kinged = true
	}
}
RedChip.prototype.kingMe = function(){
	if( this.location / 8 <= 1){
		this.kinged = true
	}
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
			this.moveChip(location, location - 9)
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
	if(!this.checkForChips(location) || !this.checkForChips(location+7)){
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
		return true
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpLeft = function(location){
	if(!this.checkForChips(location) || !this.checkForChips(location-9)){
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
		return true
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpDownRight = function(location){
	if(!this.checkForChips(location) || !this.checkForChips(location + 9)){
		console.log("Error!")
		return false
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
		return false
	} else if (this.board[location + 9].color != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
		return false
	} else if (this.checkForChips[location + 14]) {
		console.log("already a chip here")
		return false
	} else {
		this.killChip(location +9)
		this.moveChip(location, location +18)
		return true
	}
	//need error handling for edges of the board
}
CheckersGame.prototype.jumpUpRight = function(location){
	if(!this.checkForChips(location) || !this.checkForChips(location-7)){
		console.log("Error!")
	} else if (this.board[location].color != this.playerTurn) {
		console.log("Not your chip")
	} else if (this.board[location - 7].color != this.otherPlayer) {
		console.log("can't jump over a chip not the other players")
	} else if (this.board[location - 14] != null) {
		console.log("already a chip here")
	} else {
		this.killChip(location -7)
		this.moveChip(location, location -14)
		return true
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
	if (intendedLocation > 63 || intendedLocation < 0 ){
		return false
	}
	var colNow = currentLocation % 8
	var colLater = intendedLocation % 8
	if (Math.abs(colNow - colLater)>2){
		return false
	} else {
		return true
	}
}

CheckersGame.prototype.doubleJumpConstaints = function(currentLocation, intendedLocation){
	if (intendedLocation > 63 || intendedLocation < 0 ){
		return false
	}
	var colNow = currentLocation % 8
	var colLater = intendedLocation % 8
	var rowNow = Math.floor(currentLocation / 8)
	var rowLater = Math.floor(intendedLocation / 8)
	if ((Math.abs(colNow - colLater) === 4 ||	Math.abs(colNow - colLater) === 0) && (Math.abs(rowNow - rowLater) === 4 || Math.abs(rowNow - rowLater) === 0)){
		return true
	} else {
		return false
	}
}

// remove a player than has been jumped over
CheckersGame.prototype.killChip = function(deadChipLocation){
	this.board[deadChipLocation] 	= null
}


// figure out how to use callbacs on this!!
CheckersGame.prototype.fullTurn = function(currentLocation, intendedLocation){
	var diff = intendedLocation - currentLocation
	console.log(currentLocation)
	console.log(intendedLocation)
	switch(diff){
		case 7:
			game.downLeft(currentLocation)
		case 9:
			game.downRight(currentLocation)
			break;
		case -7:
			game.upRight(currentLocation)
			break;
		case -9:
			game.upLeft(currentLocation)
			break;
		case 14:
			game.jumpDownLeft(currentLocation)
			break;
		case -14:
			game.jumpUpRight(currentLocation)
			break;
		case 18:
			game.jumpDownRight(currentLocation)
			break;
		case -18:
			game.jumpUpLeft(currentLocation)
			break;
		case -36:
			game.jumpUpLeft(currentLocation)
			game.jumpUpLeft(currentLocation - 18)
			break;
		case -28:
			game.jumpUpRight(currentLocation)
			game.jumpUpRight(currentLocation - 14)
			break;
		case 36:
			game.jumpDownRight(currentLocation)
			game.jumpDownRight(currentLocation + 18)
			break;
		case 28:
			game.jumpDownLeft(currentLocation)
			game.jumpDownLeft(currentLocation +14)
			break;
		case 32:
			if (game.jumpDownRight(currentLocation)) {
				game.jumpDownLeft(currentLocation + 18)
			} else {
				game.jumpDownLeft(currentLocation)
				game.jumpDownRight(currentLocation + 14)
			}
			break;
		case -32:
			if (game.jumpUpRight(currentLocation)) {
				game.jumpUpLeft(currentLocation -14)
			} else {
				game.jumpUpLeft(currentLocation)
				game.jumpUpRight(currentLocation -18)
			}
			break;
	}
	if(this.hasWon()){
		return
	}
	if (this.board[intendedLocation]){
		this.board[intendedLocation].kingMe()
		this.nextTurn()
	}
}


CheckersGame.prototype.hasWon = function(){
	if (!boardInclude(this.board, "black") || !boardInclude(this.board, "red")) {
		boardInclude(this.board, "black") ? this.winner = "Black" : this.winner = "Red"
		return true
	} else {
		return false
	}
}

// doublejump


//*****************************//
boardInclude = function(board, element){
	for(var i = 0; i < board.length; i++ ){
		if (board[i] && board[i].color === element){
			return true
		}
	}
	return false
}
//*****************************//

