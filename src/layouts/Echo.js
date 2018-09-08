import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { connect } from "react-redux";
import { createDrawerNavigator } from 'react-navigation';
import { LIGHTCOLORS } from './../config';

import Icon from './../components/Icon'

import TabNav from './../screens/Tabs';
import HomeScreen from './../screens/HomeScreen';

const RootStack = createDrawerNavigator(
	{
		Home: {
			screen: TabNav,
			navigationOptions: {
				drawerIcon: <Icon icon="&#xf015;" style={{ color: LIGHTCOLORS.grey }} />
			},
		},
		Music: {
			screen: HomeScreen,
			navigationOptions: {
				drawerIcon: <Icon icon="&#xf001;" style={{ color: LIGHTCOLORS.grey }} />,
				headerLeft: <Icon icon="&#xf001;" onPress={ () => navigation.navigate('DrawerOpen') } />
			},
		},
		Profile: {
			screen: HomeScreen,
			navigationOptions: {
				drawerIcon: <Icon icon="&#xf007;" style={{ color: LIGHTCOLORS.grey }} />
			},
		},
		Playlists: {
			screen: HomeScreen,
			navigationOptions: {
				drawerIcon: <Icon icon="&#xf04b;" style={{ color: LIGHTCOLORS.grey }} />
			},
		},
		Settings: HomeScreen,
		'Privacy policy': HomeScreen
	},
	{
		initialRouteName: 'Home',
		drawerWidth: Dimensions.get('window').width * .75,
		drawerBackgroundColor: LIGHTCOLORS.foreground,
		contentOptions: {
			activeTintColor: LIGHTCOLORS.grey,
			activeBackgroundColor: LIGHTCOLORS.foreground,
			inactiveTintColor: LIGHTCOLORS.grey
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

const mapStateToProps = state => {
	return {
		nav: state.nav.open
	};
};

export default connect(mapStateToProps)(Echo);