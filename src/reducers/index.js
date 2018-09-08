import { combineReducers } from 'redux';
import authReducer from './authReducer';
import navReducer from './navReducer';
import nightmodeReducer from './nightmodeReducer';

export default combineReducers({
	auth: authReducer,
	nav: navReducer,
	nightmode: nightmodeReducer
})