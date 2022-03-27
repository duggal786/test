# Smart server URL

## Asked API URL

#### 1) We will get the patient id from first screen after searching for the patient
```html
    https://r4.smarthealthit.org/Patient/< Patient ID >

    # Example  
    https://r4.smarthealthit.org/Patient/6234b038-fa0d-476f-b373-6c22de018cf7
```

#### 2) We will get Device ID from second screen i.e. screen which we get after clicking on Next button 
```html
    https://r4.smarthealthit.org/Device/< Device ID >
    # Example
    https://r4.smarthealthit.org/Device/1376692
```

#### 3) To get all the device request associated with provided devie
```html
    https://r4.smarthealthit.org/DeviceRequest?device=< Device ID >
    # Example
    https://r4.smarthealthit.org/DeviceRequest?device=1376692
```

#### 4) To get all the observations added wrt deviceID
```html
    https://r4.smarthealthit.org/Observation?device=< Device ID>
    # Example
    https://r4.smarthealthit.org/Observation?device=1376770
```

#### 5) To get all the observation added wrt PatientID
```html
    https://r4.smarthealthit.org/Observation?patient=< Patient ID >
    # Example
    https://r4.smarthealthit.org/Observation?patient=6234b038-fa0d-476f-b373-6c22de018cf7
```

## Workflow
    1) We need to run main file on first place
    2) We will be presented with patient search screen where we can search for patient
    3) On same screen table will be populated on which we need to select on of patient using select button
    4) Once we select the patient the selected row will be highlited and next button will be enabled
    5) Once we click on next we will land on device page where all the existing associated devices will be displed
    6) We can add new device on that screen or can select any existing devide by clicking on select
    7) Once we click on select Add DEvice Request button will be enabled
    8) By clicking on Add device Request we can add a device request for selected device
    9) Once we created a device request Add Observation button will be enabled which can be used for adding observation

## Notes
    1) We can get all the required detail from the desplaied table in app.
    2) we are using smarthealth server for this.
    3) Server take time to responde back after adding data and sometimes it is near a minute.
    4) App is scoped arround selected patient and to reset all the detail we can refresh the app or we can navigate to patient screen and search for other patient
    5) If there is need to change observation Template just copy the json in observation_template.js
    6) Do no delete or change the level of existing components in observation template as it might invalidate the json. Instead simply add the new block after device by comma seprated (Json format)
