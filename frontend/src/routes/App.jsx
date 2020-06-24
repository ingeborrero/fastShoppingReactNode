import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from '../store';

import FastTheme from '../theme/FastShopping';
import Header from '../components/Header';
import ProductList from '../views/ProductList';
import ShoppingCart from '../views/ShoppingCart';

const store = Store();

const NavRoute = ({ path, component: Component }) => (
  <Route
    exact
    path={path}
    render={() => (
      <>
        <Header />
        {Component && <Component />}
      </>
    )}
  />
);

const App = () => {
    const [theme, setTheme] = React.useState(FastTheme);
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <NavRoute exact path="/" component={ProductList} />
              <NavRoute exact path="/cart" component={ShoppingCart} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
  };
  
  export default App;