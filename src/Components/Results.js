import {useApp} from '../context';

import Confetti from 'react-confetti';

const Results = () => {

  const {score, questions} = useApp();

  return (
    <div className="py-8 z-50">
      <Confetti width={window.innerWidth} height = {window.innerHeight} />
      <h2 className="font-bold text-emerald-500 text-xl">You scored {score} out of {questions.length}</h2>
    </div>
  )
}

export default Results