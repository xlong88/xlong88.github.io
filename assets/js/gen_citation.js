$(document).ready(function(){
	var citeStr = "";
	$(".cite").each(function(){
        var contents = $(this).text();
        var n = contents.indexOf("@"); 
        $(this).text(contents.substr(0,n) + " ");
        citeStr += contents.substr(n + 1) + ";";
	});
	citeStr = citeStr.substr(0,citeStr.length - 1);
	var url = "http://localhost/test-bibtexjs/phpBibLib/example/myexample.php";
    var data = {"cite": citeStr};
	$.post(url,data,function(data)
	{
		//console.log(data['cite']);
		//console.log(data['ref']);
		var cites = (data['cite']).split("@@");
		var index = 0;
		$(".cite").each(function()
		{
            $(this).after(cites[index]);
            index = index + 1;
		});

		$(".reference").after("<h2>Reference</h2>" + data['ref']);
		$(".reference").remove();
		$(".citation").qtip({
			content:{
				title: "Title",
				text: $(this).attr("title")
			},
			style: {
				classes: 'qtip-green qtip-rounded'
			}
		});
	});

});