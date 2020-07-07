import React from 'react';
import logo from '../logo.svg';

export class Header extends React.Component {
	render() {
    return (
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React 
			</a>

			<p>
			{this.props.title}
			</p>
		</header>
		);
	}
}
