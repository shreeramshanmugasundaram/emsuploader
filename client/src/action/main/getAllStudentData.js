import * as api from "../../api/index.js";

export const getAllStudentData = async (setData) => {
  try {
    await api
      .getAllStudentData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  } catch (error) {
    console.log(error);
  }
};
