import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

export const filtersSlice = createSlice({
    initialState,
    name: "filter",
    reducers: {
        filterContact: (state, actions) => {
            state.name = actions.payload;
        },
    },
});

export const { filterContact } = filtersSlice.actions;
export default filtersSlice.reducer;