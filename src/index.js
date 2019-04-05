import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';

// Our Components
import Login from './js/components/login/Login';

ReactDOM.render (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById ('root')
);
registerServiceWorker ();
