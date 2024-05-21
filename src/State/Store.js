
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";

const rootRedusers=combineReducers({
auth:authReducer,
products:customerProductReducer,
cart:cartReducer
})
export  const store=legacy_createStore(rootRedusers,applyMiddleware(thunk))