import { TOGGLE_NIGHTMODE } from '../constants';

const initialState = {
	nightmode: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case TOGGLE_NIGHTMODE:
			return {
				...state,
				nightmode: !state.nightmode,
			};
		default:
			return state;
	}
}