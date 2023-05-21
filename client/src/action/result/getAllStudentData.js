import * as api from "../../api/index.js";

export const getAllStudentDataR = async (setData) => {
  try {
    await api
      .getAllStudentDataR()
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
