import React, { Component } from 'react';
import { connect } from "react-redux";

import Echo from './Echo';
import Auth from './Auth';

class Main extends Component {
	render() {
		return this.props.auth.isAuthenticated
			? <Echo />
			: <Auth />
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps)(Main);
