import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";
import { logoutUser } from './../actions/authActions';

class HomeScreen extends Component {
	onPress(){
		this.props.logoutUser();
	}
	render() {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Hello World</Text>
				<Button title="Logout" onPress={() => this.onPress()}/>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser: (userData) => dispatch(logoutUser(userData))
	}
};
const mapStateToProps = state => {
	return {
		user: state.auth.user.user
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);