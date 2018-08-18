import { GET_ERRORS, SET_CURRENT_USER } from '../constants';

// Register User
export const registerUser = (userData) => dispatch => {
	const user = JSON.stringify(userData);
  fetch('https://echo-mobdev.herokuapp.com/api/v1/signup', {
		method: "post",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: user
	})
	.then(res => res.json())
	.then(res => {
		dispatch(setCurrentUser(res.data));
	})
	.catch(err =>
		dispatch({
			type: GET_ERRORS,
			payload: err.error
		})
	)
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
	const user = JSON.stringify(userData);
  fetch('https://echo-mobdev.herokuapp.com/api/v1/auth/local', {
		method: "post",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: user
	})
	.then(res => res.json())
	.then(res => {
		console.log(res)
		dispatch(setCurrentUser(res));
	})
	.catch(err => 
		dispatch({
			type: GET_ERRORS,
			payload: err.error
		})
	)
};

// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// Log user out
export const logoutUser = () => dispatch => {
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
}