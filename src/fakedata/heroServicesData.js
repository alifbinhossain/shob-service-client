import img1 from "../images/services/air-conditioner.svg";
import img2 from "../images/services/vacuum.svg";
import img3 from "../images/services/repair.svg";
import img4 from "../images/services/car icon.svg";
import img5 from "../images/services/pest icon.svg";
import img6 from "../images/services/cctv camera.svg";
import img7 from "../images/services/electrician.svg";
import img8 from "../images/services/plumbers.svg";
import img9 from "../images/services/painting.svg";
import img10 from "../images/services/carpenter.svg";
import { AC_SERVICE_DATA } from "./AcServiceData";
import { CLEANING_SERVICE_DATA } from "./CleaningServiceData";
import { CAR_CARE_SERVICE } from "./Car&CareServiceData";
const services = [
  {
    id: 1,
    title: "AC Service/Repair",
    img: img1,
    SERVICE_DATA: AC_SERVICE_DATA
  },
  {
    id: 2,
    title: "Cleaning Service",
    img: img2,
    SERVICE_DATA: CLEANING_SERVICE_DATA
  },
  {
    id: 3,
    title: "Appliance Repair",
    img: img3,
    SERVICE_DATA: []
  },
  {
    id: 4,
    title: "Car Care & Service",
    img: img4,
    SERVICE_DATA: CAR_CARE_SERVICE
  },
  {
    id: 5,
    title: "Pest Control",
    img: img5,
    SERVICE_DATA: []
  },
  {
    id: 6,
    title: "Fire & Safety",
    img: img6,
    SERVICE_DATA: []
  },
  {
    id: 7,
    title: "Electrician",
    img: img7,
    SERVICE_DATA: []
  },
  {
    id: 8,
    title: "Plumber",
    img: img8,
    SERVICE_DATA: []
  },
  {
    id: 9,
    title: "Painting & Renovation",
    img: img9,
    SERVICE_DATA: []
  },
  {
    id: 10,
    title: "Carpenter",
    img: img10,
    SERVICE_DATA: []
  },
];

export default services;
