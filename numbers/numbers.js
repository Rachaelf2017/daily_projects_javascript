/*1. Find PI to the Nth Digit -
Enter a number and have the program generate PI up to that many decimal places.
Keep a limit to how far the program will go.*/

$(function() {


  $("#button1").click(function(){
      var n = $("#decimal1").val();
      n = parseInt(n)
      $(".result1").html("Answer: " + Math.PI.toFixed(n))
  })

  $("#button2").click(function(){
      var m = $("#decimal2").val();
      m = parseInt(m)
      $(".result2").html("Answer: " + Math.E.toFixed(m))
  })























 })
