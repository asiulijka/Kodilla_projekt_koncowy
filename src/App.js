import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProductsPage } from './components/views/ProductsPage/ProductsPage';
import { ProductPage } from './components/views/ProductPage/ProductPage';
import { Cart } from './components/views/Cart/Cart';
import { Order } from './components/views/Order/Order';
import { OrderSuccess } from './components/views/OrderSuccess/OrderSuccess';
import { Login } from './components/views/Login/Login';
import { Register } from './components/views/Register/Register';
import { About } from './components/views/About/About';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/products' component={ProductsPage} />
          <Route exact path='/products/:productId' component={ProductPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/orderSuccess' component={OrderSuccess} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };

