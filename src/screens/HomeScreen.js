import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from "react-navigation";

import Post from '../components/Post';
import Nightmode from '../components/Nightmode';

import { LIGHTCOLORS, DARKCOLORS } from '../config';

let appNavRef;

class HomeScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			err: ''
		}
	}

	componentWillMount() {
		fetch('https://echo-mobdev.herokuapp.com/api/v1/posts', { headers: { Authorization: this.props.token } })
			.then(response => response.json())
			.then(posts => {
				this.setState({ posts: posts });
			})
			.catch(err => {
				this.setState({ err: err });
			});
	}

	_openDetail(id) {
		this.props.navigation.navigate('Detail', {id: id})
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
			if (this.state.posts.length > 0) {
				return (
					<ScrollView ref="_scrollView" style={{ paddingHorizontal: 4, paddingVertical: 8, backgroundColor: this.props.nightmode ? DARKCOLORS.background : LIGHTCOLORS.background }}>
						<Nightmode />

						{this.state.posts.map((post, i) => (
							<TouchableOpacity onPress={() => this._openDetail(post._id)} key={post._id}>
								<Post post={post} />
							</TouchableOpacity>
						))}

						<Text style={{ fontSize: 12, paddingTop: 4, paddingBottom: 20, textAlign: 'center', color: this.props.nightmode ? DARKCOLORS.lightgrey : LIGHTCOLORS.lightgrey }}>
							Sorry, no more posts!
						</Text>
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