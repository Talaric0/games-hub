const initialState = { game: {} };

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
      };
    default:
      return {
        ...state,
      };
  }
};
