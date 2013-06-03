
 	   			$(document).ready(function() {
 	   				window.scrollTo(0,$('#pagewrap2').offset().top -14);
 	   			});

 	   			$(window).ready(function() {	
 	  				$('#yo').click(function() {
 	  					$('html,body').stop(true).animate({scrollTop: $("#pagewrap").offset().top}, 700);
 	  				});
 	  			});
 	 