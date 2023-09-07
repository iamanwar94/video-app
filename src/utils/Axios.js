import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 48,
    regionCode: "PK",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const makeApiRequest = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    if (data) return data;
  } catch (error) {
    console.log(`loading => ${url} error`, error);
  }
};
