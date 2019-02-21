import { combineReducers } from 'redux';

// Reducers
import currencyTableReducer from './currencyTableReducer';
import currencyListReducer from './currencyListReducer';

// Combine Reducers
var reducers = combineReducers({
    tableState: currencyTableReducer,
    listState: currencyListReducer
});

export default reducers;
