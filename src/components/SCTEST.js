import React, { Component } from 'react';
// import styled, {keyframes} from 'styled-components';
import * as _ from 'lodash';
import './main.min.css';

class SCTEST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...window.reactData,
      ftb_contract: window.reactData && {...JSON.parse(window.reactData.ftb_contract)},
      ftb_vendor: window.reactData && {...JSON.parse(window.reactData.ftb_vendor)}
    };
  }
  componentDidMount(){
    console.log(this.state);
  }
  render() {
    const ListInput = ({field,item})=>(
      <div className="row" key={field}>
          <section className="col col-xs-12">
            <label className="input">
              {field}
              <input type="text" name={field} defaultValue={item} onChange={(e)=>{console.log(e.target.value);}} />
            </label>
          </section>
      </div>
    );
    const ListInputs = ({listItem})=>{
      return _.map(listItem,(item,key)=>{
        if((typeof item) !== "object"){
          return (<ListInput key={key} field={key} item={item}/>);
        }else{
          return _.map(item,(item,key)=>{
            if((typeof item) !== "object"){
              return <ListInput key={key} field={key} item={item}/>
            }else{
              return _.map(item,(item,key)=>{
                if((typeof item) !== "object"){
                  return <ListInput key={key} field={key} item={item}/>
                }else{
                  return _.map(item,(item,key)=><ListInput key={key} field={key} item={item}/>);
                }
              });
            }
          });
        }
      });
    }
    return (
      <div className="widget-grid">
        <div className="smart-form">
          <legend>
            REACT
          </legend>
          <fieldset>
            <ListInputs listItem={this.state}/>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default SCTEST;
