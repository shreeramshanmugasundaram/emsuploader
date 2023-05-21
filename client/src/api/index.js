import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/" });

export const uploadNewStudentData = (formData) =>
  API.post("/9970116791/mainpage", formData);

export const getAllStudentData = () => API.get("/9970116791/mainpage");

export const deleteStudentData = (formData) =>
  API.post("/9970116791/mainpage/delete", formData);

// Result Page
export const uploadNewStudentDataR = (formData) =>
  API.post("/9970116791/resultpage", formData);
export const getAllStudentDataR = () => API.get("/9970116791/resultpage");
export const deleteStudentDataR = (formData) =>
  API.post("/9970116791/resultpage/delete", formData);

// Shots Page
export const uploadShots = (formData) =>
  API.post("/9970116791/shots", formData);
export const getAllShots = () => API.get("/9970116791/shots");
export const deleteShots = (formData) =>
  API.post("/9970116791/shots/delete", formData);
