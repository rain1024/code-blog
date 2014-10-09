$(document).ready(function(){
	var buildTOC = function(){
		var array = $(".post-content > h2, h3"); 
		var content = "";
		content += "<ul>";
		var indexSection = 0;
		var indexDoc = 0;
		$(array).each(function(index, element){
			var webElement = $(element);
			// build list of toc
			if(element.localName == 'h2'){
				index = indexSection;
				componentName = "section";
				indexSection++;
			} else {
				index = indexDoc;
				componentName = "doc";
				indexDoc++;
			}
			content += _.string.sprintf("<li class='toc-%s'><a href='#%s-index-%s'>%s</a></li>",
				webElement[0].localName,
				componentName,
				index,
				webElement.text());
		});
		content += "</ul>";
		return content;
	}

	$(".toc").html(buildTOC());

	var adjustTOCSize = function(){
		$(".toc").css({"height": $(window).height() - $(".toc").position().top - 100 + "px"});
	};

	/* active */
	$(".toc ul li:first-child a").addClass("active");

	/* build section and doc wrappers */
	$(".post-content > h2").each(function(index, element){
		var sectionElement = _.string.sprintf("<div class='section-content' id='section-index-%s'></div>", index)
		$(element).nextUntil(".post-content > h2").andSelf().wrapAll(sectionElement);
	});
	$(".section-content > h3").each(function(index, element){
		var docElement = _.string.sprintf("<div class='doc-content' id='doc-index-%s'></div>", index)
		$(element).nextUntil(".section-content > h3").andSelf().wrapAll(docElement);
	});

	/* smooth scroling */
	$(function() {
	  $('.toc a[href*=#]:not([href=#])').click(function() {
		  $(".toc a").removeClass("active");
		  $(this).addClass("active", 3000, "ease");
		  var firstElement = $("#section-index-0");
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
				console.log(target.offset());
			$('.post-content').animate({
			  scrollTop: target.position().top - firstElement.position().top
			}, 1000);
		  }
	  });
	});
})

