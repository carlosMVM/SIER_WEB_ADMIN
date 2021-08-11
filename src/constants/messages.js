
const ErrorMessages = {
	general: {
		fieldRequired: "Este campo es obligatorio",
		invalidEmail: "El correo ingresado no es válido",
		minRequired: value => `Debe ingresar mínimo ${value} caracteres`,
		maxRequired: value => `Debe ingresar máximo ${value} caracteres`
	},
	account: {
		resetPassword: {
			confirmPassword: "Las contraseñas no coinciden"
		}
	}
};

export default ErrorMessages;
