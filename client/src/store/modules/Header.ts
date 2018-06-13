///<reference path="../../../node_modules/@types/redux-actions/index.d.ts"/>
import { createAction, handleActions, Action } from 'redux-actions';
import { List, Record } from 'immutable';

const COUNT_INCREMENT = 'Header/COUNT_INCREMENT';
const COUNT_DECREMENT = 'Header/COUNT_DECREMENT';
const COUNT_SETTING = 'Header/COUNT_SETTING';
const DEPTH_PARAM_SETTING = 'Header/DEPTH_PARAM_SETTING';

export const actionCreators = {
    increment: createAction(COUNT_INCREMENT),
    decrement: createAction(COUNT_DECREMENT),
    setting: createAction<number>(COUNT_SETTING),
    depthParamSetting: createAction<string>(DEPTH_PARAM_SETTING),
};

interface HeaderDepthJsonRecordParam {
    depthCount?: number;
    description?: string;
}

const HeaderStateParamRecord = Record({
    counts: 1,
    depthRecord : List()
});

export class HeaderState extends HeaderStateParamRecord {
    counts: number;
    depthRecord: List<HeaderDepthJsonRecordParam>;
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
        [DEPTH_PARAM_SETTING]: (state, action: Action<string>): HeaderState => {
            return <HeaderState> state.setIn(['depthRecord', 0, 'description'], action.payload);
        },
    },
    initialState
);