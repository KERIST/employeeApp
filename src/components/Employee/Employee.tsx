import * as React from 'react';

import EmployeeDataItem from './EmployeeDataItem';

export interface PropsType{
    data: {
        fullName: string;
        items: Array<ItemType>;
    };
}

export interface ItemType{
    header: string;
    data: string;
}

const Employee: any = (props: PropsType) => {

    const {fullName, items} = props.data;    

    return <div className="employee">
        <strong className="employee__name ui huge header">{fullName}</strong>
        <div className="employee__information">
            {items.map((item: ItemType) => <EmployeeDataItem key={item.header} item={item}/>)}
        </div>
    </div>
}

export default Employee;