import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App from './components/AppList';
import Main from './components/Main.component';
import Login from './components/Login/Login.component';
import Trader from './components/Trader/Trader.component';
const store = configureStore();
//here sending empty initialstates
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}/>
            <Route path="/:trader" component={Trader}/>
            </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
