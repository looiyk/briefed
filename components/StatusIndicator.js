//@flow

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types';

// stateless component, slightly restricted in functionality
// 	there is o lifecycle methods and no internal methods
const StatusIndicator = (props) => (
	<View style={[styles.border, props.isUp && styles.isUpBorderColor]}>
		<Text style={[styles.character, props.isUp && styles.isUpCharacter]}>
			<Icon name={props.isUp ? 'check' : 'times'} size={180} />
		</Text>
	</View>
)

StatusIndicator.propTypes = {
	isUp: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
	border: {
		borderWidth: 20,
		borderColor: '#F21D44',
		borderRadius: 200,
		width: 240,
		height: 240,
		justifyContent: 'center',
	},
	character: {
		fontSize: 160,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#BF1534',
	},
})

export default StatusIndicator;