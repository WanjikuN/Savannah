import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.isLoading;
        },
    },
});
export const { setIsLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
