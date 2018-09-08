import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { toggleNightmode } from './../../actions/nightmodeActions';
import { LIGHTCOLORS, DARKCOLORS } from '../../config';
import Icon from './../Icon';

import {store} from '../../store'

class Nightmode extends Component {

	render() {
		return (
			<TouchableOpacity onPress={() => this.props.toggleNightmode()} style={{padding: 8}}>
				<Text style={[styles.button, {color: this.props.nightmode ? DARKCOLORS.secondary : LIGHTCOLORS.secondary}]}>
					<Icon style={styles.icon} icon="&#xf186;" />
					Toggle nightmode {this.props.nightmode.toString()}
				</Text>
			</TouchableOpacity>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNightmode: () => dispatch(toggleNightmode())
	}
};
const mapStateToProps = state => {
	return {
		nightmode: state.nightmode.nightmode
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nightmode);

const styles = StyleSheet.create({
	button: {
		paddingVertical: 8, 
	},
	icon: {
		marginRight: 8,
	}
});