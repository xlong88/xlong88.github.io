$(document).ready(function(){
    var filename = $(".video").text();
    $(".video").parent().append('<video width="100%" controls><source src="' + filename + '" type="video/mp4"></video>');
	$(".video").remove();
});