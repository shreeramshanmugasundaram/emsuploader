import * as api from "../../api/index.js";

export const uploadNewStudentDataR = async (formData) => {
  try {
    await api
      .uploadNewStudentDataR(formData)
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
