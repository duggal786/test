$(document).ready(function(){
    $.fn.myFunction = function(val){ 
    //alert('You have successfully defined the function!'+val);
	var totalscreeen=4;
    for(n=1; n <= totalscreeen; n++){
		if(val==n)
		   {
			   $( "#Screen" + n ).show();
               $('#error').hide()
			   if(val==2){
				$.fn.searchDevice(1);
				}
		   }
		   else
		   {
			   $( "#Screen" + n ).hide();
		   }      
		}
	
	}
  });
  


(function($) {
    $(document).ready(function() {
        $.fn.myFunction(1);
		
    });
})(jQuery);
$('#nextPatient').hide()
$('#addDeviceRequest').hide()
$('#addObservation').hide()
alert(patient)
