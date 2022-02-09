import React, {Component} from 'react';
import Cardlist from './Cardlist';
import './App.css'
import { robots } from './robots'
import Searchbox from './Searchbox';



// what the hell is that.
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 id = 'color'>Technofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Cardlist robots = {filteredRobots}/>
            </div>
            
        )
    }
}
export default App;