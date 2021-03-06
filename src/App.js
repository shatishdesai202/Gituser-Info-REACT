import React from 'react';
import './App.css';

// CSS 
import 'bootstrap/dist/css/bootstrap.min.css';

// ROUTING
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

//Component
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import Error from './Component/Error';

import PrivateRoute from './Component/PrivateRoute'
import AuthWrapper from './Component/AuthWrapper'

function App() {
 return (
    <div>
      <AuthWrapper>

      <Router>

        <Switch>
      
          <PrivateRoute path="/" exact={true}>
            <Dashboard> </Dashboard>
          </PrivateRoute>
      
          <Route path="/login" exact={true}>
            <Login></Login>
          </Route>

          <Route path="*" >
            <Error></Error>
          </Route>

        </Switch>
      
      </Router>
      </AuthWrapper>
    
    </div>
  )
}

export default App
