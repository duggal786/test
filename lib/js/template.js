deviceTemplate = '{"resourceType": "Device", "distinctIdentifier": "", "serialNumber": "", "deviceName": [ { "name": "" }, { "name": "", "type": "" } ], "type": { "coding": [ { "system": "http://snomed.info/sct", "code": "" } ]}, "patient": { "reference": "" } }'

deviceRequestTemplate = {
    "resourceType": "DeviceRequest",
    "intent": "option",
    "codeReference": {
        "reference": ""
    },
    "subject": {
        "reference": ""
    },
    "occurrenceDateTime": "",
    "occurrencePeriod": {
        "start": "",
        "end": ""
    }
}

