import {useContext, createContext, useState} from 'react';

export const useApp = () => {
	return useContext(AppContext);
}

const AppContext = createContext();


export const ContextProvider = ({children}) => {

	const [darkMode, setDarkMode] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showForm, setShowForm] = useState(true);
	const [questions, setQuestions] = useState([]);
	const [params, setParams] = useState({
		length: 10,
		category: '0',
		difficulty: '0',
		type: '0',
	})

	const values = {darkMode, setDarkMode, questions, setQuestions, params, setParams, loading, setLoading, showForm, setShowForm}

	return (
			<AppContext.Provider value={values}>
				{children}
			</AppContext.Provider>
		)
}