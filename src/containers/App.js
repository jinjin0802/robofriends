	import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots'
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'





class App extends Component {
	constructor(){
		//have to call constructor of the super in order to use this
		super();

		//state is sth that can bring about change in an App. and it usually lives in the parent component like App here.	
		this.state = {
			robots: [],
			searchField: ''

		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users =>this.setState({robots: users})
		);
	}

	//use this (event) => syntax to make sure that this is referring to the App
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})

		// console.log(filteredRobots);

	}

	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(!robots.length){
			return <h1>loading</h1>
		}else{
			return(

				<div className ="tc">
					<h1>Robot friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots ={filteredRobots}/>
					</Scroll>
				</div>

		);

		}
		
	}



}

export default App;