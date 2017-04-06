import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/AppList';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Main from './components/MainComponent';

const store = configureStore();
//here sending empty initialstates
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                {/*<IndexRoute component={NewOrderComponent}/>
                <Route path="/pm/addnew" component="NewOrderComponent"/>
                <Route path="/pm/draft" component="DraftComponent"/>*/}
            </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);
