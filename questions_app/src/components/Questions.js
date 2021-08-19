import React from "react";
import CheckBox from "./CheckBox";
import {useSelector, useDispatch} from "react-redux";
import {nextQuestion} from "../store/index";

function Questions() {
  const value = useSelector(state => state.currentQuestion)
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{value.question}</h4>
      <CheckBox value={value.options.A} type="checkbox"/>
      <CheckBox value={value.options.B} type="checkbox"/>
      <button onClick={() => dispatch(nextQuestion())}>Next Question</button>
    </div>
  );
}

export default Questions;