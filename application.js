var game = new CheckersGame
$(document).ready(function(){
  displayChips()
})


var displayChips = function(){
  $("td").empty()
  for(var i = 0; i < 64; i ++){
    if( game.board[i] != null ){
      $("#loc-" + i).html(game.board[i] + " .. " + i)
    }
  }
}
