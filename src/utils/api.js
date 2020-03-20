import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/";

const get = async endpoint => {
  return await axios.get(`${baseUrl}${endpoint}`);
};

export { get };
