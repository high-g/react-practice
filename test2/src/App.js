import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Top from './pages/top'
import Test1 from './pages/test1'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/test1' component={Test1} />
      </Switch>
    </div>
  );
}

export default App;
