import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from './../Icon';

import { LIGHTCOLORS, DARKCOLORS } from './../../config';

class SearchBar extends Component {

	render() {
		return (
			<View onPress={() => this.props.navigate()} style={[styles.searchBar, this.props.style, {backgroundColor: this.props.nightmode ? DARKCOLORS.background : LIGHTCOLORS.background}]}>
				<Icon icon="&#xf002;" style={[styles.icon, {color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.grey}]} />
				<TextInput
				 	style={[styles.input, {color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.grey}]}
					placeholder="Search Echo"
					underlineColorAndroid="transparent"
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	nightmode: state.nightmode.nightmode
});

export default connect(mapStateToProps)(SearchBar)

const styles = StyleSheet.create({
	searchBar: {
		marginLeft: 16,
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 50,
		width: '66%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	input: {
		marginLeft: 8,
		width: '90%'
	},
	icon: {
		width: '10%'
	}
})