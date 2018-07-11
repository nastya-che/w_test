import React, {Component} from 'react';
import GalleryItem from './GalleryItem';



class GalleryBlock extends Component{


    constructor(){
        super();


    }


    render(){

        let gItems  = this.props.galleryItems;
        let gItemsArr = [];

        for(let i = 0; i < gItems.length; i++){
            gItemsArr.push(<GalleryItem
                key={`item-${i}`}
                index={`item${i+1}`}
                itemData={gItems[i]}
            />)
        }

        return(
            <div className={'gallery_block'}>
                <div className={'gallery_bg'}></div>
                <p className={'gallery_title'}><span>P</span>ortfolio</p>
                <div class="grid-container">
                    {gItemsArr}
                </div>
            </div>
        )
    }
}

export default GalleryBlock;
