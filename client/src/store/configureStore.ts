import modules from './modules';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {

    const customizedPromiseMiddleware = promiseMiddleware({
        promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
    });

    const store = createStore(
        modules,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            thunk,
            customizedPromiseMiddleware
        )
    );
    return store;
}