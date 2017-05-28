/*1. Find PI to the Nth Digit -
Enter a number and have the program generate PI up to that many decimal places.
Keep a limit to how far the program will go.*/

$(function() {

  // var n = parseInt(prompt('Decimals?'))
  // n = parseInt(n)
  // $(".result").html(Math.PI.toFixed(n))

  $("#button").click(function(){
      var n = $("#decimal").val();
      n = parseInt(n)
      $(".result").html("Answer: " + Math.PI.toFixed(n))
  })























 })
