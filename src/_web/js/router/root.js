/**
 * @flow
 */

import React, { Component } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom';
import ListProduct from './components/statistical/index';
import Management from './components/admin-management/index';
import Product from './components/admin-management/item/product';
import User from './components/admin-management/item/user';
import Shop from './components/admin-management/item/shop';
import Login from './components/login-admin/index';
export default class RootRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
        <Route exact path={'/'} component={Login} />
          <Route  path={'/statistical'} component={ListProduct} />
          <Route  path={'/admin'} component={Management} />
          <Route  path={'/product'} component={Product} />
          <Route  path={'/shop'} component={Shop} />
          <Route  path={'/user'} component={User} />
        </AnimatedSwitch>
      </BrowserRouter>
    );
  }
}


