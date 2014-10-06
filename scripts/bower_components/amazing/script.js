$(document).ready(function(){
	var header = "<div class='amazing-header'><i id='amazing-button' class='fa fa-plus-circle'></i> amazing</div>"
	var body = "<div class='amazing-body'><div class='amazing-body-content'></div></div>"
	var content = header + body;
	$(".amazing").append(content);
});

var amazingBoxDisplayStatus = false;

$(document).on('click', '.amazing-header', function(){
	$(".amazing-header").toggleClass("amazing-header-highlight");
	if(amazingBoxDisplayStatus){
		$(".amazing-body").slideUp("slow");
		$("#amazing-button").removeClass("fa-minus-circle").addClass("fa-plus-circle");
	} else {
		$.getJSON("/scripts/bower_components/amazing/snippets/facts.json", function(facts){
			var random = Math.floor(Math.random() * facts.length);
			$(".amazing-body-content").html(facts[random]);
			$(".amazing-body").slideDown("slow", function(){
				console.log($(".amazing-body").height());
				console.log($(".amazing-body-content").height());
				var marginTop = Math.ceil(($(".amazing-body").height() - $(".amazing-body-content").height()) / 2);
				console.log(marginTop);
				$(".amazing-body-content").css("margin-top", marginTop);	
			});
			// verticval align
			$("#amazing-button").removeClass("fa-plus-circle").addClass("fa-minus-circle");
		})
	}
	amazingBoxDisplayStatus = !amazingBoxDisplayStatus;
});
