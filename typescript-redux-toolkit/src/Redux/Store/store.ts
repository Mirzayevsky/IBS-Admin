import { configureStore } from '@reduxjs/toolkit'
import getReducer from "../Modules/getReducer";
import postReducer from "../Modules/postReducer";
import deleteReducer from "../Modules/deleteReducer";
import logger from "redux-logger";

const store = configureStore({
    reducer:{
        getReducer,
        postReducer,
        deleteReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export  default store;