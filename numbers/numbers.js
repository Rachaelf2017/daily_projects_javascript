
$(function() {

/*1. Find PI to the Nth Digit :
    Enter a number and have the program generate PI up to that many decimal places.
    Keep a limit to how far the program will go.*/


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
      var n = parseInt($("#decimal2").val())
      $(".result2").html("Answer: " + Math.E.toFixed(n))
  })

/* 3. Enter a number and have the program generate the
      Fibonacci sequence to that number or to the Nth number (next number in the sequence
      is the sum of the two previous numbers). */

function fSequence(n){
var sequence = [0,1]
  for (i = 0; i < n; i++)
    sequence.push((sequence[i] + sequence[i+1]))
  return sequence
}

  $("#button3").click(function(){
      var n = parseInt($("#f-sequence").val())
      $(".result3").html("Answer: " + fSequence(n-2))
  })

/*4. Prime Factorization - Have the user enter a number and
    find all Prime Factors (if there are any) and display them. */

  function factor(n) {
    var factors = []
    for (i = 0; i <=n; i++)
      if (n%i == 0)
        factors.push(i)
    return factors
  }

  $("#button4").click(function() {
    var n = parseInt($("#number").val())
    $(".result4").html("Answer: " + factor(n))
  })


/* 5. Next Prime Number -
    Have the program find prime numbers until the user chooses
    to stop asking for the next one. */

  $("#button5").click(function() {
    var count = 1;
    var n = parseInt($("#next").val())
    $(".result5").html("Answer: " + factor(n)[0])


  $("#button5next").click(function() {
      count = count +1
      console.log(count)
    $(".result5").html("Answer: " + factor(n).slice(0,count))

  })
})























 })
