import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from "../reducers/user/userSlice";

const rootReducer = combineReducers({
    user: userSlice
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})
export default store