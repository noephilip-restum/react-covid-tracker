import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/";

const get = async endpoint => {
  return await axios.get(`${baseUrl}${endpoint}`);
};

const getData = async endpoint => {
  const response = await axios.get(`${baseUrl}${endpoint}`);
  const countries = response.data.countries;
  const promises = Promise.all(
    countries.map(country =>
      country.iso2
        ? axios
            .get(`${baseUrl}${endpoint}/${country.iso2}`)
            .then(async res => {
              return await {
                country: country.name,
                count: res.data.confirmed.value
              };
            })
            .catch(async () => {
              return await { country: country.name, count: 0 };
            })
        : 0
    )
  );
  return promises;
};

export { get, getData };
