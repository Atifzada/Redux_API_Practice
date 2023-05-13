import { configureStore } from "@reduxjs/toolkit";
import user from './redux/Userslice'
export const store = configureStore({
    reducer: {
        users: user,
    },
});