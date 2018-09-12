import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';

const HomeScreenNavigation = createStackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			header: null
		},
	},
	Post: {
		screen: PostScreen,
		navigationOptions: {
			header: null
		},
	},
});

class HomeScreenNavigator extends Component {

	render() {
		return (
			<HomeScreenNavigation />
		);
	}
}

export default HomeScreenNavigator;