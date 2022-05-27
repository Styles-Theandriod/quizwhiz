import { useState } from 'react';
import {useApp} from './context';
import {fetchQuestions} from './quiz';

import Header from './Components/Header';
import ParamsForm from './Components/ParamsForm';

const App = ()=> {

  const [results, setResults] = useState([]);
  const {params, darkMode, setDarkMode} = useApp();
  const handleClick = () => {
    return fetchQuestions(params);
  }


  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-slate-100 text-gray-800 dark:bg-slate-800 dark:text-gray-200 min-h-screen py-2">
        <Header />
        <ParamsForm />
      </div>
    </div>
  );
}

export default App;
