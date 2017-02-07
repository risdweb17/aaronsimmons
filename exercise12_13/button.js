$(document).ready(function() {
	$(".orange").hide();
	$(".hamburger").click(function(){
       	$(".orange").slideToggle("slow");
	});
});