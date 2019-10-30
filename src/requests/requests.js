const axios = require("axios").default;
const baseUrl = "https://texascancercenter.appspot.com/";

function postMedicalHistory(treatment, appointmentDate, doctorId, patientId) {
  axios
    .post(baseUrl + "createMedicalHistory", {
      treatment: treatment,
      appointmentDate: appointmentDate,
      doctorId: doctorId,
      patientId: patientId
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function createAppointment(approved,doctorId,approvedDate,patientId,approverId) {
  axios
    .post(baseUrl + "createAppointment", {
      approved: approved,
      doctorId: doctorId,
      approvedDate: approvedDate,
      patientId: patientId,
      approverId: approverId
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getMedicalHistory() {
  return axios
    .get(baseUrl + "getAllMedicalHistory", {});
    
}

function getAppointments() {
  return axios
    .get(baseUrl + "getAllAppointments", {})
}

export {
  postMedicalHistory,
  createAppointment,
  getMedicalHistory,
  getAppointments
};
