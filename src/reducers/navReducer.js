import { TOGGLE_NAV, OPEN_NAV, CLOSE_NAV } from '../constants';

const initialState = {
	open: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CLOSE_NAV:
			return {
				...state,
				open: false,
			};
    case OPEN_NAV:
			return {
				...state,
				open: true,
			};
		case TOGGLE_NAV:
			return {
				...state,
				open: !state.open,
			};
		default:
			return state;
	}
}