import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beeNum : 0,
      bubbles : [],
      bColor : ["#233D4D","#FE7F2D","#595959","#A1C181","#579C87","#08224C","#4583E5","#FFAB01"]
    };
    let i;
    for(i=1;i<=5;i++){
      const propB = {
        key: i*0.99,
        color: this.state.bColor[_.random(0,7)],
        to: _.random(i*2,_.random(i*3))%6+1,
        delay: _.random(i*2,_.random(i*2.5))%30+1
      }
      this.state.bubbles.push(propB);
    }
  }

  bubbleMotion = ({to})=>keyframes`
    0%,{
      width: 1em;
      height: 1em;
      opacity: 0;
    }
    25%, 55% {
      width: 1.5em;
      height: 1.5em;
      opacity: 1;
    }
    80% {
      width: 0em;
      height: 0em;
      opacity: 0;
    }
    100% {
      transform: translate(${to}em,-${to*6.5}em) skew(45deg,-45deg) rotateZ(-200deg) scale3d(-${to*3%5},-${to*3%5},3) ;
      opacity: 0;
    }
  `;
  Bubble = styled.div`
    &:before{
      content: "";
      display: block;
      position: fixed;
      width: 0em;
      height: 0em;
      border-radius: 5em;
      border: 1px solid ${({color})=>{return color ? color : "red"}};
      animation: ${({delay})=>delay%5+2}s ${this.bubbleMotion} linear infinite 0s;
    }

    display: block;
    position: fixed;
    left: 50%;
    bottom: 1%;
    animation: ${({delay})=>delay%5+4}s ${this.bubbleMotion} linear infinite 0s;
  `;

  componentWillMount() {
    this.trimer = setTimeout(()=>{
      const i = this.state.bubbles.length;
      const propB = {
        key: i*99,
        color: this.state.bColor[_.random(0,7)],
        to: _.random(i*2,_.random(i*3))%6+1,
        delay: _.random(i*2,_.random(i*2.5))%30+1
      }
      this.setState({bubbles:[{...propB},...this.state.bubbles]});
      if(i<100){
        this.componentWillMount();
      }
    },100);
  }
  componentWillUnmount() {
    clearTimeout(this.trimer);
  }
  render() {
    const Bubble = this.Bubble;
    const renderBubble = ()=>{
      return _.map(this.state.bubbles,(item)=><Bubble {...item}/>);
    }
    return <div>
      {renderBubble()}
    </div>;
  }
}
export default App;
