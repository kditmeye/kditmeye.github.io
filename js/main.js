/*------------------------------------------------------------------
Project:    V O U P E | Coming Soon Template
Version:    1.0
Build Date:    14/10/15
Author: TheTheme99
This is a premium product available exclusively here : http://themeforest.net/user/thetheme99/portfolio

	TABLE OF CONTENTS
	1. Superslides
    2. Typed
    3. Owl-demo
    4. Contacts Form
    5. Countdown/Time
    6. Interactive bg
-------------------------------------------------------------------*/

/* === Superslides === */
'use strict';
$('#slides').superslides({
	animation: 'fade' //Type slider animation
});

/* === Typed === */
$(function(){
  			$("#typed").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-strings'),
            typeSpeed: 150,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
          /*  callback: function(){ foo(); },*/
            resetCallback: function() { newTyped(); }
        });
  			$(".reset").on('click', function(){
  				$("#typed").typed('reset');
  			});
  		});

  	function newTyped(){ /* A new typed object */ }
 /* 	function foo(){ console.log("Callback"); }*/

$(document).ready(function() {
/* === Owl-demo === */	
/* == History content options == */	
	$("#owl-demo").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true
    });

/* === Contacts Form === */ 
var regVr22 = "<div><span style='color:#fff; padding:0; margin:0;'>Message...</span></div><br />";
$("#feedback").on('click', function(){
$("#cForm").css("display","block");
		var textform = $("#inputEmail").val();
		var postname = $("#inputName").val();
		var textArea = $("#textArea").val();
		
		$.ajax({
			type: "POST",
			url: "php/send.php", //Attach send.php
			data: {"inputEmail": textform, "inputName": postname, "textArea": textArea},
			cache: false,
			success: function(response){
		/* == Success text ==*/
		var messageResp = "<p style='color: #fff; padding:0; margin:0;'>Hello!<strong>";
		var resultStat = "</strong style='color: #ff; padding:0; margin:0;'> Your message has been sent, I will never respond you ;) !</p>";
		var oll = (messageResp + resultStat);
				if(response == 1){
				$("#inputEmail").css("border-bottom", "1px solid #464646");
				$("#loadBar").html(oll).fadeIn(4000); //Appearance of the error text
				$("#inputEmail").val("");
				$("#inputName").val("");
				$("#textArea").val("");				
				} else {
		$("#loadBar").html(response).fadeIn(5000); //Appearance success text
		$("#loadBar").html(response).fadeOut(5000);
		$("#inputEmail").css("border-bottom", "1px solid #f7153d");
		}
		}
		});
		return false;
});

/* === Countdown/Time === */
$(function() {
/* Write Your Date Here */  
$('div#time').countdown("2015/10/23", function(event) {
       var $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      $this.find('span#'+event.type).html(event.value);
      break;
      case "finished":
        $this.hide();
        break;
    }
  });
});

/* === Interactive bg === */
$("#bg").interactive_bg();
$("#bg-2").interactive_bg();
$("#bg-3").interactive_bg();


$(".owl-buttons").after("<div class='separator-3'></div>");
	
});
