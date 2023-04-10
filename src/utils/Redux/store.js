import { configureStore } from "@reduxjs/toolkit";
import AdminAuthSlice from "./AdminAuthSlice";
import AuthSlice from "./AuthSlice";
import TurfAuthSlice from "./TurfAuthSlice";
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        turfAuth: TurfAuthSlice,
        adminAuth:AdminAuthSlice
    },
});

export default store;