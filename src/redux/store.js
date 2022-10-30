
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/auth.reducer';
import { tasksReducer } from './taskDetail/task.reducer';

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authDetails: authReducer,
    tasksDetails: tasksReducer,
})


export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))