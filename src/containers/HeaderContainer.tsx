import * as React from 'react';
import { connect } from 'react-redux';

import { toggleSideMenuVisibleProperty } from '../actions/actions';

class HeaderContainer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    handlerBtnClick() {
        this.props.toggleSideMenuVisible();
    }

    render() {
        return <header className="header">
            <button className="header__menu-btn" onClick={() => { this.handlerBtnClick() }}>
                &#9776;
        </button>
        <h1 className="header__title">Employees Application</h1>
        </header>
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    toggleSideMenuVisible() {
        dispatch(toggleSideMenuVisibleProperty())
    }
});

export default connect(null, mapDispatchToProps)(HeaderContainer);