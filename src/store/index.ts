import { createStore, applyMiddleware, compose, Dispatch } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers/index';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
export interface Employee {
    id: string,
    firstName: string,
    birthday: string,
    deptId: number,
    domenName: string,
    email: string,
    employmentDate: string,
    lastName: string,
    middleName: string | any,
    phone: string,
    profileId: number,
    rank: string,
    room: string,
    skype: string,
    updatedOn: string,
    createdOn: string
}

export interface SideMenuType{
    visible: boolean;
}

export interface ApplicationState {
    items: Array<Employee>;
    filter: string;
    isFetching: boolean;
    error: boolean;
    sideMenu: SideMenuType;
}

export const history = createHistory();

const initalState: ApplicationState = { items: [], filter: '', isFetching: false, error: false, sideMenu: {visible: false} };

const middleware = [thunk, logger, routerMiddleware(history)];
console.log(reducers);
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    initalState,
    applyMiddleware(...middleware)
);

export default store;