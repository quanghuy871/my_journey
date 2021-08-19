import {configureStore, createSlice} from "@reduxjs/toolkit";

const DUMMY_QUIZ = [
  {
    question: 'What is AngularJs?',
    answer: 'Framework',
    options: {
      A: 'Framework',
      B: 'Library',
    }
  },

  {
    question: 'What is ReactJs?',
    answer: 'Library',
    options: {
      A: 'Framework',
      B: 'Library',
    }
  },

  {
    question: 'What is Javascript?',
    answer: 'Library',
    options: {
      A: 'Language',
      B: 'Library',
    }
  }
]

const initialState = {
  questionNumber: 0,
  currentQuestion: DUMMY_QUIZ[0],
}

const questionSlice = createSlice({
  name: 'quiz',
  questionNumber: 0,
  initialState: initialState,
  reducers: {
    nextQuestion(state) { // Neu dung action parameter thi phai dung action.payload
      if (state.questionNumber + 1 < DUMMY_QUIZ.length) {
        state.questionNumber++;
        state.currentQuestion = DUMMY_QUIZ[state.questionNumber];
      }
    }
  }
});

const store = configureStore({
  reducer: questionSlice.reducer,
});

export const {nextQuestion} = questionSlice.actions;
export default store;

