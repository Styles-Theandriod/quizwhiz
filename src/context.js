import {useContext, createContext, useState} from 'react';

export const useApp = () => {
	return useContext(AppContext);
}

const AppContext = createContext();


export const ContextProvider = ({children}) => {

	const [darkMode, setDarkMode] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [params, setParams] = useState({
		length: 10,
		category: '',
		type: '',
		difficulty: '',
	})

	const values = {darkMode, setDarkMode, questions, setQuestions, params, setParams}

	return (
			<AppContext.Provider value={values}>
				{children}
			</AppContext.Provider>
		)
}