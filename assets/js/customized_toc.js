$(document).ready(function()
{
	$("#markdown-toc").wrap('<nav role="navigation" class="table-of-contents"></nav>');
    $("#markdown-toc").before('<h3 style="text-align: center;"> Content </h3>');
	//$("#markdown-toc").removeAttr("id");
});