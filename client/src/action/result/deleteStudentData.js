import * as api from "../../api/index.js";

export const deleteStudentDataR = async (formData) => {
  try {
    await api
      .deleteStudentDataR(formData)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  } catch (error) {
    console.log(error);
  }
};
