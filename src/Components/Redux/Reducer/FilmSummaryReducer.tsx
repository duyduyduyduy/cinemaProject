const initialState = {
  nameFilm: "",
  filmImg: "",
  age: "",
  Cinema: "",
  showTime: "",
  Combo: "",
  Seat: "",
  nStandardSeat: 0,
  nVIPSeat: 0,
  Sum: 0,
};
const FilmSummaryReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "GET_FILM_INFO_TO_TICKET":
      return {
        ...state,
        nameFilm: action.payload.nameFilm,
        age: action.payload.age,
        Cinema: action.payload.Cinema,
        showTime: action.payload.showTime,
        filmImg: action.payload.filmImg,
        Combo: "",
        Seat: "",
        Sum: 0,
      };
    case "CALCULATE_FINAL_SUM":
      return {
        ...state,
        Sum: action.payload,
      };
    case "GET_COMBO":
      return {
        ...state,
        Combo: action.payload,
      };
    case "UPDATE_NUM_SEAT":
      return {
        ...state,
        nVIPSeat: action.payload.VIP,
        nStandardSeat: action.payload.Standard,
      };
    case "GET_SEAT":
      return {
        ...state,
        Seat: action.payload,
      };
    default:
      return state;
  }
};
export default FilmSummaryReducer;
