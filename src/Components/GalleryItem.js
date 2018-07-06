import React, {Component} from 'react';

class GalleryItem extends Component{

    constructor(){
        super();

        this.state = {
            bgPositionOnHover: 0
        }
    }

    scrollEffect(){

        if (this.state.bgPositionOnHover === 0){
            this.setState({
                bgPositionOnHover: -300
            });
        } else {
            this.setState({
                bgPositionOnHover: 0
            });
        }

    }


    render(){

        let d = this.props.itemData;
        return(
            <div className={this.props.index + ' item'}
                 onMouseEnter={this.scrollEffect.bind(this)}
                 onMouseLeave={this.scrollEffect.bind(this)}
                >
                <div className={'img_part'}
                    style={{
                        backgroundPosition: `center ${this.state.bgPositionOnHover + 'px'}`,
                        transition: '1.5s linear'
                     }}
                >
                    <div className={'gallery_item_shadow'} />
                </div>
                <div className={'info_part'}>
                    <div className={'item_info_wrapper'}>
                        <span className={'items_name'}>"Some Name"</span>
                        <span className={'items_desc'}>Some description</span>
                    </div>
                    <div className={'item_tags'}>
                        <span>#react</span>
                        <span> #magento</span>
                        <span> #wordpress</span>
                        <span> #modile</span>
                        <span> #responsive</span>
                        <span> #html5</span>
                        <span> #design</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryItem;
