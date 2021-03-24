import {SET_CURRENT_USER} from './constants';

export const SetCurrentUser = (currentUser) => ({
    type: 'SET_CURRENT_USER',
    payload: currentUser
})