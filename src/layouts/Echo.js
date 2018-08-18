import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";
import { logoutUser } from './../actions/authActions';

class Echo extends Component {
	onPress(){
		this.props.logoutUser();
	}
	render() {
		console.log(JSON.stringify(this.props.user))
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>{this.props.user.username ? this.props.user.username : 'hello world'}</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(Echo);