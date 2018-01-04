import { Employee } from '../store/index';
import { FETCH_DATA_SUCCESS } from '../actions/actions';
import { Reducer } from 'redux';

const reducers: Reducer<Array<Employee>> = (state: Array<Employee> = [], action: any) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return action.items;
        default:
            return state;
    }
}
export default reducers;