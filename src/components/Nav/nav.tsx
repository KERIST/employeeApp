import * as React from 'react';

import NavItem from './nav-item';
import SearchContainer from '../../containers/SearchContainer';
import sideMenu from 'src/reducers/sideMenu';

export interface PropsType {
    items: Array<{
        itemHeader: number;
        navItems: Array<{ name: string, link: string }>;
    }>;
    visible: boolean;
    toggleVisible: () => void;
}

class SideMenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    handleSectionClick(e: any) {
        const target = e.target;
        
        if (target.tagName === 'A' || ~target.className.indexOf('side-menu_visible')) {
            console.log('hello');
            this.props.toggleVisible();
        }
    }

    render() {
        const { visible, items } = this.props;
        return <section className={visible ? 'side-menu side-menu_visible' : 'side-menu'} onClick={(e: any) => {this.handleSectionClick(e)}}>
            <div className='side-menu__container ui vertical inverted menu top input inverted' style={{ borderRadius: 0 }}>
                <SearchContainer />
                {items.map((item: any) => (<NavItem key={item.itemHeader} itemHeader={item.itemHeader} navItems={item.navItems} />))}
            </div>
        </section>
    }
}

export default SideMenu;