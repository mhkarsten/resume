import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createMainReducer from '../js/reducer';
import { actionLoggerMW } from '../js/middleware';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
    const store = createStore(
        createMainReducer(history),
        initialState,
        compose(
            applyMiddleware(
                actionLoggerMW,
                routerMiddleware(history),
            ),
        ),
    );

    return store;
}