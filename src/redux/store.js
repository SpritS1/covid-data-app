import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './dateSlice';

export default configureStore({
    reducer: {
        date: dateReducer,
    },
});
