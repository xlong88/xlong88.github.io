$(document).ready(function(){
    var filename = $(".video").text();
    $(".video").parent().append('<video width="320" height="240" controls><source src="' + filename + '" type="video/mp4"></video>');
	$(".video").remove();
});