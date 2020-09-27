import  { Route, Redirect } from 'react-router-dom';
import React  from 'react';
import Cookies from 'js-cookie'
function PrivateRoute({ component: Component,isAuthenticated, ...rest }) {
   
    //const jwt = Cookies.get('__session')
  var auth=Cookies.get('user')
  
  console.log("auth:"+auth)
    return (
      
      <Route
        {...rest}
        render={props =>
          auth==='true'? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;