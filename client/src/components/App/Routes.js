import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NProgress from 'nprogress';
import { Home } from '../index';

// Display a progress bar between route transitions
NProgress.configure({
  template: `
    <div class="bar" role="bar">
      <dt></dt>
      <dd></dd>
    </div>
  `,
});

const routes = [
  { path: '/',
    exact: true,
    component: Home,
  },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class Routes extends Component {

  render() {
    return (
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    );
  }
}

export default Routes;
