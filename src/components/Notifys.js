import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as _ from 'lodash';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const NotifysBox = styled.div`
  margin:1em;
  border-radius: 0.8em;
  border: 2px solid #ccc;
  height: 50em;
  width: 96.8%;
`;
const Notify = styled.h1`
  opacity: 0;
  color: white;
  font-family: 'fira code';
  padding:5px;
  margin:1px;
  background: palevioletred;
  animation: 2s ${fadeIn} ease-out;
  :first-child{
    border-radius: 0.3em 0.3em 0em 0em;
  }
`;

const Notifys = ({dataList}) => {
  return (
    <NotifysBox>
        {_.map(dataList,({value,visible},key)=>
          visible && <Notify key={key+value}>{value}</Notify>
        )}
    </NotifysBox>
  );
}

export default Notifys;
