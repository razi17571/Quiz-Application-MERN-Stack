import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Questions from './Questions';
import { useSelector, useDispatch } from 'react-redux';
import { moveNextAction, movePrevAction, resetAllAction, startExamAction } from '../redux/question_reducer'; // Correct imports
import { pushResultAction } from '../redux/result_reducer'; // Correct import

export default function Quiz() {
  const history = useNavigate();
  const [check, setCheck] = useState(undefined);
  const dispatch = useDispatch();

  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);

  function handleNext() {
    if (trace < queue.length - 1) {
      dispatch(moveNextAction());
      if (result.length <= trace) {
        dispatch(pushResultAction(check));
      }
    } else {
      history.push('/result');
    }
    setCheck(undefined);
  }

  function handlePrev() {
    if (trace > 0) {
      dispatch(movePrevAction());
    }
  }

  function onChecked(check) {
    setCheck(check);
  }

  if (result.length && result.length >= queue.length) {
    history.push('/result');
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <Questions onChecked={onChecked} />
      <div className='grid'>
        {trace > 0 && <button className='btn prev' onClick={handlePrev}>Prev</button>}
        <button className='btn next' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}