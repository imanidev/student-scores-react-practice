import React from 'react';
import Score from './Score';

function Student({ name, bio, scores }) {
	const studentScoresArr = scores.map((score, index) => <Score
				key={index}
				date={score.date} 
				score={score.score} />)
	return (
		<div>
			<h2>{name}</h2>
			<p>{bio}</p>
		{studentScoresArr}
		</div>
	);
}

export default Student;
