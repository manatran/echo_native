import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import LoginScreen from './../screens/LoginScreen';
import SignupScreen from './../screens/SignupScreen';

const RootStack = createMaterialTopTabNavigator(
	{
		Login: LoginScreen,
		Signup: SignupScreen
	},
	{
		initialRouteName: 'Login',
		navigationOptions: {
			tabBarVisible: false
		}
	}
)

class Auth extends Component {

	render() {
		return (
			<RootStack />
		);
	}
}
export default Auth;