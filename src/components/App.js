import React from 'react';
import { HashRouter , Route, Link } from 'react-router-dom';

import demo01 from './demo01/Multiplication';
import demo02 from './demo02/Clock';
import demo03 from './demo03/Calculator';

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">demo01</Link></li>
            <li><Link to="/demo01">demo01</Link></li>
            <li><Link to="/demo02">demo02</Link></li>
            <li><Link to="/demo03">demo03</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={demo01} />
          <Route path="/demo01" component={demo01} />
          <Route path="/demo02" component={demo02} />
          <Route path="/demo03" component={demo03} />

        </div>
      </HashRouter>
    );
  }
}

export default App;
