
const url = 'https://opentdb.com/api.php?';


export const fetchQuestions = async (params) => {
	console.log('Done');

	const res = await fetch(`${url}amount=10`);
	const {results} = await res.json();

	console.log(params);

	
}
