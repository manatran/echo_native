import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { COLORS } from './../config';

import HomeScreen from './../screens/HomeScreen';

const TabNav = createMaterialTopTabNavigator(
	{
		Discussion: HomeScreen,
		Browse: HomeScreen,
		Messages: HomeScreen
	},
	{
		initialRouteName: 'Discussion',
		tabBarOptions: {
			activeTintColor: COLORS.primary,
			inactiveTintColor: COLORS.grey,
			indicatorStyle: {
				backgroundColor: COLORS.primary,
				height: 3
			}, 
			style: {
				paddingTop: 24,
				height: 74,
				backgroundColor: COLORS.lightfg
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