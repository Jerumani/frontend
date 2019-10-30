const axios = require("axios").default;
const baseUrl = ""
function createMedicalHistory(treatment, appointmentDate, doctorId, patientId) {
  axios
    .post("", {
      treatment: req.body.treatment,
      appointmentDate: req.body.appointmentDate,
      doctorId: req.body.doctorId,
      patientId: req.body.patientId
    })
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    });
}


function createAppointment(){
    axios.post("",{

    }).then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.log(error)
    })
}

function getMedicalHistory(){
    axios.get("",{

    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })
}

function getAppointments(){
    axios.get("",{

    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })
}