var game = new CheckersGame(checkerBoard)
// var potentials = []
$(document).ready(function(){
  displayChips()
  // $("#board td").on("click", ".potentials", moveChip)
  $("#board").on("click", "td", function(){
    console.log("hit")
    if ($(this).hasClass("potential")) {
      moveChip($(this))
    } else {
      showOptions($(this))
    }
  })
})

var moveChip = function($goToBlock){
  $("td").css("background-color", "white")

  console.log("Hit move chip!")
  // game.moveChip(parseInt($(".selected").attr("id")), parseInt($goToBlock.attr("id")));
  game.fullTurn(parseInt($(".selected").attr("id")), parseInt($goToBlock.attr("id")))
  displayChips()
  if (game.hasWon()){
    $("#winner").html("<h2>" + game.winner + " has won the game!</h2>")
  }
}

var displayChips = function(){
  $("td").empty()
  $("td").removeClass("potential")
  $("td").removeClass("selected")
  // potentials = []
  for(var i = 0; i < 64; i ++){
    var chip = game.board[i]
    if( chip != null ){
      $("#" + i).html("<div class = '"+chip.color + " chip'>" + i + "</div>")
      if (chip.kinged == true){
        $("#" + i + " .chip").addClass("kinged")
      }
    }
  }
}

function showOptions($block){
  if ($block.children().attr("class") === game.playerTurn + " chip"
    || $block.children().attr("class") === game.playerTurn + " chip kinged"){
    var location = parseInt($block.attr("id"))
    $block.addClass("selected")
    var potentials = game.board[location].potentials()
    // console.log(potentials)
    for (loc in potentials){
      if (game.board[potentials[loc][0]] == null
        && game.boardConstraints(location, potentials[loc][0])){
        $("#" + potentials[loc][0]).css("background-color", "green").addClass("potential")

      } else if (game.board[potentials[loc][1]] == null
        && game.board[potentials[loc][0]]
        && game.boardConstraints(location, potentials[loc][1])
        && game.board[potentials[loc][0]].color == game.otherPlayer){
        var singleJump = true
        //double jumps
        if (game.board[potentials[loc][2][1]] == null
          && game.board[potentials[loc][2][0]]
          && game.doubleJumpConstaints(location, potentials[loc][2][1])
          && game.board[potentials[loc][2][0]].color == game.otherPlayer) {
          $("#" + potentials[loc][1]).css("background-color", "yellow").addClass("midjump")
          $("#" + potentials[loc][2][1]).css("background-color", "green").addClass("potential")
          singleJump = false
        }

        if (game.board[potentials[loc][3][1]] == null
          && game.board[potentials[loc][3][0]]
          && game.doubleJumpConstaints(location, potentials[loc][3][1])
          && game.board[potentials[loc][3][0]].color == game.otherPlayer) {
          $("#" + potentials[loc][1]).css("background-color", "yellow").addClass("midjump")
          $("#" + potentials[loc][3][1]).css("background-color", "green").addClass("potential")
          singleJump = false
        }

        if ( singleJump ) {
          $("#" + potentials[loc][1]).css("background-color", "green").addClass("potential")
        }
      }
    }
  } else {
    console.log("something ain't working")
  }
}



