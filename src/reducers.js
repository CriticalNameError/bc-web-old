import {SET_CURRENT_USER} from './constants';

import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


export const initialState =  {
    currentUser : '',
}

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['storage'] // which reducer want to store
  };

export const manageSession = (state=initialState, action={}) => {
    switch(action.type){
        case SET_CURRENT_USER:
         return Object.assign({}, state, {currentUser: action.payload});
        default:
            return state;
    } 
}

export const rootReducer = combineReducers({
    storage: persistReducer(persistConfig, manageSession)
})