import Index from "views/Index.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import BookAppointment from "../src/views/BookAppointment"
import ViewApointment from "../src/views/ViewAppointment"
import ViewMedicalHistory from "./views/ViewMedicalHistory"
import CreateMedicalHistory from "./views/CreateMedicalHistory"
import CreateUser from "./views/CreateUser"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/bookappointment",
    name: "Book Appointment",
    icon: "ni ni-planet text-blue",
    component: BookAppointment,
    layout: "/admin"
  },
  {
    path: "/viewappointment",
    name: "View Appointments",
    icon: "ni ni-pin-3 text-orange",
    component: ViewApointment,
    layout: "/admin"
  },
  {
    path: "/viewmedicalhistory",
    name: "View Medical History",
    icon: "ni ni-pin-3 text-orange",
    component: ViewMedicalHistory,
    layout: "/admin"
  },
  {
    path: "/createmedicalhistory",
    name: "Create Medical History",
    icon: "ni ni-pin-3 text-orange",
    component: CreateMedicalHistory,
    layout: "/admin"
  },
  {
    path: "/createuser",
    name: "Create User",
    icon: "ni ni-pin-3 text-orange",
    component: CreateUser,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
