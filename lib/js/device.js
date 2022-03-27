
const devicesearch = new FHIR.client({
  serverUrl: "https://r4.smarthealthit.org"
});

function alt(msg){
    alert(msg)
}

function getQuery(parm,val){
    var queryString = 
    parm + encodeURIComponent(":") + 
    "contains=" + val;
    return queryString
}

function devicevalidate(){
    sn=document.getElementById('serialNumber').value.trim()
    dn=document.getElementById('deviceName').value.trim()
    di=document.getElementById('distinctIdentifier').value.trim()
    var query=""
    if(sn.length!=0){
        
        query+=getQuery("udi-carrier",sn);
    }
    if(dn.length!=0){
        if(query.leangth!=0){
            query+="&"
        }
        
        query+=getQuery("device-name",dn);
    }
    if(di.length!=0){
        if(query.leangth!=0){
            query+="&"
        }
        query+=getQuery("udi-di",di);
    }
    return query
    
}


$(document).ready(function(){
    $.fn.searchDevice = function(){ 
    // alert(101)
  devicesearch.request({url:"Device?patient=" + $("#pid").val(),
  method: "Get"}
).then(
  function(result) {
    var data="<tr><th>Device ID</th><th>Patient Name</th><th>Device Name</th><th>Device Identifier</th><th>Seriab No.</th><th>Select</th></tr>"
    document.getElementById("tableDevice").innerHTML=data
    errorMsg=''
    if(result.total <= 0){
        x=confirm("no data found do you want to create new device")
        if(x){
            $.fn.myFunction(3)
        }
        return
    }
    for(let x=0;x<result.entry.length;x++){
        try{

            sn = result.entry[x].resource.serialNumber
            id = result.entry[x].resource.id
            dif = result.entry[x].resource.distinctIdentifier
            dname = result.entry[x].resource.deviceName[0].name
        }catch(err){
            errorMsg+=id+', '
            continue
        }
        data+="<tr> <td>"+id+"</td> <td>"+$("#pname").val()+"</td> <td>"+dname+"</td> <td>"+dif+"</td><td>"+sn+"</td> <td><button class='btnSelect selectDevice'>Select</button></td></tr>"
    }
    document.getElementById("tableDevice").innerHTML=data
    if(errorMsg.length >0){
        $('#error').show()
        $('#errorMsg').html('Invalid data for ID '+errorMsg.slice(0,-2))
}
    $(document).ready(function(){

        $(".selectDevice").on('click',function(){
             var currentRow=$(this).closest("tr");
             var did=currentRow.find("td:eq(0)").html();
             $(this).closest("tr").css('background-color','green');
             $(this).closest("tr").siblings().css('background-color','white');
             $("#did").val(did)
             $('#addDeviceRequest').show()
             });
    });
  })
}
});


$(document).ready(function(){
    $.fn.createDevice = async function(){ 
    //alert('You have successfully defined the function!'+val); 
	const temp = JSON.parse(deviceTemplate);
    temp.serialNumber=$("#serialNumber").val()
    temp.type.coding[0].code=$("#type").val()
    temp.distinctIdentifier=$("#distinctIdentifier").val()
    temp.deviceName[0].name=$("#deviceName").val()
    temp.patient.reference="Patient/"+ $("#pid").val()
    devicesearch.request({
            headers: {
        "Content-type": "application/json"
        },
    url: "Device",
    method: "POST",
    body: JSON.stringify(temp)
    });
	alert('Device Adding....... Please wait')
    $.fn.myFunction(2)
	}
  });



