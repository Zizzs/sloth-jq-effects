$(document).ready(function() {
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("#header1").fadeToggle();
  });
  $(".clickable").click(function() {
    $("#show").slideToggle();
    $("#hide").slideToggle();
  });
  $("#clickable1").click(function() {
    $("#fadeJS").fadeToggle();
  });
  $("#clickable2").click(function() {
    $("#fadeOp").fadeToggle();
  });
  $("#clickable3").click(function() {
    $("#fadeVar").fadeToggle();
  });
  $("#clickable4").click(function() {
    $("#fadeVarN").fadeToggle();
  });
  $("#clickable5").click(function() {
    $("#fadeFu").fadeToggle();
  });
  $("#clickable6").click(function() {
    $("#fadeMe").fadeToggle();
  });
  $("#clickable7").click(function() {
    $("#fadePa").fadeToggle();
  });
  $("#clickable8").click(function() {
    $("#fadeRe").fadeToggle();
  });
  $("#clickable9").click(function() {
    $("#fadeCm").fadeToggle();
  });
  $("#clickable10").click(function() {
    $("#fadeSt").fadeToggle();
  });
  $("#clickable11").click(function() {
    $("#fadeBo").fadeToggle();
  });
  $("#clickable12").click(function() {
    $("#fadeUn").fadeToggle();
  });
  $("#clickable13").click(function() {
    $("#fadeNaN").fadeToggle();
  });
  $("#clickable14").click(function() {
    $("#fadeEs").fadeToggle();
  });
  $("#clickable15").click(function() {
    $("#fadeAl").fadeToggle();
  });
  $("#clickable16").click(function() {
    $("#fadeCo").fadeToggle();
  });
  $("#clickable17").click(function() {
    $("#fadeJQ").fadeToggle();
  });
  $("#clickable18").click(function() {
    $("#fadeAtt").fadeToggle();
  });
  $("#clickable19").click(function() {
    $("#fadeArg").fadeToggle();
  });
});
