import React from 'react'

const Loader = () => {
	return (
		<div className="w-screen bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center h-[60vh] z-20">
			<span className="block w-16 h-16 rounded-full border-t-2 border-t-indigo-600 dark:border-t-indigo-400 animate-spin" ></span>
			<p className="text-md mt-6">Loading...</p>
		</div>
	)
}

export default Loader