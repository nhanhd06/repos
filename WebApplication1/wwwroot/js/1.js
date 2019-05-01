// JavaScript Document
$(function(){
 	$(window).scroll(function(){
		var $height = $(window).scrollTop();
 		if($height > 100) {

 			$('.navbar').addClass('show');
			$('.navbar .navbar-brand').addClass('show');
		
 		}	
 		else if ($height < 100) {
			
 			$('.navbar').removeClass('show');
			$('.navbar .navbar-brand').removeClass('show');
			
			
 		}	
	});
});	


