$(document).ready(function() {
  $("#pic2").hide();
  $("#pic").fadeTo("slow",1);
  $("#nar2").hide();
  $("#submit1").hide();
  $("#playAgain").hide();
  $("#next").click(function() {
    $("#next").hide();
    $("#nar1").hide();
    $("#nar2").fadeTo("slow",1);
    $("#submit1").show();
  });

  answer = Math.floor(Math.random() * 300) + 1;
  console.log(answer);
  $("#submit1").on("submit", function (e) {
    e.preventDefault();
    userAnswer = $("#input1").val();

    if (userAnswer < answer) {
      $("#nar2").replaceWith("<p id='nar2' class='bodyText' align='center'>There are more mudpuppies than that. What's your next guess?</p>");
      $("#nar2").fadeTo("slow", 1);
    } else if (userAnswer > answer) {
      $("#nar2").replaceWith("<p id='nar2' class='bodyText' align='center'>There aren't that many mudpuppies. What's your next guess?</p>");
      $("#nar2").fadeTo("slow", 1);
    } else {
      $("#submit1").hide();
      $("#nar2").replaceWith("<p id='nar2' class='bodyText' align='center'>Damn, you're good! There are exactly <span>" + answer + "</span> mudpuppies in the pond. You won! Now you can jump in and catch all of them.</p>")
      $("#nar2").fadeTo("slow", 1);
      $("#pic2").show();
      $("#pic").hide();
      $("#playAgain").show();
      $("#playAgain").click(function() {
        window.location.reload(false); 
      });

    }
  });
});