    $("#nav-1 a").on("mouseover", function() {
    var position = $(this).position();
    var width = $(this).parent().width();
    
    // https://www.w3schools.com/jquery/jquery_css_classes.asp
    $("#nav-1 .slide2").css({ opacity: 1, left: +position.left, width: width }).addClass("squeeze");
  });
  
  $("#nav-1 a").on("mouseout", function() {
    $("#nav-1 .slide2").css({ opacity: 0 }).removeClass("squeeze");
  });
  
  // // https://www.w3schools.com/jquery/traversing_find.asp
  // var currentWidth = $("#nav-1")
  //   .find("li:nth-of-type(3) a")
  //   .parent("li")
  //   .width();
  // var current = $("li:nth-of-type(3) a").position();

  // $("#nav-1 .slide1").css({ left: +current.left, width: currentWidth });

  var nav = document.getElementById("nav-1");
  var hrefElements = nav.getElementsByTagName("a");
  var numHrefElements = hrefElements.length;
  
  function selectElement() {
    // https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
    var position = this.getBoundingClientRect();
    var slide1 = document.getElementsByClassName("slide1");

    slide1[0].style.opacity = "1";
    slide1[0].style.left = `${this.offsetLeft}px`;
    slide1[0].style.width = `${position.width}px`;
  }

  for (var i = 0; i < numHrefElements; i++) {
    hrefElements[i].addEventListener('click', selectElement, false);
  }

  