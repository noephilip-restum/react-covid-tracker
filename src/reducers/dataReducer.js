export const initialState = {
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  lastUpdate: "N/A",
  countries: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT": {
      return {
        ...state,
        confirmed: action.data.confirmed.value,
        deaths: action.data.deaths.value,
        recovered: action.data.recovered.value,
        lastUpdate: action.data.lastUpdate
      };
    }
    case "COUNTRIES": {
      return { ...state, countries: action.data };
    }

    default:
      return state;
  }
};
