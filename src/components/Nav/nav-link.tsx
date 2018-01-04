import * as React from 'react';
import { Link } from 'react-router-dom';

interface PropsType {
    data: { name: string, link: string };
}

const NavLink = (props: PropsType) => {
    const { name, link } = props.data;

    return <li className="link-list__item">
        <Link to={`/employee/${link}`} className="link-list__link item">{name}</Link>
    </li>
}

export default NavLink;