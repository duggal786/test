$(document).ready(function(){
    $.fn.createObservation = async function(){ 
    //alert('You have successfully defined the function!'+val); 
	const temp = observationTemplate;
    temp.effectiveDateTime=new Date().toISOString() 
    temp.issued=new Date().toISOString() 
    // new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()
    temp.subject.reference="Patient/"+$("#pid").val()
    temp.device.reference="Device/"+$("#did").val()
    promis = clientsearch.request({
            headers: {
        "Content-type": "application/json"
        },
    url: "Observation",
    method: "POST",
    body: JSON.stringify(temp)
    });
    promis.then((message)=>{
      while(true){
      if(message=='fulfilled'){
        alert('request fullfiled')
        break
      }}
    })
	alert('Observation Added Sucessfully')
	}
  });
  