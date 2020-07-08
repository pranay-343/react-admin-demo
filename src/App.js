import React from 'react';
import './App.css';
import Root from "./root";
import Content from "./content";
import UserDetails from "./user-details";
import UserList from "./user-list";
import { Route, Router, IndexRoute } from "react-router";
import { browserHistory } from 'react-router';
import Login from './login'

function App() {
  return (
      <Router history={browserHistory}>
          <Route path={"login"} component={Login} />
          <Route path={"/"} component={Root} >
              <IndexRoute component={Content} />
              <Route path={"user-details"} component={UserDetails} />
              <Route path={"user-list"} component={UserList} />
          </Route>
      </Router>

  );
}

export default App;
