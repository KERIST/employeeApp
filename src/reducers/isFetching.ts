import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actions';
import { Reducer } from 'redux';

export const reducers: Reducer<boolean> = (state: boolean = false, action: any) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return true;
        case FETCH_DATA_SUCCESS:
        case FETCH_DATA_FAILURE:
            return false;
        default:
            return state;
    }
}

export default reducers;