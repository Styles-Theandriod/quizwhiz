
const url = 'https://opentdb.com/api.php?';


export const fetchQuestions = async (params) => {
	console.log('Done');

	const res = await fetch(`${url}amount=${params.length}&category=${params.category}&difficulty=${params.difficulty}&type=${params.type}`).catch(err => console.log(err));
	const {results} = await res.json();

	console.log(results);
	
}
