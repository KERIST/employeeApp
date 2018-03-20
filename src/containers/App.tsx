import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import EmployeeContainer from './EmployeeContainer';
import { fetchData } from '../actions/actions';
import { ApplicationState } from '../store/index';
import SideMenuContainer from './SideMenuContainer';
import Promo from '../components/promo';
import Error404 from '../components/Error404';
import PreloaderContaier from './PreloaderContaier';
import HeaderContaier from './HeaderContainer';
export interface PropsType {
    fetchData: () => void;
    state: ApplicationState;
}

class App extends React.Component<any, any> {
    //TODO: add type
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    public render() {
        return <div className="application">
            <HeaderContaier />
            <SideMenuContainer />            
            <main className="content">
                <Switch>
                    <Route exact path='/' component={Promo} />
                    <Route exact path='/employee/' component={Promo} />
                    <Route path='/employee/:id' component={EmployeeContainer} />
                    <Route path='*' component={Error404} />
                </Switch>
            </main>
            <PreloaderContaier />            
        </div>;
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchData() {
        dispatch(fetchData());
    }
});

interface Props {
    fetchData: () => void;
    match: any;
    location: any;
    history: any;

}

type OwnProps = RouteComponentProps<{}>;

type StateToProps = any;

type DispatchToProps = any;

export const AppContainer = withRouter(connect<StateToProps, DispatchToProps, OwnProps>(null, mapDispatchToProps)(App));

export default AppContainer;