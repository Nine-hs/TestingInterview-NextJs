import { combineReducers } from "redux"
import ProductReducer from "./Products"

const Reducer = combineReducers({
    Products: ProductReducer
})

export default Reducer;

