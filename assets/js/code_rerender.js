$(document).ready(function(){
	$(".special").text(function(index,oldContent)
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
        	//alert((str.substr(n + 1,ol - 3 - n - 1)));
        	//var newContent = (str.substr(n + 1,ol - 3 - n - 1)).replace(/\n|\r|\r\n/,"<br>");
            //alert(newContent);
            var newContent = (str.substr(n + 1,ol - 3 - n - 1));
        	$(this).parent().after('<pre><code class="language-"' + 
        	                        language + '>' + newContent + '</code></pre>');
        	$(this).remove();

          	//return (str.substr(n + 1,ol - 3 - n - 1));
        }
        //alert(oldContent);
	});
});