import {useContext, createContext, useState} from 'react';

export const useApp = () => {
	return useContext(AppContext);
}

const AppContext = createContext();


export const ContextProvider = ({children}) => {

	const [darkMode, setDarkMode] = useState(false);
	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [params, setParams] = useState({
		length: 10,
		category: '',
		difficulty: '',
		type: '',
	})

	const values = {darkMode, setDarkMode, questions, setQuestions, params, setParams, loading, setLoading}

	return (
			<AppContext.Provider value={values}>
				{children}
			</AppContext.Provider>
		)
}