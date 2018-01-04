import * as React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav/nav';
import { ApplicationState as StoreState, Employee as StoreItemsType } from '../store/index';
import { fetchData } from '../actions/actions';
import getFiltredData from '../selectors/getFiltredData';


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
        return <Nav items={this.props.items} />
    }
}

const mapStateToProps = (store: StoreState) => {
    return {
        items: getFiltredData([...store.items], store.filter),
        filter: store.filter
    };
};

export default connect(
    mapStateToProps
)(NavConitaner);