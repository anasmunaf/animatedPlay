/** @format */

const AppReducer = (state, action) => {
  switch (action.type) {
    case "PLAYER":
      return { ...state, player: action.payload };
    case "TRAFFIC":
      return { ...state, traffic: action.payload };
  }
};
export default AppReducer;
