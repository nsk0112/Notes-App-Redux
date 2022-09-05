import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesList: [],
        activeColor: null,
        searchFilter: "",
    },
    reducers: {
        addNote: (state, action) => {
            state.notesList.push(action.payload);
        },

        changeActiveColor: (state, action) => {
            state.activeColor = action.payload;
        },

        changeSearchFilter: (state, action) => {
            state.searchFilter = action.payload;
        },
    },
})

export const { addNote, changeActiveColor, changeSearchFilter } = notesSlice.actions;
export default notesSlice.reducer;