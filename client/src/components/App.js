import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" component={Main} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
      </Routes>
    </Provider>
  );
}

export default App;
