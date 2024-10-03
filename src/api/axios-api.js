import axios from "axios";

const axiosAPI = async (url) => {
  const data = await axios
    .get(`https://jsonplaceholder.typicode.com/${url}`)
    .then((res) => res.data);
  return data;
};

export default axiosAPI;
