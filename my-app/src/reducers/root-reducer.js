import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducers from './reducers.js';

const Reducers = combineReducers({
    reducers,
    routing: routerReducer
});

export default Reducers;
