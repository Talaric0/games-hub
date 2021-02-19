const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};
