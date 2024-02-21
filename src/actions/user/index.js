import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    name: "Bikash Shrestha",
    email: "bikash.shrestha@kotuko.it",
    accessToken: "",
    refreshToken: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        isLoggedIn: (state) => {
            const token = localStorage.getItem("token");
            if (!!token) {
                state.isLoggedIn = true;
                state.accessToken = token;
            }
        },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            localStorage.setItem("token", action.payload.access_token);
            window.location.href = "/";
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem("token");
        }
        // incrementByAmount: (state, action) => state.value += action.payload,
    }
});

export const { login, logout, isLoggedIn } = userSlice.actions;

export default userSlice.reducer;