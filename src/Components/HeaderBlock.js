import React, {Component} from 'react';
import headerBg from '../styles/img/header_bg.jpg';
import mainLogo from '../styles/img/main_logo.png';
import grayArrow from '../styles/img/grayArrow.png';
require('animate.css');

class HeaderBlock extends Component{

    constructor(){
        super();


        var bottomPosition = window.innerHeight + 'px';

        this.state = {
            width: '5px',
            height: '5px',
            botP: bottomPosition,
            botP2: bottomPosition,
            heightP: '300px',
            font: '10px',
            font2: '10px',
            lHeight: '300px',
            lHeight2: '300px',
            grayLinePos: '-400px',
            redLinePos: '-470px',
            btnOpacity: '0',
            btnHeight: '0px',
            btnOpacity1: '0',
            btnHeight1: '0px'

        }
    }

    componentDidMount(){
        setTimeout(function() { this.next(); }.bind(this), 600);
        console.log(window.innerHeight);
    }

    next(){
        this.setState({
            botP: '455px'
        });

        setTimeout(function() { this.setState({botP2: '455px'}); }.bind(this), 100);

        setTimeout(function() { this.setState({lHeight: '0px'}); }.bind(this), 380);
        setTimeout(function() { this.setState({font: '83px'}); }.bind(this), 900);


        setTimeout(function() { this.setState({lHeight2: '0px'}); }.bind(this), 480);
        setTimeout(function() { this.setState({font2: '83px'}); }.bind(this), 1000);

        setTimeout(function() {
            this.an.style.opacity = '1';
            this.an.style.transition = '2.s linear';
            this.an.classList.add('animated', 'fadeInRight');
        }.bind(this), 1250);

        setTimeout(function() {
            this.first.style.opacity = '1';
            this.first.style.transition = '2.s linear';
            this.first.classList.add('animated', 'fadeInDown');
        }.bind(this), 1600);

        setTimeout(function() {
            this.promoText.style.opacity = '1';
            this.promoText.style.transition = '2.s linear';
            this.promoText.classList.add('animated', 'fadeInUp');
        }.bind(this), 2900);

        setTimeout(function() {
            this.promoBtn.style.opacity = '1';
            this.promoBtn.style.transition = '2.s linear';
            this.promoBtn.classList.add('animated', 'fadeInUp');
        }.bind(this), 3100);


        setTimeout(function() { this.setState({grayLinePos: '0px'}); }.bind(this), 3300);
        setTimeout(function() { this.setState({btnOpacity: '1', btnHeight: '35px'}); }.bind(this), 3900);

        setTimeout(function() { this.setState({redLinePos: '0px'}); }.bind(this), 3400);
        setTimeout(function() { this.setState({btnOpacity1: '1', btnHeight1: '35px'}); }.bind(this), 4000);

    }

    render(){

        return(
            <div className={'header_block'}>

                <div className={'line'} style={{bottom: this.state.botP, transition: '.4s linear'}}>
                    <div className={'red_line'} style={{ height: this.state.lHeight, transition: '.4s linear'}}></div>
                    <div className={'text_line'} style={{fontSize: this.state.font, transition: '.35s linear'}}>d</div>
                </div>

                <div className={'line line2'} style={{bottom: this.state.botP2, transition: '.4s linear'}}>
                    <div className={'red_line'} style={{ height: this.state.lHeight2, transition: '.4s linear'}}></div>
                    <div className={'text_line'} style={{fontSize: this.state.font2, transition: '.35s linear'}}>o</div>
                </div>

                <div className={'main_logo'}>
                    <img src={mainLogo} />
                </div>

                <div className={'headerBg'}></div>
                <div className={'main_text'}
                     style={{
                         bottom: '455px'
                     }}
                >
                    <div className={'first'} ref={el => this.first = el}>
                        {'we can'}
                    </div>
                    <div className={' an'} ref={el => this.an = el}>
                        {'web'}
                    </div>
                </div>

                <div className={'header_buttons'}>
                    <div className={'btn_line1'}
                         style={{
                             top: this.state.grayLinePos,
                             transition: '.6s linear'
                         }}
                    ></div>
                    <div className={'btn_line2'}
                         style={{
                             top: this.state.redLinePos,
                             transition: '.6s linear'
                         }}
                    ></div>

                    <button className={'gray_btn'}
                            style={{
                                opacity: this.state.btnOpacity,
                                height: this.state.btnHeight,
                                transition: '.3s linear'
                            }}
                    >
                        посмотреть работы</button>
                    <button className={'red_btn'}
                            style={{
                                opacity: this.state.btnOpacity1,
                                height: this.state.btnHeight1,
                                transition: '.3s linear'
                            }}
                    >
                        <span>нужен сайт?</span>
                        <img src={grayArrow} />
                    </button>
                </div>


                <div className={'promo_block'}>
                    <p ref={el => this.promoText = el} >Интернет-решения для вашего бизнеса
                        свежие идеи, правильная реализация </p>
                    <button className={'down_btn'} ref={el => this.promoBtn = el}>
                        <div className={'down_btn_wrapper'}></div>
                        <div className={'down_btn_wrapper'}></div>
                    </button>
                </div>
            </div>

        )
    }
}

export default HeaderBlock;
