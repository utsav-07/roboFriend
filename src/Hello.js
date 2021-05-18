import React,{Component} from 'react';
import './Hello.css';

class Hello extends Component{
    render(){
        return(
        <div className="bg-light-green dib br3 pa3 ma2 frow bw2 shadow-5">        
        <h1>Hello World</h1>
        <p>Welcome to React</p>
        </div>
        )
    }
}

export default Hello;