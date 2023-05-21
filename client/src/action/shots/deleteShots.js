import * as api from "../../api/index.js";

export const deleteShots = async (formData) => {
  try {
    await api
      .deleteShots(formData)
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
