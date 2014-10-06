$(document).ready(function(){
	var buildTOC = function(array){
		var content = "";
		// var content += "<div class='screen'></div>";
		// content += "<button id='screen'>Button</button>";
		content += "<h3><i class='fa fa-bars'></i> Contents</h3>";
		content += "<ul>";
		$(array).each(function(index, element){
			var webElement = $(element);
			webElement.attr("id", "toc-index-" + index);
			// build list of toc
			content += _.string.sprintf("<li class='toc-%s'><a href='#toc-index-%s'>%s</a></li>",
				webElement[0].localName,
				index,
				webElement.text());
		});
		content += "</ul>";
		$(".toc").delegate("button", "click", function(){
			var slide = $("#toc-index-2").nextUntil("#toc-index-3").andSelf();
			console.log(slide);
			$(".screen").append(slide);
			$(".screen").show();
		})
		return content;
	}

	$(".toc").html(buildTOC($(".post-content > h2, h3")));

	var adjustTOCSize = function(){
		$(".toc").css({"height": $(window).height() - $(".toc").position().top - 100 + "px"});
	};

	// adjustTOCSize();

	// $(document).scroll(function(){
	// 	if($("body").scrollTop() > $("header").height()){
	// 		$(".toc").css({"top": "0px"});
	// 	} else {
	// 		$(".toc").css({"top": "90px"});
	// 	}
	// 	adjustTOCSize();
	// });
	// $(window).resize(function(){
	// 	adjustTOCSize();
	// });
})

