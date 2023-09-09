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
export const selectFinalJeopardy = state => state.game.FinalJeopardy;
export const selectQuestions = state => state.game.Questions;
export const selectQuestionRemaining = state => state.game.Questions.filter(x => !x.hasBeenAsked).length;


// export reducer
export default gameSlice.reducer;