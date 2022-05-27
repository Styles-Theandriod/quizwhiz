import { useState } from 'react';
import {useApp} from './context';

import Header from './Components/Header';
import Loader from './Components/Loader';
import ParamsForm from './Components/ParamsForm';
import Questions from './Components/Questions';

const App = ()=> {

  const [results, setResults] = useState([]);
  const {params, darkMode, setDarkMode, loading, showForm} = useApp();


  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-slate-100 text-gray-800 dark:bg-slate-800 dark:text-gray-200 min-h-screen py-2">
        <Header />
        {loading ? <Loader /> : showForm ? <ParamsForm /> : <Questions />}        
      </div>
    </div>
  );
}

export default App;
