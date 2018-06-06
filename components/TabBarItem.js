//@flow

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'


const TabBarItem = (props) => (
	<View style={styles.container}>
		<Icon name={props.icon} style={[styles.icon, props.selected && styles.selectedLabel]} />
		<Text style={[styles.label, props.selected && styles.selectedLabel]}>{props.label}</Text>
	</View>
)

TabBarItem.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	selected: PropTypes.bool,
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		color: '#ffffff',
		paddingTop: 5,
	},
	icon: {
		color: '#fff',
		fontSize: 32,
		paddingVertical: 4,
	},
	selectedLabel: {
		color: '#cc9766',
	},
})

export default TabBarItem