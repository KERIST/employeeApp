import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store/index';

interface PropsType {
    visible: boolean;
}

const PreloaderContainer = (props: PropsType) => {
    let style = {
        padding: 0,
        border: 0,
        borderRadius: 0,
        margin: 0
    }
    return <div className="ui segment" style={props.visible ? style : Object.assign({}, style, {display: 'none'})}>
        <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
        </div>
        <p></p>
    </div>
}

const mapStateToProps = (state: ApplicationState) => ({
    visible: state.isFetching
});

export default connect(
    mapStateToProps
)(PreloaderContainer);