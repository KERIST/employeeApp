import * as React from 'react';
import { connect } from 'react-redux';

import SideMenu from '../components/nav/nav';
import { ApplicationState as StoreState, Employee as StoreItemsType } from '../store/index';
import { fetchData } from '../actions/actions';
import getFiltredData from '../selectors/getFiltredData';
import {toggleSideMenuVisibleProperty} from '../actions/actions';

export interface PropsType {
    items: Array<StoreItemsType>;
    filter: string;
    dispatch: any;
}

class NavConitaner extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return <SideMenu items={this.props.items} visible={this.props.visible} toggleVisible={this.props.toggleVisible}/>
    }
}

const mapStateToProps = (store: StoreState) => {
    return {
        items: getFiltredData([...store.items], store.filter),
        filter: store.filter,
        visible: store.sideMenu.visible
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    toggleVisible() {
        dispatch(toggleSideMenuVisibleProperty());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavConitaner);