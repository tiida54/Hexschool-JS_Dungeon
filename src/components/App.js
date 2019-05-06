import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import demo01 from './demo01/Multiplication';
import demo02 from './demo02/Clock';
import demo03 from './demo03/Calculator';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path={process.env.PUBLIC_URL + '/demo02'} exact component={demo02} />
      <Route path={process.env.PUBLIC_URL + '/'} component={demo01} />
      {/* <Route path={'/' + process.env.PUBLIC_URL} component={demo02} /> */}
      <Route path= '/demo03' component={demo03} />
    </Switch>
  </BrowserRouter>
);

export default App;
