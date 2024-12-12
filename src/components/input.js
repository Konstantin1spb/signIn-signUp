export const Input = ({ label, ...props }) => {
	return (
		<>
			<label>{label}</label>
			<input {...props} />
		</>
	);
};
