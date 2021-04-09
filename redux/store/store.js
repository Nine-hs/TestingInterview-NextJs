import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import Reducer from "../reducer/index";

const middleware = [thunk]
const makeStore = () => createStore(Reducer, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore)