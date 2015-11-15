$(document).ready(function(){
  
  //builds a grid, with a built-in change-color option on mouse hover
  var build = function(s){
    //clear previous structure
    $(".wrapper").remove();
    var w = $("<div class='wrapper'></div>");
    $("button").after(w);

    //builds new structure
    var newWidth = 400/s;
    $(".box").css({"width": $newWidth+"px"});

    for(var i = 0; i<s; i++){
    var l = $("<div class='line'></div>");
    $(".wrapper").append(l);
    
      for(var count = 0; count < s; count++){
        var d = $("<div class='box'></div>");
        $(l).append(d);
      }
    }

    //modifies size of boxes based on total grid size, keeping overall size of container the same
    var $newWidth = 400/s;
    $(".box").css({"width":$newWidth+"px"});
    $(".line").css({"height":$newWidth+"px"});
    $(".box").css({"height":$newWidth+"px"});

  //makes the boxes blue when the mouse goes over them
    $(".box").hover(function(){
      $(this).addClass("blue");
  })
  }//end build function

  //initialize grid
  build(16);

  $("button").on('click', function(){
    var size = prompt("Please enter the size (# of rows) of the grid you want", 16);
    build(size);
  });


});  