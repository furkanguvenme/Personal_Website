import {
  CHANGE_MODE,
  DIL_AL,
  ENGLISHX,
  MOD_AL,
  TURKISHX,
  DIL_DATA,
} from "../actions/actions";

const initialLanguage = localStorage.getItem("language") || "english";

const initialState = {
  language: initialLanguage,
  darkMode: false,
  myData: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      if (state.darkMode) {
        return { ...state, darkMode: false };
      } else {
        return { ...state, darkMode: true };
      }
    case DIL_AL:
      return { ...state, language: action.payload };
    case MOD_AL:
      return { ...state, darkMode: action.payload };
    case TURKISHX:
      localStorage.setItem("language", "turkish");
      return {
        ...state,
        language: "turkish",
        myData: action.payload[0].turkish,
      };
    case ENGLISHX:
      localStorage.setItem("language", "english");
      return {
        ...state,
        language: "english",
        myData: action.payload[1].english,
      };
    case DIL_DATA: {
      console.log(state.language);
      console.log(action.payload);
      const dil = localStorage.getItem("language") || "english";
      return {
        ...state,
        myData: {
          ...state.myData,
          ...(dil === "english"
            ? action.payload[1].english
            : action.payload[0].turkish),
        },
      };
    }

    default:
      return state;
  }
};
