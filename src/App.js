import './App.css';
import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      fileredRobots: [],
    }
  }
  onSearchChange = (event) => {
    const myFilter = this.state.robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({ fileredRobots: myFilter });
    console.log(this.state.fileredRobots);
  }
  render () {
    return (
      <div className="App">
        <h1 className='my-title f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={this.state.fileredRobots}/>
        </Scroll>
      </div>
    );
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users, fileredRobots: users })});
  }
}

export default App;
