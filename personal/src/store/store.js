import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/reducers";
import { thunk } from "redux-thunk";

const myStore = createStore(reducer, applyMiddleware(thunk));

export default myStore;
