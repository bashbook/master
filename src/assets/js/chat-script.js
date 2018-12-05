$(function(){
    $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });
	
})

$(function(){
    $(".heading-dot").click(function() {
      $(".side-three").css({
		"right": "-50%"
      });
	  $("#conversation").css({
		  "width" :"50%",
		"right": "0%"
      });
	  
    });

    $(".newMessage-back").click(function() {
      $(".side-three").css({
        "right": "-100%"
      });
	  $("#conversation").css({
		  "width" :"100%"
      });
    });
	
})
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});



