import { createSlice } from "@reduxjs/toolkit";
const initialColor = localStorage.getItem("color");
const initialState = { color: initialColor };
const themeSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        changeColor: (state,actions) => {
            localStorage.setItem("color", actions.payload);
            state.color = localStorage.getItem("color");
        },
       
    }
});
export const { changeColor} = themeSlice.actions
export default themeSlice.reducer;