import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import TurfAuthSlice from "./TurfAuthSlice";
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        turfAuth: TurfAuthSlice
    },
});

export default store;