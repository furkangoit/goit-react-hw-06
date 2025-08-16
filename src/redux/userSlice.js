import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: {
        name: "",
        id: "",
        phone: "",
    }
}

export const filtersSlice = createSlice({
    initialState,
    name: "users",
    reducers: {
        filterContact: (state, actions) => {
            state.filters.name = actions.payload;
        }


    }
})

export const { filterContact } = filtersSlice.actions
export default userSlice.reducer