import React, { Component } from 'react';
import styled from 'styled-components';
import Notifys from './components/Notifys';
import * as _ from 'lodash';

const NumberInput = styled.input`
  border-radius: 0.8em;
  border: 2px solid #ccc;
  margin:0em 1em;
  padding: 0.5em;
  width: 96.2%;
  outline: none;
  :focus {
    border-color: tomato;
  }
`;

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      dataList: []
    };
  }
  handleClick = (e)=>{
    this.setState({ message: e.target.value });
  }
  msgSubmit = (e)=>{
    if(e.charCode === 13){
      var dataList = [...this.state.dataList,{value:e.target.value,visible:true}];
      var indexKey = dataList.length-1;
      this.setState({dataList,message:''});
      _.delay(()=>{
        var nDataList = this.state.dataList;
        nDataList[indexKey].visible = false;
        this.setState({dataList:nDataList});
      },2000);
    }
  }
  render() {
    var {message,dataList} = this.state;
    return (
      <div style={{padding:'0px',margin:'0px'}}>
        <Notifys dataList={dataList}/>
        <NumberInput type="text" value={message} onChange={this.handleClick} onKeyPress={this.msgSubmit}/>
      </div>
    );
  }
}

export default ChatBox;
