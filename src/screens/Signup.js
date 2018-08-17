import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import { connect } from "react-redux";
import Icon from './../components/Icon';
import { COLORS, STYLES } from './../config';
import logo from './../assets/logo.png';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			password2: ''
		}
	}
	componentDidMount(){
		console.log(this.props)
	}

	render() {
		return (
			<View style={STYLES.card}>
				<Image source={logo} style={styles.image} />
				<View style={styles.form}>
					<View style={styles.inputContainer}>
						<Icon style={styles.icon} icon="&#xf0e0;" />
						<TextInput
							style={styles.input}
							placeholder="E-mail address"
							onChangeText={(email) => this.setState({ email })}
							underlineColorAndroid="transparent"
						/>
					</View>
					<View style={styles.inputContainer}>
						<Icon style={styles.icon} icon="&#xf007;" />
						<TextInput
							style={styles.input}
							placeholder="Username"
							onChangeText={(username) => this.setState({ username })}
							underlineColorAndroid="transparent"
						/>
					</View>
					<View style={styles.inputContainer}>
						<Icon style={styles.icon} icon="&#xf13e;" />
						<TextInput
							secureTextEntry={true}
							style={styles.input}
							placeholder="Password"
							onChangeText={(password) => this.setState({ password })}
							underlineColorAndroid="transparent"
						/>
					</View>
					<View style={styles.inputContainer}>
						<Icon style={styles.icon} icon="&#xf13e;" />
						<TextInput
							secureTextEntry={true}
							style={styles.input}
							placeholder="Confirm Password"
							onChangeText={(password2) => this.setState({ password2 })}
							underlineColorAndroid="transparent"
						/>
					</View>
				</View>
				<TouchableHighlight style={styles.button}>
					<Text style={styles.buttonText}>{'Sign up'.toUpperCase()}</Text>
				</TouchableHighlight>
				<Text>Already have an account? Log in here!</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Signup);

const styles = StyleSheet.create({
	image: {
		aspectRatio: 2.5,
		resizeMode: 'contain',
		marginVertical: 32
	},
	form: {
		height: 224,
		marginVertical: 16,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 8,
		width: '75%',
	},
	icon: {
		width: '10%',
		color: COLORS.darkgrey
	},
	input: {
		width: '90%',
		height: 40,
		marginLeft: 8,
		paddingLeft: 8,
		backgroundColor: COLORS.lightbg,
		borderRadius: 8,
		elevation: 1
	},
	button: {
		elevation: 2,
		marginTop: 8,
		marginBottom: 32,
		paddingHorizontal: 24,
		paddingVertical: 8,
		backgroundColor: COLORS.secondary,
		borderRadius: 8
	},
	buttonText: {
		color: COLORS.lightfg,
		fontWeight: '900'
	}
});
