import {useState, useEffect} from 'react';

import {useApp} from '../context';

const Questions = () => {

	const {questions} = useApp();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [options, setOptions] = useState([]);

	const handleClick = (clicked) => {
		console.log('You clicked', clicked);

		if (clicked === questions[currentQuestion].correct_answer) {
			console.log('COORRECTTT');
		} else {
			console.log('WRONGGG!!');
		}
	}

	useEffect(()=>{
		const optionsArr = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];
		setOptions(optionsArr);
		console.log(optionsArr);
	}, [currentQuestion]);



	return (
		<div className="container mx-auto px-4">
			<p className="text-lg text-right mb-12">Question {currentQuestion + 1}/{questions.length}</p>
			{questions && 
				<div>
					<p className="text-xl mb-8">{questions[currentQuestion].question}</p>
					<div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-4">
						{options.map(option => (
							<p key={option} onClick={() => handleClick(option)} className="px-4 py-3 text-lg border border-gray-300 cursor-pointer rounded-lg dark:border-gray-600">{option}</p>
						))}
					</div>
				</div>
			}
		</div>
	)
}

export default Questions