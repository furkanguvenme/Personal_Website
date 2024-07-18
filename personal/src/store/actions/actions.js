export const CHANGE_MODE = "CHANGE_MODE";
export const MOD_AL = "MOD_AL";
export const DIL_AL = "DIL_AL";
export const TURKISHX = "TURKISHX";
export const ENGLISHX = "ENGLISHX";
export const DIL_DATA = "DIL_DATA";
export const SEND_DATA = "SEND_DATA";
import axios from "axios";

export const changeMode = () => {
  return { type: CHANGE_MODE };
};

export const modeAl = (boolean) => {
  return { type: MOD_AL, payload: boolean };
};

export const dilAl = (ln) => {
  return { type: DIL_AL, payload: ln };
};

export const turkishx = () => (dispatch) => {
  axios
    .get("https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/data")
    .then((res) => {
      dispatch({ type: TURKISHX, payload: res.data });
    });
};

export const englishx = () => (dispatch) => {
  axios
    .get("https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/data")
    .then((res) => {
      dispatch({ type: ENGLISHX, payload: res.data });
    });
};

export const dilData = () => (dispatch) => {
  axios
    .get("https://66911f2526c2a69f6e8e890d.mockapi.io/data/myData/data")
    .then((res) => {
      dispatch({ type: DIL_DATA, payload: res.data });
    });
};

export const sendPost = (obj) => (dispatch) => {
  axios.post("https://reqres.in/api/workintech", obj).then((res) => {
    dispatch({ type: SEND_DATA, payload: res.data });
  });
};
