import React from 'react'

const ParamsForm = () => {
	return (
		<div className="container mx-auto px-4">
			<div className="p-3">
				<h2 className="text-xl text-center mb-8 sm:text-left">Select the parameters for your quiz</h2>
				<div className="flex flex-col space-y-5 mb-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
					<div className="flex flex-col space-y-2 ">
						<label htmlFor="questions" className="font-sm font-bold">No of Questions</label>
						<select name="questions" id="questions" className="border border-gray-700 rounded-lg px-2 py-3 sm:max-w-xs dark:outline-indigo-400 dark:text-gray-800">
							<option value="10" selected>10</option>
							<option value="15">15</option>
							<option value="20">20</option>
							<option value="25">25</option>
							<option value="40">40</option>
						</select>
					</div>
					<div className="flex flex-col space-y-2 ">
						<label htmlFor="category" className="font-sm font-bold">Category</label>
						<select name="category" id="category" className="border border-gray-700 rounded-lg px-2 py-3 sm:max-w-xs dark:outline-indigo-400 dark:text-gray-800">
							<option value="0" selected>Any Category</option>
							<option value="9">General Knowledge</option>
							<option value="21">Sports</option>
							<option value="22">Geography</option>
							<option value="23">History</option>
							<option value="27">Animals</option>
							<option value="17">Science & Nature</option>
							<option value="19">Mathematics</option>
							<option value="31">Anime & Manga</option>
						</select>
					</div>
					<div className="flex flex-col space-y-2 ">
						<label htmlFor="difficulty" className="font-sm font-bold">Difficulty</label>
						<select name="difficulty" id="difficulty" className="border border-gray-700 rounded-lg px-2 py-3 sm:max-w-xs dark:outline-indigo-400 dark:text-gray-800">
							<option value="0" selected>Mixed difficulties</option>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</div>
					<div className="flex flex-col space-y-2 ">
						<label htmlFor="type" className="font-sm font-bold">Type</label>
						<select name="type" id="type" className="border border-gray-700 rounded-lg px-2 py-3 sm:max-w-xs dark:outline-indigo-400 dark:text-gray-800">
							<option value="0" selected>Any Type</option>
							<option value="multiple">Multiple Choice</option>
							<option value="boolean">True/False</option>
						</select>
					</div>
				</div>
				<div className="flex justify-start">
					<button className="rounded-lg px-6 py-2 w-full text-gray-300 bg-indigo-600 shadow-lg shadow-indigo-600/50 font-medium dark:text-gray-100 dark:bg-indigo-400 dark:shadow-indigo-400/50 hover:opacity-90 sm:w-auto">Start Quiz</button>
				</div>
			</div>
		</div>
	)
}

export default ParamsForm