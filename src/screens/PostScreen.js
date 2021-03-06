import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Post from '../components/Post';
import Nightmode from '../components/Nightmode';


import { LIGHTCOLORS, DARKCOLORS } from '../config';

class HomeScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			post: undefined,
			err: ''
		}
	}

	componentWillMount() {
		fetch(`https://echo-mobdev.herokuapp.com/api/v1/posts/${this.props.navigation.state.params.id}`, { headers: { Authorization: this.props.token } })
			.then(response => response.json())
			.then(post => {
				this.setState({ post: post });
			})
			.catch(err => {
				this.setState({ err: err });
			});
	}

	render() {
		if (this.state.err) {
			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.nightmode ? DARKCOLORS.background : LIGHTCOLORS.background }}>
					<Text style={{ color: this.props.nightmode ? DARKCOLORS.secondary : LIGHTCOLORS.secondary }}>
						Something went wrong! {this.state.err}
					</Text>
				</View>
			);
		} else {
			if (this.state.post) {
				return (
					<ScrollView style={{ paddingHorizontal: 4, paddingVertical: 8, backgroundColor: this.props.nightmode ? DARKCOLORS.background : LIGHTCOLORS.background }}>
						<Post post={this.state.post} />
					</ScrollView>
				);
			} else {
				return (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.nightmode ? DARKCOLORS.background : LIGHTCOLORS.background }}>
						<ActivityIndicator size="large" color={this.props.nightmode ? DARKCOLORS.secondary : LIGHTCOLORS.secondary} />
					</View>
				)
			}

		}
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.user.token,
		nightmode: state.nightmode.nightmode
	};
};

export default connect(mapStateToProps)(HomeScreen);