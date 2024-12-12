import { useState } from 'react';
import { Input } from './input';
import { Link } from 'react-router-dom';

export const SignIn = ({ onSubmit }) => {
	const [formValue, setFormValue] = useState({
		email: '',
		password: '',
	});

	const onChange = ({ target }) => {
		setFormValue((prevValue) => ({
			...prevValue,
			[target.name]: target.value,
		}));
	};

	return (
		<>
			<form onSubmit={(event) => onSubmit(event, formValue, setFormValue)}>
				<Input
					label="E-mail"
					value={formValue.email}
					name="email"
					type="email"
					onChange={onChange}
				/>
				<Input
					label="Password"
					value={formValue.password}
					name="password"
					type="password"
					onChange={onChange}
				/>
				<button type="submit">Войти</button>
			</form>
			<Link to="/">Зарегистрироваться</Link>
		</>
	);
};
