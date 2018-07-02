import {CHANGE_SEARCH_FIELD} from './constants.js';
import {REQUEST_ROBOTS_PENDING} from './constants.js';
import {REQUEST_ROBOTS_SUCCESS} from './constants.js';
import {REQUEST_ROBOTS_FAILED} from './constants.js';


const intialStateSearch={
	searchField:''
}
const intialStateRobots={
	isPending:false,
	robots:[],
	error:''
}

export const searchRobots=(state=intialStateSearch,action={})=>{
	
	switch(action.type){
		case CHANGE_SEARCH_FIELD :
			return Object.assign({},state,{searchField:action.payload});
		 	break;
		default:
			return state;
	}

}

export const requestRobots=(state=intialStateRobots,action={})=>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({},state,{isPending:true});
			break;

		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({},state,{robots:action.payload,isPending:false});
			break;
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({},state,{error:action.payload,isPending:false});
			break;
		default:
			return state;
	}
}

