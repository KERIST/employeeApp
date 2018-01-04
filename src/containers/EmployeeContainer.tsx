import * as React from 'react';
import { connect } from 'react-redux';

import Employee from '../components/Employee/Employee';
import { ApplicationState, Employee as ApplicationItemType } from '../store/index';
import Error from '../components/Error404';

interface ResultDataType {
    fullName: string;
    items: Array<ItemType>;
}

export interface ItemType {
    header: string;
    data: string;
}

interface PropsType{
    items: Array<ApplicationItemType>;
}

class EmployeeContainer extends React.Component<any, any> {
    //TODO: 
    constructor(props: any) {
        super(props)
    }

    getData(id: string) {
        for (let item of this.props.items) {
            if (id === item.id) {
                return item;
            }
        }
    }

    getTransformedData(id: string) {
        let data = this.getData(id);
        if(!data){
            return undefined;
        }
        let result = {
            fullName: `${data.firstName} ${data.lastName}`,
            items: [{ header: 'Rank: ', data: data.rank },
            { header: 'Room: ', data: data.room },
            { header: 'Skype: ', data: data.skype },
            { header: 'Email: ', data: data.email },
            { header: 'Birthday: ', data: data.birthday },
            { header: 'EmploymentDate', data: data.employmentDate },
            { header: 'Updated On: ', data: data.updatedOn }]
        };

        return result;
    }

    render() {
        return this.getTransformedData(this.props.match.params.id) ? <Employee data={this.getTransformedData(this.props.match.params.id)}/> :  <Error />;
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    items: state.items
});

export default connect(
    mapStateToProps
)(EmployeeContainer);