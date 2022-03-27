//adapted from the cerner smart on fhir guide. updated to utalize client.js v2 library and FHIR R4
//---------- New Code for Patient Search

document.getElementById('searchPatient').addEventListener('click', searchPatient);


const clientsearch = new FHIR.client({
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

function validate(){
    fn=document.getElementById('inputFname').value.trim()
    ln=document.getElementById('inputLname').value.trim()
    dob=document.getElementById('inputDob').value.trim()
    ssn=document.getElementById('inputSsn').value.trim()
    var query=""
    if(fn.length!=0){
        
        query+=getQuery("given",fn);
    }
    if(ln.length!=0){
        if(query.leangth!=0){
            query+="&"
        }
        
        query+=getQuery("family",ln);
    }
    if(dob.length!=0){
        if(query.leangth!=0){
            query+="&"
        }
        query+=getQuery("birthdate",dob);
    }
    if(ssn.length!=0){
        if(query.leangth!=0){
            query+="&"
        }
        query+="identifier=http://hl7.org/fhir/sid/us-ssn|"+ssn
    }
    return query
    
}

function searchPatient(){ 
    query = validate()
    if(query.length==0){
        alt("Please select at least one search criteria")
        return
    }
    
  clientsearch.request({url:"Patient?" + query,
  method: "Get"}
).then(
  function(result) {
    var data="<th>ID</th><th>FirstName</th><th>LastName</th><th>Gender</th><th>DOB</th><th>Address</th><th>Select</th>"
    document.getElementById("tbl").innerHTML=data
    if(result.total <= 0){
        alt("No Data Found for search Criteria")
        return
    }
    for(let x=0;x<result.entry.length;x++){
        id = result.entry[x].resource.id
        gender = result.entry[x].resource.gender
        dob = result.entry[x].resource.birthDate
        fname= result.entry[x].resource.name[0].given[0]
        lname= result.entry[x].resource.name[0].family
        address  =result.entry[x].resource.address[0].line+" "+result.entry[x].resource.address[0].city +" "+ result.entry[x].resource.address[0].state
        data+="<tr> <td>"+id+"</td> <td>"+fname+"</td><td>"+lname+"</td> <td>"+gender+"</td> <td>"+dob+"</td><td>"+address+"</td> <td><button class='btnSelect selectPatient'>Select</button></td></tr>"
    }
    document.getElementById("tbl").innerHTML=data
	
	
	$(document).ready(function(){
	// code to read selected table row cell data (values).
	$(".selectPatient").on('click',function(){
		 var currentRow=$(this).closest("tr");
		 var col1=currentRow.find("td:eq(0)").html();
		 var col2=currentRow.find("td:eq(1)").html();
		 var col3=currentRow.find("td:eq(2)").html();
		 var data=col1+"\n"+col2+"\n"+col3;
		 $(this).closest("tr").css('background-color','green');
		 $(this).closest("tr").siblings().css('background-color','white');
		 $("#pid").val(col1)
         $("#pname").val(col2)
         $('#nextPatient').show()
         });
});
  })
}


