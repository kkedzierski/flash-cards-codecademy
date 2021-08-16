import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice.js';
import quizzesReducer from "../features/quizzes/quizzesSlice.js";
import cardReducer from "../features/cards/cardSlice.js";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    card: cardReducer
  },
});
