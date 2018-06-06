import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import PropTypes from 'prop-types';

class briefed extends Component {
	constructor(props){
		super(props)
		this.state = {
			selectedService: 'web', 
			services: [
				{key: 'web', isUp: true, lastUpTime: null},
				{key: 'database', isUp: false, lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000)},
				{key: 'mail', isUp: true, lastUpTime: null},			
			],
			// isUp: false,
			// lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000),
		}
		this.switchService = this.switchService.bind(this)
		this.fetchServiceStatus = this.fetchServiceStatus.bind(this)
	}
	
	componentDidMount() {
		setInterval(() => { this.fetchServiceStatus }, 5000)
	}

	fetchServiceStatus() {
		fetch('http://localhost:8080/status')
		.then(response => response.json())
		.then(data => {
			const newState = this.state.services.map(s => (
				Object.assign(s, {
					isUp: data[s.ket].status === 'up',
					lastUpTime: new Date(data[s.key].lastUpTime),
				})
			))
			this.setState({ services: newState })
		})
	}

	switchService(nextService){
		this.setState({selectedService: nextService})
	}
  render() {
    return (
      <MainContainer 
      	selectedService={this.state.selectedService}
      	services={this.state.services}
      	onServiceChange={this.switchService}
      />
    );
  }
}


AppRegistry.registerComponent('briefed', () => briefed);
