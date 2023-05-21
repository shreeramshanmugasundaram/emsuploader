import * as api from "../../api/index.js";

export const getAllShots = async (setData) => {
  try {
    await api
      .getAllShots()
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
