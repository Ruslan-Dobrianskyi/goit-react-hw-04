import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page) => {
  const response = await axios.get("search/photos/", {
    params: {
      query,
      page,
      per_page: 10,
      client_id: "R2c-p86IjfGetT4m0PuqsN3df4XflILLvPeA0WRhREs",
    },
  });
  return response.data;
};
