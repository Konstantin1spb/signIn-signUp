import { useState } from 'react';
import { Input } from './input';
import { Error } from './error';
import { Link } from 'react-router-dom';

export const SignUp = ({ onSubmit, formRef }) => {
	const [error, setError] = useState(false);
	const [formValue, setFormValue] = useState({
		name: '',
		nickname: '',
		email: '',
		sex: '',
		password: '',
		passwordCheck: '',
	});

	const onChange = ({ target }) => {
		setFormValue((prevValue) => ({
			...prevValue,
			[target.name]: target.value,
		}));
	};

	return (
		<>
			<form
				ref={formRef}
				onSubmit={(event) => onSubmit(event, formValue, setFormValue, setError)}
			>
				<Input
					label="Name"
					value={formValue.name}
					name="name"
					type="text"
					onChange={onChange}
				/>
				<Input
					label="NickName"
					value={formValue.nickname}
					name="nickname"
					type="text"
					onChange={onChange}
				/>
				<Input
					label="E-mail"
					value={formValue.email}
					name="email"
					type="email"
					onChange={onChange}
				/>
				<div>
					<Input
						label="Male"
						value="male"
						name="sex"
						type="radio"
						onChange={onChange}
					/>
					<Input
						label="Female"
						value="female"
						name="sex"
						type="radio"
						onChange={onChange}
					/>
				</div>
				<Input
					label="Password"
					value={formValue.password}
					name="password"
					type="password"
					onChange={onChange}
				/>
				<Input
					label="Repeat password"
					value={formValue.passwordCheck}
					name="passwordCheck"
					type="password"
					onChange={onChange}
				/>
				<button type="submit">Зарегистрироваться</button>
				{error && <Error>Пароли должны совпадать</Error>}
			</form>
			<Link to="/login">Войти</Link>
		</>
	);
};
