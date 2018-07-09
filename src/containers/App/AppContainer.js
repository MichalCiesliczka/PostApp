import React from 'react';
import { Route, Link } from 'react-router-dom';

import Routes from '../../routes';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>

    <Route component={Routes} />
  </div>
);

export default App;
