import { render } from 'react-dom';
import css from './style/common.styl';
import {route} from './routes.js' 

import App from './components/AppList';
import Main from './components/Main.component';
import Login from './components/Login/Login.component';
import Chart from './components/Trader/Chart.component';
import Trader from './components/Trader/Trader.component';

var injectTapEventPlugin=require("react-tap-event-plugin");
const store = configureStore();
//here sending empty initialstates
injectTapEventPlugin();

render(
    route,
    document.getElementById('root')
);
