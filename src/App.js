import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import demo01 from './components/demo01/Multiplication';

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={demo01} />
        {/* <Route path="/boss01" component={Boss01} /> */}

      </Switch>
    </BrowserRouter>
);

export default App;
