import React from 'react';
import { View, Image, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleNavigation } from './../../actions/navActions';
import { TabBar } from 'react-native-tab-view';

import { LIGHTCOLORS, DARKCOLORS } from './../../config';

import SearchBar from './SearchBar';

class Header extends React.PureComponent {
  static defaultProps = {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    showIcon: false,
    showLabel: true,
    upperCaseLabel: true,
    allowFontScaling: true
  };

  _renderLabel = ({ route }) => {
    const {
      position,
      navigation,
      activeTintColor,
      inactiveTintColor,
      showLabel,
      upperCaseLabel,
      labelStyle,
      allowFontScaling
    } = this.props;

    if (showLabel === false) {
      return null;
    }

    const { routes } = navigation.state;
    const index = routes.indexOf(route);
    const focused = index === navigation.state.index;

    // Prepend '-1', so there are always at least 2 items in inputRange
    const inputRange = [-1, ...routes.map((x, i) => i)];
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? activeTintColor : inactiveTintColor);
    const color = position.interpolate({
      inputRange,
      outputRange: outputRange
    });

    const tintColor = focused ? activeTintColor : inactiveTintColor;
    const label = this.props.getLabelText({ route });

    if (typeof label === 'string') {
      return <Animated.Text style={[styles.label, { color }, labelStyle]} allowFontScaling={allowFontScaling}>
          {upperCaseLabel ? label.toUpperCase() : label}
        </Animated.Text>;
    }
    if (typeof label === 'function') {
      return label({ focused, tintColor });
    }

    return label;
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { navigation, renderIcon, getLabelText, ...rest } = this.props;
		
    return (
			/* $FlowFixMe */
			<View style={[styles.nav, {backgroundColor: this.props.nightmode ? DARKCOLORS.foreground : LIGHTCOLORS.foreground}]}>
				<View style={styles.mainNav}>
					<TouchableOpacity onPress={() => this.props.toggleNavigation()}>
						<Image style={styles.icon} source={require('./../../assets/icon.png')}/>
					</TouchableOpacity>
					<SearchBar />
				</View>
      	<TabBar {...rest}
				navigationState={navigation.state}
				renderLabel={this._renderLabel}
				style={{elevation: 0, backgroundColor: this.props.nightmode ? DARKCOLORS.foreground : LIGHTCOLORS.foreground}} />
			</View>
		);
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNavigation: () => dispatch(toggleNavigation())
	}
};
const mapStateToProps = state => ({
	errors: state.errors,
	success: state.success,
	nightmode: state.nightmode.nightmode
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({
	nav: {
		elevation: 4
	},
	mainNav: {
		zIndex: 2,
		paddingHorizontal: 16,
		paddingBottom: 8,
		paddingTop: 24 + 16,
		display: 'flex',
		flexDirection: 'row',
		width: '100%'
	},
	icon: {
		height: 32,
		width: 32
	},
  label: {
    textAlign: 'center',
    fontSize: 14,
    margin: 8,
    backgroundColor: 'transparent'
  }
});