import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import demo01 from './demo01/Multiplication';
import demo02 from './demo02/Clock';
import demo03 from './demo03/Calculator';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={demo03} />
      <Route path="/demo01" component={demo01} />
      <Route path="/demo02" component={demo02} />
      <Route path="/demo03" component={demo03} />

    </Switch>
  </BrowserRouter>
);

export default App;
