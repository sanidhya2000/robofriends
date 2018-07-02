import React from 'react';
import './card.css';
import 'tachyons';

const Card=(props)=>{
	return(
		// for my css file<div className="new">
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`}/>
		<div>
		<h2>{props.name} </h2>
        <p>{props.email}</p>
		</div>
		</div>
	);
}

export default Card;