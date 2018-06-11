///<reference path="../../../node_modules/@types/redux-actions/index.d.ts"/>
import { createAction, handleActions, Action } from 'redux-actions';
import { List, Record } from 'immutable';
import axios from 'axios';

const COUNT_INCREMENT = 'Header/COUNT_INCREMENT';
const COUNT_DECREMENT = 'Header/COUNT_DECREMENT';
const COUNT_SETTING = 'Header/COUNT_SETTING';
const DEPTH_PARAM_SETTING = 'Header/DEPTH_PARAM_SETTING';
const ASYNC_CALL = 'Header/ASYNC_CALL';
const ASYNC_CALL_PENDING = 'Header/ASYNC_CALL_LOADING';
const ASYNC_CALL_SUCCESS = 'Header/ASYNC_CALL_SUCCESS';
const ASYNC_CALL_FAILURE = 'Header/ASYNC_CALL_FAILURE';

const getPostAPI = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
};

export const actionCreators = {
    increment: createAction(COUNT_INCREMENT),
    decrement: createAction(COUNT_DECREMENT),
    setting: createAction<number>(COUNT_SETTING),
    depthParamSetting: createAction<string>(DEPTH_PARAM_SETTING),
    async_call: createAction<any>(ASYNC_CALL, getPostAPI)
};

/*
const HeaderDepthJsonRecord = Record({
    depthCount: 0,
    description: '32'
});
*/

interface HeaderDepthJsonRecordParam {
    depthCount?: number;
    description?: string;
}

export class ReduxThunkResponseParams {
    status: number;
    statusText: string;
    request: any;
    headers: any;
    config: any;
    data: AsyncResponseParam;
}

export class AsyncResponseParam {
    body: string;
    id: number;
    title: string;
    userId: number;
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
        [ASYNC_CALL]: (state, action: Action<number>): HeaderState => {
            return <HeaderState> state.set('counts', action.payload);
        },
        [ASYNC_CALL_PENDING]: (state, action: Action<number>): HeaderState => {
            return <HeaderState> state.set('counts', 300);
        },
        [ASYNC_CALL_SUCCESS]: (state, action: Action<ReduxThunkResponseParams>): HeaderState => {
            return <HeaderState> state.set('counts', action.payload!.data.id);
        },
        [ASYNC_CALL_FAILURE]: (state, action: Action<number>): HeaderState => {
            return <HeaderState> state.set('counts', 404);
        },
    },
    initialState
);