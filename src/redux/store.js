import { createStore, combineReducers } from 'redux'
import filtersRedusers from '../reducers/filters';
import pizzasRedusers from '../reducers/pizzas';


const rootRedusers = combineReducers({
   filters: filtersRedusers,
   pizzas: pizzasRedusers,

});

const store = createStore(rootRedusers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;   