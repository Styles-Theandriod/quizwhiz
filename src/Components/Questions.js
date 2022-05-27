import {useApp} from '../context';

const Questions = () => {

	const {questions} = useApp();

	return (
		<div className="container mx-auto px-4">
			<p className="text-lg text-right">Question {}/{questions.length}</p>
		</div>
	)
}

export default Questions