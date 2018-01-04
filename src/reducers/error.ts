import { Reducer } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actions';

export const reducers: Reducer<boolean> = (state: boolean = false, action: any) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
        case FETCH_DATA_SUCCESS:
            return false;
        case FETCH_DATA_FAILURE:
            return true;
        default:
            return state;
    }
}

export default reducers;