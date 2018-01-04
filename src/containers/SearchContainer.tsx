import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../store/index';
import Search from '../components/search/search';
import { changeFilter } from '../actions/actions';

interface PropsType{
    state: any;
    setFilter: (text: string) => void;
}

class SearchContainer extends React.Component<any, any> {
    //TODO: 
    constructor(props: any) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e: any) {
        let target = e.target;
        this.props.setFilter(target.value);
    }

    render() {
        return <Search onChange={this.handleOnChange} />
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    state
})

const mapDispatchToProps = (dispatch: any) => ({
    setFilter(text: string) {
        dispatch(changeFilter(text));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);