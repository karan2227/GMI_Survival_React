
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App,{myApp} from './components/AppList';
import Main from './components/Main.component';
import Login from './components/Login/Login.component';
import Chart from './components/Trader/Chart.component';
import Trader from './components/Trader/Trader.component';

import Table from  './components/Trader/Table.component';


const store = configureStore();
//here sending empty initialstates
render(
    <Provider store={store}>
          <Router history={browserHistory}>
            <Router path="/" component={App}>
                <IndexRoute component={Login}/>
            </Router>
            <Router path="/trader" component={myApp}>
                <IndexRoute component={Table}/>
            </Router>
    </Router>
    </Provider>,
    document.getElementById('root')
);


//  <Provider store={store}>
//         <Router history={browserHistory}>
//             <Router path="/" component={App}>
//                 <IndexRoute component={Login}> </IndexRoute>
             
//                     <Route path="/trader" component = {Trader} >
//                         <IndexRoute  component={Table}> </IndexRoute>
//                     </Route>
             
//             </Router>
//              <Router path="/users" component={ContainerApp}>
//                 <IndexRoute component={Table}> </IndexRoute>
             
                
             
//             </Router>
//         </Router>
//     </Provider>