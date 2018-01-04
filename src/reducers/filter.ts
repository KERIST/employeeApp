import { Reducer } from 'redux';
import { CHANGE_FILTER } from '../actions/actions';

export const reducers: Reducer<string> = (state: string = '', action: any) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default reducers;