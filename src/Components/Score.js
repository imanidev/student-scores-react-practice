import React from 'react';

function Score({ date, score }) { // destructure props 
	return (
		<div>
			<p>Date: {date}</p> 
			<p>Score: {score}</p>
		</div>
	);
}

export default Score;
