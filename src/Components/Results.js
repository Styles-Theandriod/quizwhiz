import {useApp} from '../context';

import Confetti from 'react-confetti';

const Results = () => {

  const {score, questions, setScore, setQuestions, setShowForm, setShowResults} = useApp();

  const handleClick = () => {
    setScore(0);
    setQuestions([]);
    setShowForm(true);
    setShowResults(false);
  }

  return (
    <div className="py-24 z-50 flex flex-col justify-center items-center container mx-auto px-4">
      <Confetti width={window.innerWidth} height = {window.innerHeight} />
      <h2 className="text-center font-bold text-emerald-600 text-3xl mb-8 dark:text-emerald-400">You scored {score} out of {questions.length}</h2>
      <button onClick={handleClick} className="rounded-lg px-6 py-2 text-gray-300 bg-indigo-600 shadow-md shadow-indigo-600/50 font-medium text-lg dark:text-gray-100 dark:bg-indigo-400 dark:shadow-indigo-400/50 hover:opacity-90">New Game</button>
    </div>
  )
}

export default Results