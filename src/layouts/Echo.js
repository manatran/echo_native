import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { COLORS } from './../config';

import Icon from './../components/Icon'

import TabNav from './../screens/Tabs';
import HomeScreen from './../screens/HomeScreen';

const RootStack = createDrawerNavigator(
	{
		Home: {
			screen: TabNav,
			navigationOptions: {
					drawerIcon: <Icon icon="&#xf015;" style={{color: COLORS.grey}} />
			},
		},
		Music: {
			screen: HomeScreen,
			navigationOptions: {
					drawerIcon: <Icon icon="&#xf001;" style={{color: COLORS.grey}} />
			},
		},
		Profile: {
			screen: HomeScreen,
			navigationOptions: {
					drawerIcon: <Icon icon="&#xf007;" style={{color: COLORS.grey}} />
			},
		},
		Playlists: {
			screen: HomeScreen,
			navigationOptions: {
					drawerIcon: <Icon icon="&#xf04b;" style={{color: COLORS.grey}} />
			},
		},
		Settings: HomeScreen,
		'Privacy policy': HomeScreen
	},
	{
		initialRouteName: 'Home',
		drawerWidth: Dimensions.get('window').width * .75,
		contentOptions: {
			activeTintColor: COLORS.grey,
			activeBackgroundColor: COLORS.lightfg,
			inactiveTintColor: COLORS.grey
		}
	}
)

class Echo extends Component {
	render() {
		return (
			<RootStack />
		);
	}
}

export default Echo;