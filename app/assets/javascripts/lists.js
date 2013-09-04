# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
	$(".cellDelete a").fadeTo(10, 0);
	$(".cellDelete").mouseenter(function() {
		$(this).find("a").fadeTo('fast', 1);
	});
	$(".cellDelete").mouseleave(function() {
		$(this).find("a").fadeTo('fast', 0);
	});
});