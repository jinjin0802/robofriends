import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'
import SearchBox from './SearchBox';





class App extends Component {
	constructor(){
		//have to call constructor of the super in order to use this
		super();

		//state is sth that can bring about change in an App. and it usually lives in the parent component like App here.	
		this.state = {
			robots: robots,
			searchField: ''

		}
	}

	//use this (event) => syntax to make sure that this is referring to the App
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})

		// console.log(filteredRobots);

	}

	render(){
		const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return(
			<div className ="tc">
				<h1>Robot friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots ={filteredRobots}/>
			</div>

		);
	}



}

export default App;