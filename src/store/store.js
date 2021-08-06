import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { notaReducer } from '../reducers/notaReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    listaNotas: notaReducer,
    ui: uiReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)) );
