import { isEmpty } from '../utils';

import { SET_CURRENT_USER, GET_ERRORS, GET_SUCCESS } from '../constants';

const initialState = {
	isAuthenticated: false,
	user: {},
	errors: '',
	success: ''
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		case GET_ERRORS:
			return {
				...state,
				errors: action.payload
			}
		case GET_SUCCESS:
			return {
				...state,
				success: action.payload
			}
		default:
			return state;
	}
}