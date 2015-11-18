var game = new CheckersGame(checkerBoard)
// var potentials = []
$(document).ready(function(){
  displayChips()
  // $("#board td").on("click", ".potentials", moveChip)
  $("#board td").on("click", function(){
    if ($(this).hasClass("potentials")) {
      moveChip()
    } else {
      showOptions()
    }
  })
})

var moveChip = function(){
  game.moveChip(parseInt($(".selected").attr("id")), parseInt($(this).attr("id")));
}

var displayChips = function(){
  $("td").empty()
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

function showOptions(){
  $("td").css("background-color", "white")
  if ($(this).children().attr("class") == game.playerTurn + " chip"){
    var location = parseInt($(this).attr("id"))
    $(this).addClass("selected")
    // console.log(location)
    var potentials = [[location +7, location +14], [location -7, location -14], [location +9, location +18], [location -9, location -18]]
    for (loc in potentials){
      if (game.board[potentials[loc][0]] == null && game.boardConstraints(location, potentials[loc][0])){
        $("#" + potentials[loc][0]).css("background-color", "green").addClass("potential")
      } else if (game.board[potentials[loc][1]] == null
        && game.boardConstraints(location, potentials[loc][1])
        && game.board[potentials[loc][0]] == game.otherPlayer){
        $("#" + potentials[loc][1]).css("background-color", "green").addClass("potential")
      }
    }
  } else {
    console.log("Not Hit!")
  }
}
