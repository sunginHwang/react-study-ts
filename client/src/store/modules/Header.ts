import { createAction, handleActions, Action } from 'redux-actions';
import { Record } from 'immutable';

const COUNT_INCREMENT = 'Header/COUNT_INCREMENT';
const COUNT_DECREMENT = 'Header/COUNT_DECREMENT';
const COUNT_SETTING = 'Header/COUNT_SETTING';

export const actionCreators = {
    increment: createAction(COUNT_INCREMENT),
    decrement: createAction(COUNT_DECREMENT),
    setting: createAction<number>(COUNT_SETTING)
};

const HeaderStateParamRecord = Record({
    counts: 1
});

export class HeaderState extends HeaderStateParamRecord {
    counts: number;
}

const initialState = new HeaderState();

export default handleActions<HeaderState, any>(
    {
        [COUNT_INCREMENT]: (state, action: Action<any>): HeaderState => {
            return <HeaderState> state.set('counts', state.counts + 1);
        },
        [COUNT_DECREMENT]: (state, action: Action<any>): HeaderState => {
            return <HeaderState> state.set('counts', state.counts - 1);
        },
        [COUNT_SETTING]: (state, action: Action<number>): HeaderState => {
            return <HeaderState> state.set('counts', action.payload);
        },
    },
    initialState
);