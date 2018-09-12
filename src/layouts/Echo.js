import React, { Component } from 'react';
import { connect } from "react-redux";
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { LIGHTCOLORS, DARKCOLORS } from './../config';

import { store } from '../store';

import HomeScreen from './../screens/HomeScreen';
import PostScreen from './../screens/PostScreen';

import Header from './../components/Header';

const TabNav = createMaterialTopTabNavigator(
	{
		Discussion: HomeScreen,
		Browse: HomeScreen,
		Messages: HomeScreen
	},
	{
		tabBarComponent: props => <Header {...props} />,
		initialRouteName: 'Discussion',
		tabBarOptions: {
			activeTintColor: DARKCOLORS.primary,
			inactiveTintColor: LIGHTCOLORS.grey,
			indicatorStyle: {
				backgroundColor: DARKCOLORS.primary,
				height: 3
			},
			style: {
				height: 50
			},
			labelStyle: {
				fontWeight: "bold",
			}
		}
	}
)

const RootStack = createStackNavigator(
	{
		Home: {
			screen: TabNav,
			navigationOptions: {
				header: null
			},
		},
		Detail: {
			screen: PostScreen,
			navigationOptions: {
				headerStyle: {
					backgroundColor: store.getState().nightmode.nightmode ? DARKCOLORS.foreground : LIGHTCOLORS.foreground,
				},
				headerTintColor: store.getState().nightmode.nightmode ? DARKCOLORS.lightgrey : LIGHTCOLORS.darkgrey, 
			}
		},
		Music: {
			screen: HomeScreen,
		},
		Profile: {
			screen: HomeScreen,
		},
		Playlists: {
			screen: HomeScreen,
		},
		Settings: HomeScreen,
		'Privacy policy': HomeScreen
	},
	{
		initialRouteName: 'Home',
		headerMode: 'screen',
	}
)

class Echo extends Component {
	render() {
		return (
			<RootStack  />
		);
	}
}

const mapStateToProps = state => {
	return {
		nightmode: state.nightmode.nightmode
	};
};

export default connect(mapStateToProps)(Echo);