import React, {Component} from 'react';
import LeftMenuItem from './LeftMenuItem';


class LeftMenuComponent extends Component{



    render(){

        var menuItems = [];
        var menuData = this.props.menuData;

        for (var i = 0; i < menuData.length; i++){
            menuItems.push(<LeftMenuItem itemData={menuData[i]} key={i} itemIndex={i} />);
        }



        return(
            <div className={'menu'}>
                <div className={'menu_wrapper'}>
                    {menuItems}
                </div>
            </div>

        )
    }
}


export default LeftMenuComponent;
