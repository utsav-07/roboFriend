import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import "tachyons";

import reportWebVitals from './reportWebVitals';
import { Robots } from './Robots';


ReactDOM.render(
  <div>    
    <Card id={Robots[0].id} name={Robots[0].name} email={Robots[0].emai}/>
    <Card id={Robots[1].id} name={Robots[1].name} email={Robots[1].emai}/>
    <Card id={Robots[2].id} name={Robots[2].name} email={Robots[2].emai}/>
  </div>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
