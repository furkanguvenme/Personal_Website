import { data } from "../../data";
import { CHANGE_MODE, ENGLISH, MOD_AL, TURKISH } from "../actions/actions";

const initialState = {
  language: "",
  darkMode: false,
  myData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TURKISH:
      return { ...state, myData: { ...data.turkish }, language: "turkish" };
    case ENGLISH:
      return { ...state, myData: { ...data.english }, language: "english" };
    case CHANGE_MODE:
      if (state.darkMode) {
        return { ...state, darkMode: false };
      } else {
        return { ...state, darkMode: true };
      }
    case MOD_AL:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
