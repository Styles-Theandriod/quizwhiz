import {useContext, createContext, useState} from 'react';

export const useApp = () => {
	return useContext(AppContext);
}

const AppContext = createContext();


export const ContextProvider = ({children}) => {

	const [darkMode, setDarkMode] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showForm, setShowForm] = useState(true);
	const [showResults, setShowResults] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [score, setScore] = useState(0);
	const [params, setParams] = useState({
		length: 10,
		category: '0',
		difficulty: '0',
		type: '0',
	})

	const values = {
		darkMode, 
		setDarkMode, 
		questions, 
		setQuestions, 
		score, 
		showResults, 
		setShowResults, 
		setScore, 
		params, 
		setParams, 
		loading, 
		setLoading, 
		showForm, 
		setShowForm
	}

	return (
			<AppContext.Provider value={values}>
				{children}
			</AppContext.Provider>
		)
}