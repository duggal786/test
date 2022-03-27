$(document).ready(function(){
    $.fn.createDeviceRequest = function(){ 
    //alert('You have successfully defined the function!'+val); 
	const temp = deviceRequestTemplate;
    temp.intent=$("#drintent").val()
    temp.occurrencePeriod.start=new Date($("#drstartDate").val()).toISOString()
    temp.occurrencePeriod.end=new Date($("#drendDate").val()).toISOString()
    temp.occurrenceDateTime=new Date().toISOString() 
    // new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
    temp.subject.reference="Patient/"+$("#pid").val()
    temp.codeReference.reference="Device/"+$("#did").val()
    promis = clientsearch.request({
            headers: {
        "Content-type": "application/json"
        },
    url: "DeviceRequest",
    method: "POST",
    body: JSON.stringify(temp)
    });
    $('#addObservation').show()
    $.fn.myFunction(2)
	}
  });