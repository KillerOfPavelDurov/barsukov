

intervalId = window.setInterval(function () { 
if ( $(window).width() < 1242) {
	$("#pleft").removeAttr("id");
		$("#pright").removeAttr("id");
		$("#leftbotp").removeAttr("id");
		$("#bigtroubl").removeAttr("id");
		$("#centerbotp").removeAttr("id");
		$("#centerp").removeAttr("id");
	    $(".header").css({"font-size":"80px","padding":"10px"});
		
		
		$(".lefttopblock").css({"background-color":"rgb(0,0,0,0.5)","color":"white"});
		$(".righttopblock").css({"background-color":"rgb(0,0,0,0.5)","color":"white"});
}
}, 10);