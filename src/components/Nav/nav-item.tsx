import * as React from 'react';

import NavLink from './nav-link';

export interface PropsType {
    itemHeader: number;
    navItems: Array<{ name: string, link: string }>;
}

const NavItem = (props: PropsType) => {

    const { itemHeader, navItems } = props;

    return <div className="nav-item nav__item">
        <strong className="nav-item__title item">{itemHeader}</strong>
        <ul className="link-list menu">
            {navItems.map((item) => (<NavLink key={item.link} data={item} />))}
        </ul>
    </div>
}

export default NavItem;