//@flow

import React, { Component } from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

import StatusScreen from './StatusScreen'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types';
import TabBarContainer from './TabBarContainer'

class MainContainer extends Component {
	renderTab(selected, services) {
		const thisService = services.find(s => s.key === selected)
		return (
			<StatusScreen
				isUp={thisService.isUp}
				lastUpTime={thisService.lastUpTime} 
			/>
		)
	}
	render() {
		return (
			<LinearGradient colors={['#313d43', '#4a787a']} style={styles.container}>
				{this.renderTab(this.props.selectedService, this.props.services)}
				<TabBarContainer 
				onTabChange={this.props.onServiceChange}
				selectedService={this.props.selectedService}/>
			</LinearGradient>
		)
	}
}

MainContainer.propTypes = {
	selectedService: PropTypes.string.isRequired,
	services: PropTypes.array.isRequired,
	onServiceChange: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default MainContainer;