import { combineReducers } from '@reduxjs/toolkit';
import appReducer from "../features/initialization"
const rootReducer = combineReducers({
    app: appReducer
})
export default rootReducer