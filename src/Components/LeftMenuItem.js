import React, {Component} from 'react';

class LeftMenuItem extends Component{

    constructor(){
        super();
        this.state = {
            activeItemIndex: 0,
            menuItemLeft: '-50px',
            menuItemLeftAct: '-80px'
        }
    }


    onClickItem(){

    }

    componentDidMount(){
        let activeClass = 'active_item';
        this.props.itemIndex === 0 && this.menuItem.classList.add(activeClass);

        var timeDelay = 2800 + this.props.itemIndex * 150;


        setTimeout(function() { this.setState({menuItemLeftAct: '0px'}); }.bind(this), timeDelay);

        setTimeout(function() { this.setState({menuItemLeft: '0px'}); }.bind(this), timeDelay);

    }


    render(){

        var d = this.props.itemData;
        var activeIndex = this.state.activeItemIndex;

        return(
            <div className={'menu_item'} onClick={this.onClickItem.bind(this)} ref={el => this.menuItem = el}  >
                <div className={'menu_item_content'}
                     style={{
                         left: activeIndex === this.props.itemIndex ? this.state.menuItemLeftAct : this.state.menuItemLeft
                     }}
                >
                    <div className={'menu_icon'}>
                        <img src={activeIndex === this.props.itemIndex ? d.itemIconHover : d.itemIcon} />
                    </div>
                    <div className={'menu_name'}
                    >
                        {this.props.itemData.itemName}
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftMenuItem;
