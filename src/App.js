import React, { useState } from 'react';
import Student from './Components/Student';


function App() {
	const [ studentData, setStudentData ] = useState({
		//studentData is the state, setStudentData is the function that updates the state
		students: [
			{
				name: 'James Smith',
				bio:
					'James is a sophomore at XYZ University studying computer science. In his free time, he enjoys playing video games and coding personal projects.',
				scores: [
					{
						date: '2022-03-14',
						score: 88
					},
					{
						date: '2022-04-22',
						score: 91
					},
					{
						date: '2022-09-15',
						score: 75
					}
				]
			},
			{
				name: 'Sophia Rodriguez',
				bio:
					'Sophia is a junior at XYZ University studying business. In her free time, she enjoys hiking and reading.',
				scores: [
					{
						date: '2022-12-14',
						score: 92
					},
					{
						date: '2023-01-09',
						score: 85
					},
					{
						date: '2023-02-23',
						score: 93
					},
					{
						date: '2023-03-01',
						score: 98
					}
				]
			},
			{
				name: 'William Lee',
				bio:
					'William is a senior at XYZ University studying mechanical engineering. In his free time, he enjoys playing basketball and listening to music.',
				scores: [
					{
						date: '2022-10-11',
						score: 82
					},
					{
						date: '2022-11-24',
						score: 90
					},
					{
						date: '2022-12-19',
						score: 88
					}
				]
			}
		]
	});

	return (
		<div>
			{studentData.students.map((student, index) => (
				<Student
					key={index}
					name={student.name}
					bio={student.bio}
					scores={student.scores}
				/> //'Student' is a component
			))}
		</div>
	);
}

//the index is the key
export default App;
