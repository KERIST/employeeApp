import { Reducer } from "redux";
import { SideMenuType } from '../store/';
import { TOGGLE_SIDEMENU_VISIBLE_PROPERTY } from '../actions/actions';

const reducer: Reducer<SideMenuType> = (store: SideMenuType = { visible: false }, action: any) => {
    switch (action.type) {
        case TOGGLE_SIDEMENU_VISIBLE_PROPERTY:
            console.log(store.visible);
            return { visible: store.visible ? false : true };
        default:
            return store;
    }
}

export default reducer;