import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';

import { LIGHTCOLORS, DARKCOLORS } from './../../config';

class HyperLink extends Component {

	render() {
		return (
			<TouchableOpacity onPress={() => this.props.navigate()} style={{padding: 8}}>
				<Text style={{color: this.props.nightmode ? DARKCOLORS.secondary : LIGHTCOLORS.secondary}}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = state => {
	return {
		nightmode: state.nightmode.nightmode
	};
};

export default connect(mapStateToProps)(HyperLink)