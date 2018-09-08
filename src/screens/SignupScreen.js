import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { registerUser } from './../actions/authActions';

import Icon from '../components/Icon';
import HyperLink from '../components/HyperLink';

import { LIGHTCOLORS, STYLES } from '../config';
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

	onPress(){
		this.setState({errors: ''})
		if(this.state.email && this.state.username && this.state.password && this.state.password2){
			if(this.state.password === this.state.password2){
				const userData = {
					email: this.state.email,
					username: this.state.username,
					password: this.state.password,
					password2: this.state.password2
				};
				this.props.registerUser(userData);
			}else{
			this.setState({errors: 'Please make sure the passwords match.'});
			}
			
		} else{
			this.setState({errors: 'Please fill in the fields.'});
		}
	}

	render() {
		return (
			<View style={styles.app}>
				<View style={styles.container}>
					<View style={STYLES.card}>
						
						<Image source={logo} style={styles.image} />
						<Text style={{color: LIGHTCOLORS.primary}}>{this.state.errors}</Text>
						<Text style={{color: LIGHTCOLORS.secondary}}>{this.props.success}</Text>
						
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
								<Icon customStyle={styles.icon} icon="&#xf007;" />
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
						
						<TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
							<Text style={styles.buttonText}>{'Sign up'.toUpperCase()}</Text>
						</TouchableOpacity>

						<Text>Already have an account?</Text>
						<HyperLink text="Log in here!" navigate={() => this.props.navigation.navigate('Login')}/>
					</View>
				</View>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		registerUser: (userData) => dispatch(registerUser(userData))
	}
};
const mapStateToProps = state => ({
	errors: state.errors,
	success: state.success
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
	app: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: LIGHTCOLORS.background
	},
	container: {
		width: '95%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
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
		width: '5%',
		color: LIGHTCOLORS.darkgrey
	},
	input: {
		width: '95%',
		height: 40,
		marginLeft: 8,
		paddingLeft: 8,
		backgroundColor: LIGHTCOLORS.background,
		borderRadius: 8,
		elevation: 1,
	},
	button: {
		elevation: 2,
		marginTop: 8,
		marginBottom: 32,
		paddingHorizontal: 24,
		paddingVertical: 8,
		backgroundColor: LIGHTCOLORS.secondary,
		borderRadius: 8
	},
	buttonText: {
		color: LIGHTCOLORS.foreground,
		fontWeight: '900'
	}
});
