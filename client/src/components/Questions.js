import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startExamAction } from '../redux/question_reducer';
import { updateResultAction } from '../redux/result_reducer';

export default function Questions() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { questions, answers, trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    dispatch(startExamAction());
  }, [dispatch]);

  function onSelect(i) {
    setChecked(i);
    dispatch(updateResultAction({ trace, checked }));
  }

  function moveToNextQuestion() {
    if (trace < questions.length - 1) {
      history.push(`/quiz/${trace + 1}`);
    } else {
      history.push('/result');
    }
  }

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions[trace]?.question}</h2>

      <ul key={questions[trace]?.id}>
        {questions[trace]?.options.map((q, i) => (
          <li key={i}>
            <input
              type='radio'
              value={false}
              name='options'
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
            <div className={`check ${result[trace] === i ? 'checked' : ''}`} />
          </li>
        ))}
      </ul>
      <button className='btn next' onClick={moveToNextQuestion}>
        {trace < questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );
}
