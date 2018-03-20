export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const TOGGLE_SIDEMENU_VISIBLE_PROPERTY = 'TOGGLE_SIDEMENU_VISIBLE_PROPERTY';
export const CHANGE_FILTER = 'CHANGE_FILTER';
import 'isomorphic-fetch';
import { Employee } from 'src/store';

export const requestData = () => ({
    type: FETCH_DATA_REQUEST
});

export const receiveDataSuccess = (items: Array<Employee>) => ({
    type: FETCH_DATA_SUCCESS,
    items
});

export const receiveDataFailure = () => ({
    type: FETCH_DATA_FAILURE
})

export const toggleSideMenuVisibleProperty = () => {
    console.log('toggle');
    return {
        type: TOGGLE_SIDEMENU_VISIBLE_PROPERTY
    }
}

export const changeFilter = (filter: string) => ({
    type: CHANGE_FILTER,
    filter
});

export const fetchData = () => (dispatch: any) => {
    dispatch(requestData());


    return fetch('http://ita-students.azurewebsites.net/api/Employees')
        .then(responce => responce.json())
        .then(data => dispatch(receiveDataSuccess(data)))
        .catch(eror => dispatch(receiveDataFailure()))
};