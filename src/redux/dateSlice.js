import { createSlice } from '@reduxjs/toolkit';
import getDate from '../scripts/getDate';

export const dateSlice = createSlice({
    name: 'date',
    initialState: {
        date: getDate(-1),
    },
    reducers: {
        changeDate: (state, action) => {
            state.date = action.payload;
        },
    },
});

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;
