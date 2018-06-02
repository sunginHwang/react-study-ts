import { combineReducers } from 'redux';
import Header, { HeaderState } from './Header';

export default combineReducers({
    Header
});

export interface StoreState {
    Header: HeaderState;
}