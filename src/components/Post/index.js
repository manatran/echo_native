import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from "react-redux";

import Icon from '../Icon';

import { LIGHTCOLORS, DARKCOLORS, STYLES } from '../../config';

class Post extends Component {

	render() {
		return (
			<View style={[STYLES.card, styles.postContainer, {backgroundColor: this.props.nightmode ? DARKCOLORS.foreground : LIGHTCOLORS.foreground}]}>
				<Image source={{uri: 'https://i.scdn.co/image/4cddcc0f85d9cedb746cea9b3d339896e3c35178'}} style={styles.postImage} />
				<View style={styles.postDescription}>
					<Text style={[styles.title, {color: this.props.nightmode ? DARKCOLORS.lightgrey : LIGHTCOLORS.darkgrey}]}>Rust In Peace</Text>
					<Text style={[styles.subtitle, {color: this.props.nightmode ? DARKCOLORS.lightgrey : LIGHTCOLORS.grey}]}>Megadeth</Text>
					<View style={styles.meta}>
						<Text style={[styles.author, {color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.lightgrey}]} >by manaus_t</Text>
						<Text style={[styles.circle, {color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.lightgrey}]}>&#x25cf;</Text>
						<Text style={[styles.timestamp, {color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.lightgrey}]}>12 days ago</Text>
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		nightmode: state.nightmode.nightmode
	};
};

export default connect(mapStateToProps)(Post);

const styles = StyleSheet.create({
	postContainer: {
		padding: 0,
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	postImage: {
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
		height: 150,
		width: 150,
	},
	postDescription: {
		padding: 8,
		height: 150,
		flex:1,
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
	},
	title: {
		fontSize: 16,
		fontWeight: '900'
	},
	subtitle: {
		fontSize: 14,
		fontWeight: '200'
	},
	meta: {
		marginTop: 16,
		flexDirection: 'row'
	},
	author: {
		fontSize: 12,
	},
	circle: {
		fontSize: 12,
		marginHorizontal: 8,
	},
	timestamp: {
		fontSize: 12,
	}
});