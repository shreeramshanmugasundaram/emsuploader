import * as api from "../../api/index.js";

export const uploadShots = async (formData) => {
  try {
    await api
      .uploadShots(formData)
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
