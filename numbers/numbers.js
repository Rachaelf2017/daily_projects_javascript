
/*1. Find PI to the Nth Digit :
Enter a number and have the program generate PI up to that many decimal places.
Keep a limit to how far the program will go.*/

$(function() {


  $("#button1").click(function(){
      var n = $("#decimal1").val();
      var n = parseInt(n)
      $(".result1").html("Answer: " + Math.PI.toFixed(n))
  })

  /*2. Find e to the Nth Digit:
    Just like the previous problem, but with e instead of PI.
    Enter a number and have the program generate e up to that many decimal places.
    Keep a limit to how far the program will go. */

  $("#button2").click(function(){
      var n = $("#decimal2").val();
      var n = parseInt(n)
      $(".result2").html("Answer: " + Math.E.toFixed(n))
  })


function fSequence(n){
var sequence = [0,1]
  for (i = 0; i < n; i++)
    sequence.push((sequence[i] + sequence[i+1]))
  return sequence;
}

  $("#button3").click(function(){
      var n = $("#f-sequence").val();
      var n = parseInt(n)
      $(".result3").html("Answer: " + fSequence(n-2))
  })























 })
