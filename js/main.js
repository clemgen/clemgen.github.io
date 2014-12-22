/*global bootstrap:true, Modernizr:true */

$( document ).ready(function() {

	$(".animateMe").children().velocity("transition.flipXIn", {duration: 600, stagger:200});
	/*$(".animateMe").click(function(){
		$(this).velocity("callout.pulse", 300);
	});*/

	$("i").hover(function(){
		$(this).velocity({scale: 0.9}, 100);
	}, function(){
		$(this).velocity("stop").velocity({scale: 1}, 100);
	});
});