import React, {Component} from 'react';

class GalleryItem extends Component{

    constructor(){
        super();


        this.state = {
            bgPositionOnHover: 0
        };

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


        if (this.props.index === 'item5'){
            return(
                <div className={this.props.index + ' item'}
                     onMouseEnter={this.scrollEffect.bind(this)}
                     onMouseLeave={this.scrollEffect.bind(this)}
                     ref={el => this.item = el}
                >
                    <div>
                        <span className={'gallery_promo_text'}>Need a <span className={'red'}>gorgeous</span> solution?</span>
                        <button className={'gallery_promo_btn'}>Contact us</button>
                    </div>
                </div>
            )
        } else if(this.props.index === 'item11'){
            return(
                <div className={this.props.index + ' item'}
                     onMouseEnter={this.scrollEffect.bind(this)}
                     onMouseLeave={this.scrollEffect.bind(this)}
                     ref={el => this.item = el}
                >
                    <div>
                        <span className={'gallery_promo_text'}>Like some of examples?</span>
                        <span className={'gallery_promo_text'}>You can have the same!</span>
                        <span className={'gallery_promo_text'}>Just add the project to your <span className={'red'}>favorites</span></span>
                        <button className={'gallery_promo_btn'}>Call me back!</button>
                    </div>
                </div>
            )
        }
        else {
            return (
            <div className={this.props.index + ' item'}
                 onMouseEnter={this.scrollEffect.bind(this)}
                 onMouseLeave={this.scrollEffect.bind(this)}
                 ref={el => this.item = el}
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
}

export default GalleryItem;
