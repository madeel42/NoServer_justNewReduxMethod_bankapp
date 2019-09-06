import React from 'react';
import Child from './component/signup';
import Login from './component/login';
import Dashboard from './component/dashboard'
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Link } from 'react-router-dom';
export default class Parent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route
              exact
              path='/'
              render={() => {
                return (
                  <div className='btnStyle'>
                    <Link to='/signup'>
                      <button>signup</button>
                    </Link>
                    <Link to='/login'>
                      <button>Login</button>
                    </Link>
                  </div>
                );
              }}
            />
            <Route path='/signup' component={Child} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
