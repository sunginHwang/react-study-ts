import { createAction, handleActions, Action } from 'redux-actions';
import axios from 'axios';

const ASYNC_CALL = 'Content/ASYNC_CALL';
const ASYNC_CALL_PENDING = 'Content/ASYNC_CALL_LOADING';
const ASYNC_CALL_SUCCESS = 'Content/ASYNC_CALL_SUCCESS';
const ASYNC_CALL_FAILURE = 'Content/ASYNC_CALL_FAILURE';

const getPostAPI = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
};

export const actionCreators = {
    asyncCall: createAction(ASYNC_CALL, getPostAPI)
};

export type asyncdPayload = { body: string, title: string, id: number, userId: number };

export type ReduxThunkResponseParams = {
    status: number;
    statusText: string;
    request: any;
    headers: any;
    config: any;
    data: asyncdPayload;
};

export type ContentState = {
    asyncData: asyncdPayload,
    loading: boolean
};

const initialState: ContentState = {
    loading: false,
    asyncData: {
        body: '',
        title: '',
        userId: -1,
        id: -1
    },
};

export default handleActions<ContentState, any>(
    {
        [ASYNC_CALL_PENDING]: (state: ContentState, action: Action<number>): ContentState => {
            return {...state, loading: true};
        },
        [ASYNC_CALL_SUCCESS]: (state, action: Action<ReduxThunkResponseParams>): ContentState => {
            return {...state,
                        asyncData: action.payload!.data,
                        loading: false};
        },
        [ASYNC_CALL_FAILURE]: (state, action: Action<number>): ContentState => {
            return {...state, loading: false};
        },
    },
    initialState
);