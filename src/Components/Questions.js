import {useState, useEffect} from 'react';

import {useApp} from '../context';

const Questions = () => {

	const {questions, score, setScore, setShowResults} = useApp();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [options, setOptions] = useState([]);

	const shuffle = (array) => {
 		return array.sort(() => Math.random() - 0.5);
	}

	const decode = (string) => {
		var doc = new DOMParser().parseFromString(string, "text/html");
  	return doc.documentElement.textContent;
	}

	const nextQuestion = () => {
		currentQuestion + 1 >= questions.length ? setShowResults(true) : setCurrentQuestion(currentQuestion + 1);
	}

	const handleClick = (clicked, e) => {		
		setTimeout(()=> {
			if (clicked === questions[currentQuestion].correct_answer) {
				e.target.classList.add('bg-green-400');
				setScore(score + 1);
				setTimeout(()=> {
					e.target.classList.remove('bg-green-400');
					nextQuestion();
				}, 500);				
			} else {
				e.target.classList.add('bg-red-400');
				setTimeout(()=> {
					e.target.classList.remove('bg-red-400');
					nextQuestion();
				}, 500);		
			}
		}, 500);
	}

	useEffect(()=>{
		if (questions.length > 0) {
			const optionsArr = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer];
			setOptions(shuffle(optionsArr));
		}
	}, [questions, currentQuestion]);



	return (
		<div className="container mx-auto px-4">
			{questions.length > 0 && <p className="text-lg text-right mb-12">Question {currentQuestion + 1}/{questions.length}</p>}
			{questions.length > 0 ? 
				<div>
					<p className="text-xl mb-8">{decode(questions[currentQuestion].question)}</p>
					<div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-4">
						{options.map(option => (
							<p key={option} onClick={(e) => handleClick(option, e)} className="px-4 py-3 text-lg border border-gray-300 cursor-pointer rounded-lg dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400">{decode(option)}</p>
						))}
					</div>
				</div> : 

				<p className="text-center text-lg my-12">Sorry, there aren't enought questions to show. Please refresh and pick other parameters.</p>
			}
		</div>
	)
}

export default Questions