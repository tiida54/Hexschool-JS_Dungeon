import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import demo01 from './demo01/Multiplication';
import demo02 from './demo02/Clock';
import demo03 from './demo03/Calculator';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/demo02' exact component={demo02} />
      <Route path='/demo01' exact component={demo01} />
      {/* <Route path={'/' + process.env.PUBLIC_URL} component={demo02} /> */}
      <Route component={demo03} />
    </Switch>
  </BrowserRouter>
);

export default App;
