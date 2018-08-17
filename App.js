import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from './src/config';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';

import Signup from './src/screens/Signup'
import Login from './src/screens/Login'

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<View style={styles.app}>
						<View style={styles.container}>
							<Login />
						</View>
					</View>
      	</PersistGate>
			</Provider>
		);
	}
}


const styles = StyleSheet.create({
	app: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.lightbg,
	},
	container: {
		width: '95%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
