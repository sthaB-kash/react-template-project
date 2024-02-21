import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../actions/user";
import { authApi } from "../services/auth";

export const store = configureStore(
    {
        reducer: {
            user: userReducer,
            [authApi.reducerPath]: authApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware),
    }
);

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch

