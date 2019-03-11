import { combineReducers } from 'redux';
import handleChangeReducer from './handleChange';

export const rootReducer = combineReducers({
    handleChange: handleChangeReducer
})