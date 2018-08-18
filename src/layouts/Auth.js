import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import LoginScreen from './../screens/LoginScreen';
import SignupScreen from './../screens/SignupScreen';

import { COLORS } from './../config';

const RootStack = createMaterialTopTabNavigator(
	{
		Login: LoginScreen,
		Signup: SignupScreen
	},
	{
		initialRouteName: 'Login',
		navigationOptions: {
			tabBarVisible: false
		},
		tabBarOptions: {
			style: {
				paddingTop: 24
			}
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