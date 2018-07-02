import React from 'react';
import Card from '../Containers/Card';
import '../robots';

const Cardlist=({robots})=>{

	const cardarray=robots.map((user,i)=>{
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
	})
	return(
          <div>
          {cardarray}
          </div>

		);

}

export default Cardlist;