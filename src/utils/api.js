import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      params,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
