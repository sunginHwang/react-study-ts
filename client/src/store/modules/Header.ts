import { createAction, handleActions } from 'redux-actions';

const COUNT_INCREMENT = 'Header/COUNT_INCREMENT';
const COUNT_DECREMENT = 'Header/COUNT_DECREMENT';

export const actionCreators = {
    increment: createAction(COUNT_INCREMENT),
    decrement: createAction(COUNT_DECREMENT),
};

export interface HeaderState {
    count: number;
}

const initialState: HeaderState = {
    count: 0
};

export default handleActions<HeaderState>(
    {
        [COUNT_INCREMENT]: (state) => ({ count: state.count + 1 }),
        [COUNT_DECREMENT]: (state) => ({ count: state.count - 1 }),
    },
    initialState
);