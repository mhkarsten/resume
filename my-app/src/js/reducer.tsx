import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createMainReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    
});

export default createMainReducer;