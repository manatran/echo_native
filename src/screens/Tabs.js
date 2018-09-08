import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { LIGHTCOLORS, DARKCOLORS } from './../config';

import { store } from './../store';

import Header from './../components/Header';
import HomeScreen from './../screens/HomeScreen';

const TabNav = createMaterialTopTabNavigator(
	{
		Discussion: HomeScreen,
		Browse: HomeScreen,
		Messages: HomeScreen
	},
	{
		tabBarComponent: props => <Header {...props}/>,
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

class Tabs extends Component {
	render() {
		return (
			<TabNav />
		);
	}
}

export default Tabs;