import { useState } from 'react';
import {useApp} from './context';
import {fetchQuestions} from './quiz';

import ParamsForm from './Components/ParamsForm';

const App = ()=> {

  const [results, setResults] = useState([]);
  const {params} = useApp();
  const handleClick = () => {
    return fetchQuestions(params);
  }


  return (
    <div className="bg-blue-900 min-h-screen py-2">
      <ParamsForm />
    </div>
  );
}

export default App;
