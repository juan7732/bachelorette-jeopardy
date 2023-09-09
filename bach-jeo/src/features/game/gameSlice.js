import { createSlice } from '@reduxjs/toolkit'
import initialState from './data.json'

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        ...initialState
    },
    reducers: {

    }
})

// export actions

// export selectors
export const selectCategories = state => state.game.Categories;
export const selectDoubleJeopardy = state => state.game.DoubleJeopardy;
export const selectQuestions = state => state.game.Questions;


// export reducer
export default gameSlice.reducer;