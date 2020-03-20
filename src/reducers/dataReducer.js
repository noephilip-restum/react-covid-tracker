export const initialState = {
  confirmed: 0,
  deaths: 0,
  recovered: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIELD": {
      return {
        ...state,
        formState: { ...state.formState, [action.fieldName]: action.payload }
      };
    }
    case "VALIDATE": {
      return {
        ...state,
        errors: action.payload.errors,
        isLoading: action.payload.isLoading
      };
    }
    case "RESET": {
      return action.payload;
    }

    default:
      return state;
  }
};
