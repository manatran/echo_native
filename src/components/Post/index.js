import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import { getTimeDifference } from '../../utils';

import { LIGHTCOLORS, DARKCOLORS, STYLES } from '../../config';

class Post extends Component {

	render() {
		return (
			<View style={[STYLES.card, styles.postContainer, { backgroundColor: this.props.nightmode ? DARKCOLORS.foreground : LIGHTCOLORS.foreground }]}>
				<Image source={{ uri: this.props.post.content.images.length > 0 ? this.props.post.content.images[0].url : 'https://api.adorable.io/avatars/128/notfound.png' }} style={styles.postImage} />
				<View style={styles.postDescription}>
					<View>
						<Text style={[styles.title, { color: this.props.nightmode ? DARKCOLORS.lightgrey : LIGHTCOLORS.darkgrey }]}>
							{this.props.post.content.title}
						</Text>
						<Text style={[styles.subtitle, { color: this.props.nightmode ? DARKCOLORS.lightgrey : LIGHTCOLORS.grey }]}>
							{this.props.post.content.artist_name}
						</Text>
					</View>
					<View style={styles.meta}>
						<Text style={[styles.author, { color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.lightgrey }]} >
							by {this.props.post.author.username}
						</Text>
						<Text style={[styles.circle, { color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.lightgrey }]}>&#x25cf;</Text>
						<Text style={[styles.timestamp, { color: this.props.nightmode ? DARKCOLORS.grey : LIGHTCOLORS.lightgrey }]}>
							{getTimeDifference(this.props.post.created_at)}
						</Text>
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
		flex: 1,
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