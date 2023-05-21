import * as api from "../../api/index.js";

export const uploadNewStudentData = async (formData) => {
  try {
    await api
      .uploadNewStudentData(formData)
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
