import React, { Component } from 'react';
import './App.css';

import {Animated} from "react-animated-css";
require('animate.css');

class App extends Component {

    constructor(){
        super();
        this.state = {
            width: '5px',
            height: '5px',
            botP: '850px',
            botP2: '850px',
            heightP: '300px',
            font: '10px',
            font2: '10px',
            lHeight: '300px',
            lHeight2: '300px'
        }
    }


    bigger(){

        this.setState({
            botP: '550px'
        });

        setTimeout(function() { this.setState({botP2: '550px'}); }.bind(this), 100);



        setTimeout(function() { this.setState({lHeight: '0px'}); }.bind(this), 380);
        setTimeout(function() { this.setState({font: '80px'}); }.bind(this), 900);


        setTimeout(function() { this.setState({lHeight2: '0px'}); }.bind(this), 480);
        setTimeout(function() { this.setState({font2: '80px'}); }.bind(this), 1000);

        setTimeout(function() {
            this.an.style.opacity = '1';
            this.an.style.transition = '2.s linear';
            this.an.classList.add('animated', 'fadeInRight');
        }.bind(this), 1250);

        setTimeout(function() {
            this.first.style.opacity = '1';
            this.first.style.transition = '2.s linear';
            this.first.classList.add('animated', 'fadeInDown');
        }.bind(this), 1550);

    }

    nextStep(){
       console.log('sdjfksdhfs');
    }

    // componentDidMount(){
    //     this.setState({
    //         botP: '550px',
    //     })
    // }



  render() {
    return (
      <div className="App">


          <div className={'line'} style={{bottom: this.state.botP, transition: '.4s linear'}}>
              <div className={'red_line'} style={{ height: this.state.lHeight, transition: '.4s linear'}}></div>
              <div className={'text_line'} style={{fontSize: this.state.font, transition: '.35s linear'}}>d</div>
          </div>

          <div className={'line line2'} style={{bottom: this.state.botP2, transition: '.4s linear'}}>
              <div className={'red_line'} style={{ height: this.state.lHeight2, transition: '.4s linear'}}></div>
              <div className={'text_line'} style={{fontSize: this.state.font2, transition: '.35s linear'}}>o</div>
          </div>




          <div className={'menu'}>
              <div className={'menu_wrapper'}>
                  <div className={'menu_item active'} onClick={this.bigger.bind(this)}>item</div>
                  <div className={'menu_item'}>item</div>
                  <div className={'menu_item'}>item</div>
                  <div className={'menu_item'}>item</div>
                  <div className={'menu_item'}>item</div>
              </div>
          </div>
          <div className={'header_block'}>

              <div className={'main_text'}>
                  <div className={'first'} ref={el => this.first = el}>
                  {'we can'}
                    </div>

                      {/*<span className={'red_text'} style={{fontSize: this.state.font, transition: '.2s linear'}}>*/}
                          {/*do*/}
                      {/*</span>*/}
                      <div className={' an'} ref={el => this.an = el}>
                        web
                      </div>

              </div>
          </div>
      </div>
    );
  }
}

export default App;
