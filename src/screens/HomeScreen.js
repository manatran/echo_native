import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from "react-redux";

import Post from '../components/Post';
import Nightmode from '../components/Nightmode';


import { LIGHTCOLORS, DARKCOLORS } from '../config';

class HomeScreen extends Component {

	render() {
		return (
			<ScrollView style={{padding: 4, paddingTop: 8, backgroundColor: this.props.nightmode ? DARKCOLORS.background : LIGHTCOLORS.background}}>
				<Nightmode />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	return {
		nightmode: state.nightmode.nightmode
	};
};

export default connect(mapStateToProps)(HomeScreen);