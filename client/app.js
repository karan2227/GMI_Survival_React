import { render } from 'react-dom';
import css from './style/common.styl';
import {route} from './routes.js' 

render(
    route,
    document.getElementById('root')
);
