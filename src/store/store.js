import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../slices/userDetailSlice";

const store = configureStore({
    reducer: {
        userDetail: userDetailReducer,
    },
});

export default store;
