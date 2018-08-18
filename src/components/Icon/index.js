import React, { Component } from 'react';
import { Text } from 'react-native';
import { Font } from 'expo';

export default class Icon extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fontLoaded: false
		}
	}

	async componentDidMount() {
		try {
			await Font.loadAsync({
				'fontawesome': require('../../assets/fonts/fontawesome.ttf'),
			});
			this.setState({ fontLoaded: true });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		if (this.state.fontLoaded) {
			return (
				<Text style={[ this.props.style, {
					fontFamily: 'fontawesome',
					textAlign: 'center'
				}]}>
					{this.props.icon}
				</Text>
			);
		} else {
			return null
		}
	}
}