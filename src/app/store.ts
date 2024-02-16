import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { dogsApiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(dogsApiSlice.middleware)) //caching
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;