/* 
https://www.w3schools.com/jquery/jquery_selectors.asp
https://www.w3schools.com/jquery/trysel.asp
https://www.w3schools.com/jquery/jquery_ref_events.asp
*/
$("#nav-1 a").on("click", function() {

    /* 
    https://www.w3schools.com/jquery/jquery_ref_html.asp

    The position() method returns the position (relative to its parent element) of the first matched element.
    This method returns an object with 2 properties; the top and left positions in pixels.

    The width() method sets or returns the width of the selected elements.
    */
    var position = $(this).position();
    var width = $(this).parent().width();


    // The css({property: value, ....}) set multiple properties and values
    $("#nav-1 .slide1").css({ opacity: 1, left: +position.left, width: width });
  });
  
  $("#nav-1 a").on("mouseover", function() {
    var position = $(this).position();
    var width = $(this).parent().width();
    
    // https://www.w3schools.com/jquery/jquery_css_classes.asp
    $("#nav-1 .slide2").css({ opacity: 1, left: +position.left, width: width }).addClass("squeeze");
  });
  
  $("#nav-1 a").on("mouseout", function() {
    $("#nav-1 .slide2").css({ opacity: 0 }).removeClass("squeeze");
  });
  
  // https://www.w3schools.com/jquery/traversing_find.asp
  var currentWidth = $("#nav-1")
    .find("li:nth-of-type(3) a")
    .parent("li")
    .width();
  var current = $("li:nth-of-type(3) a").position();

  $("#nav-1 .slide1").css({ left: +current.left, width: currentWidth });
  