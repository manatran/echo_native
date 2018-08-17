import { GET_ERRORS, SET_CURRENT_USER } from '../constants';

// Register User
export const registerUser = (userData, history) => dispatch => {
	
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  
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
	// Remove token from localStorage
	//localStorage.removeItem('mobdev2_auth');
	// Remove auth header for future requests
	utils.setAuthToken(false);
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
}