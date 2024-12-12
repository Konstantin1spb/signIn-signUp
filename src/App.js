import { Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin';
import { SignUp } from './components/signup';
import { useRef } from 'react';

const App = () => {
	const formRef = useRef()
	const onSubmit = (event, data, setFormValue, setError) => {
		event.preventDefault();

		if(window.location.pathname === '/login') {
			setFormValue({ email: '', password: '' });
		 	console.log(data);
		} else {
			if (data.passwordCheck !== data.password) {
				setError(true);
			} else {
				formRef.current.reset()
				setError(false);
				setFormValue({
					name: '',
					nickname: '',
					email: '',
					sex: '',
					password: '',
					passwordCheck: '',
				});
				console.log(data);
			}
		}
	};

	return (
		<Routes>
			<Route path="/" element={<SignUp onSubmit={onSubmit} formRef={formRef} />}></Route>
			<Route path="/login" element={<SignIn onSubmit={onSubmit} />}></Route>
		</Routes>
	);
};

export default App;
