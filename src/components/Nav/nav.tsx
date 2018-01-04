import * as React from 'react';

import NavItem from './nav-item';
import SearchContainer from '../../containers/SearchContainer';

export interface PropsType {
    items: Array<{
        itemHeader: number;
        navItems: Array<{ name: string, link: string }>;
    }>;
}

const Nav = (props: PropsType) => {
    const { items } = props;
    return <div className="nav ">
        <div className='nav__container ui vertical inverted menu top input inverted' style={{ borderRadius: 0 }}>
            <SearchContainer />
            {items.map((item) => (<NavItem key={item.itemHeader} itemHeader={item.itemHeader} navItems={item.navItems} />))}
        </div>
    </div>
}

export default Nav;