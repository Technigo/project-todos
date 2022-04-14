import { createStore, compose } from "redux";
import rootReducer from './reducer';
import persistState from 'redux-localstorage';

const enhancer = compose(persistState());

export default createStore(rootReducer, enhancer);
