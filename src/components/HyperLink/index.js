import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS } from './../../config';

export default class HyperLink extends Component {

	render() {
		console.log(this.props)
		return (
			<TouchableOpacity onPress={() => this.props.navigate()} style={{padding: 8}}>
				<Text style={{color: COLORS.secondary}}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}