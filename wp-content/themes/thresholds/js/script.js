/* Author: By Association Only - http://byassociationonly.com */

$(document).ready(function(){
   
	// Drop down menu
	var expanded = $("#expanded");
	expanded.hide();
   
   	$("#open").on("click", function(){
   		$("nav").css("height","auto","min-height","35px","overflow","hidden");
   		if(expanded.is(":visible")){
   			expanded.hide();
   			$("#open").show();
   			
   		}else{
   			expanded.show();
   			$("#open").hide();
   		}
   		return false
   	});
   	
   	$("#close").on("click", function(){
   		$("nav").css("height","35px","min-height","auto","overflow","hidden");   		
   		if(expanded.is(":visible")){
   			expanded.hide();
   			$("#open").show();
   		}else{
   			expanded.show();
   		}
   		return false
   	});
   	// end drop down menu
   
   // Fancybox
   $('.fancybox-media').fancybox({
   		openEffect  : 'none',
   		closeEffect : 'none',
   		helpers : {
   			media : {}
   		}
   	});
   	
});

