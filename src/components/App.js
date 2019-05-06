import React from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';

import demo01 from './demo01/Multiplication';
import demo02 from './demo02/Clock';
import demo03 from './demo03/Calculator';

const App = () => (
  <HashRouter  basename='/'>
    <Switch>
      <Route path='/' exact component={demo03} />
      <Route path="/demo01" component={demo01} />
      <Route path="/demo02" component={demo02} />
      {/* <Route component={demo03} /> */}
    </Switch>
  </HashRouter >
);

export default App;
