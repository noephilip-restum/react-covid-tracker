import { get, getData } from "../utils/api";

export const fetchData = () => {
  return get("api")
    .then(response => response.data)
    .catch();
};

export function fetchCountryData() {
  return getData("api/countries").then(response => response);
}
