document.addEventListener("DOMContentLoaded", function(event) {

	$(document).ready(function(){
	
		$("#expressdisablenoticearea").hide();
		document.getElementById("submitbutton").disabled = false;

     		$('#Type-of-Mandatory').change(function(){
	     
        		if($(this).val()=="Standard $3 (within 5 days delivery)") {

	      			$("#expressdisablenoticearea").hide();
	      			document.getElementById("submitbutton").disabled = false;
     			}
     
     			if($(this).val()=="Express $5 (BSB only) (within 2 days)") {

	      			$("#expressdisablenoticearea").show();
	      			document.getElementById("submitbutton").disabled = true;
     			}
		});
	});
});
