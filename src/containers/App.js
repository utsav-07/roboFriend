
import './App.css';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends Component {
  constructor(){
    super()
    this.state= {
      Robots: [],
      searchfield: ''
  }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users =>this.setState({Robots: users}));
    
  }

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})
    console.log(event.target.value);   
    
  }

  render(){
    const {Robots, searchfield} = this.state;
    const filterRobots = Robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    if(!Robots.length)
      return <h1>Loading</h1>
    else
    {
      return (
        <div className="tc">
          <h1 className="f1">RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
          <CardList Robots={filterRobots}/>
          </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
    
  }
  
}

export default App;
