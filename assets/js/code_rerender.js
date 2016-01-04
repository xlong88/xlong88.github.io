$(document).ready(function(){
	$("code").text(function(index,oldContent)
	{
        //alert(oldContent);
        var str = oldContent.trim();
        if (str.startsWith('~~~'))
        {
        	var n = str.indexOf('\n')
        	var language = str.substr(3,n - 3);
        	language = language.trim();
        	$(this).addClass("language-".concat(language));
        	var ol = str.length;
        	return str.substr(n + 1,ol - 3 - n - 1);
        }
	});
});