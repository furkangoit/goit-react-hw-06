import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    items: [],

};

export const contactsSlice = createSlice({
    initialState,
    name: "contact",
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
        loadContacts: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { addContact, deleteContact, loadContacts } =
    contactsSlice.actions;
export default contactsSlice.reducer;