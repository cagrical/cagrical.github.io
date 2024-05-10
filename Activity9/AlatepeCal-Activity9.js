$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		if(imageURL != $("#image").attr("src")){
			$("#image").hide(500, function(){
			
				$("#image").attr("src", imageURL);
				$("#caption").text(caption);

				$("#image").show(500);
			});}

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready