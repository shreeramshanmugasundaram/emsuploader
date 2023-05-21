import * as api from "../../api/index.js";

export const deleteStudentData = async (formData) => {
  try {
    await api
      .deleteStudentData(formData)
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
