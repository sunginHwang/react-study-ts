import { combineReducers } from 'redux';
import Header, { HeaderState } from './Header';
import Content, { ContentState } from './Content';

export default combineReducers({
    Header,
    Content
});

export interface StoreState {
    Header: HeaderState;
    Content: ContentState;
}