import { get } from "../utils/api";

export const fetchData = () => {
  get("api")
    .then(response => console.log(response))
    .catch();
};
