import filter from './filter';
import items from './items';
import isFetching from './isFetching';
import error from './error';
import sideMenu from './sideMenu';
import { Reducer } from 'redux';
import { ApplicationState } from 'src/store';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const reducers = {
    items,
    filter,
    isFetching,
    error,
    sideMenu
};

export default reducers;