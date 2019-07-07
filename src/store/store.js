import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const composedEnhancer = compose(applyMiddleware(thunk));

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

export { initStore };
