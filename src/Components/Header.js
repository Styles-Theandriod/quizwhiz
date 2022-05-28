import React from 'react'
import {useApp} from '../context';

import sunIcon from '../images/sunny.svg';
import moonIcon from '../images/moon.svg';

const Header = () => {

	const {darkMode, setDarkMode} = useApp();

	return (
		<header className="py-4 mb-4">
			<div className="container mx-auto px-3 flex justify-between items-center">
				<h2 className="text-4xl font-bold">Quiz<span className="text-indigo-600 dark:text-indigo-400">Whiz</span> </h2>
				<button className="p-1 border border-indigo-600 rounded-lg dark:border-indigo-400" onClick={()=> setDarkMode(!darkMode)}>
					<img src={darkMode ? sunIcon : moonIcon} alt="theme switch icon" className="w-4"/>
				</button>
			</div>
		</header>
	)
}

export default Header