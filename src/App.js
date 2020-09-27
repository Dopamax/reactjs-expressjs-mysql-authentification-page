import React from 'react';
import './App.css';
import '../src/css/bootstrap.min.css'
import  { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import PrivateRoute from './components/PrivateRoute';
import Cookies from 'js-cookie'

function App() {
 
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact isAuthenticated={Cookies.get('user')}  path="/" component={Home}/>
        {/* <Route path="/" render={()=>getSession() ?(<App to="/home"/>):(<Redirect to="/login"/>)}/> */}
       
        
      </Switch>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
