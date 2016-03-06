$(document).ready(function(){
    var rep = $(".forkme").text();
    $(".forkme").parent().parent().append('<a class="github-fork-ribbon" href="' + rep + '" title="Fork me on GitHub">Fork me on GitHub</a>');
	$(".forme").remove();
});