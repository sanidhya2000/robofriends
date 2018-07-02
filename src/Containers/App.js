import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import Button from '../Components/Button.js';
import Scroll from '../Components/Scroll';
import {robots} from '../robots.js';
import './App.css'
import {setSearchField,requestRobots} from '../action.js';

const mapStateToProps=state=>{
	return{
		searchField:state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
	onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
	onRequestRobots:(event)=>dispatch(requestRobots())
	}
}

class App extends Component{

	
	componentDidMount(){
		this.props.onRequestRobots();
		// fetch(`https://jsonplaceholder.typicode.com/users`)
		// .then(response=>response.json())
		// .then(users=>this.setState({robots:users}));
	}


	// onSearchChange=(event)=>{
	// 	this.setState({searchfield:event.target.value});
	// }

	


	render(){
		const {searchField,onSearchChange,robots,isPending}=this.props;
		const filteredrobots=robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
	return(
		<div className="tc">
			<h1>RoboFriends </h1>
			<hr/>
			<Button Add={this.onAdd}/>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
			<CardList robots={filteredrobots}/>
			</Scroll>
		</div>
	);
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);