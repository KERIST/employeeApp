import * as React from 'react';

import { ItemType } from './Employee';

interface PropsType {
    item: ItemType;
}

const EmployeeDataItem = (props: PropsType) => {
    const { data, header } = props.item;

    const regExp = new RegExp('[0-9]{4}-[0-9]{2}-[0-9]{2}T');
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return <div className="employee__data-item">
        <div className="employee__header">{header}</div>
        <div className="employee__data">{regExp.test(data) ? new Date(data).toLocaleDateString("en-US", options) : data}</div>
    </div>
}

export default EmployeeDataItem;