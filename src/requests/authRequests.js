const axios = require("axios").default;
const baseUrl = "https://texascancercenter.appspot.com/";

function handleLogIn(password, email, props) {
  return axios
      .post(baseUrl + "signin", {
        username: email,
        password: password,
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        props.history.push("/client/index");
      })
      .catch(function(error) {
        console.log(error);
      });
}

function handleRegistration(firstName, middleName, lastName, phoneNumber, email, password) {
  console.log(firstName)
  return axios
      .post(baseUrl + "signup", {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
}

export {handleLogIn, handleRegistration};
