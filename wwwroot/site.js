jQuery(document).ready(function() {

	$('.walkthroughBox .bottom').hide();
	
	$('.walkthroughBox .top a').bind('click', function(e) {
		var boxNumber = $(this).attr("rel");
		
		//alert("clicked");
		
		// if the box is open
		if($('#' + boxNumber + ' .top').attr("id") == "open") 
		{
			//alert("is open");
			$('#' + boxNumber + ' .bottom').slideUp(800);
			$('#' + boxNumber + ' .top a').text("Show");
			$('#' + boxNumber + ' .top a').css("background-position: right -26px");
			$('#' + boxNumber + ' .top').attr("id","closed");
		}
		else
		{
			$('#' + boxNumber + ' .bottom').slideDown(800);
			$('#' + boxNumber + ' .top a').text("Hide");
			$('#' + boxNumber + ' .top a').css("background-position: right 3px");
			$('#' + boxNumber + ' .top').attr("id","open");
		}
		
		e.preventDefault();
	});
	
	$('.walkthroughBox .bottom a').bind('click', function(e) {
		var boxNumber = $(this).attr("rel");
		$('#' + boxNumber + ' .top a').click();
		e.preventDefault();
	});
});