import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import demo01 from './demo01/Multiplication';
import demo02 from './demo02/Clock';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={demo01} />
      <Route path="/demo01" component={demo01} />
      <Route path="/demo02" component={demo02} />

    </Switch>
  </BrowserRouter>
);

export default App;
