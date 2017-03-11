import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    showLoginModal: React.PropTypes.func.isRequired
  }

	constructor() {
		super();
	}

	showLoginModal = () => {
		this.props.showLoginModal(true);
	}

	render() {
		return(
			<div className="header fixed-top">
				<Link to="/" className="headerItem logo">SimplyBook.gr</Link>
				<nav className="headerItem navContainer">
					{/* <div className="navItem">
						<Link className={location.pathname === "/" ? "selected" : ""} to="/host">Learn more</Link>
					</div> */}
          <div className="navItem">
						<Link className={location.pathname === "/" ? "selected" : ""} to="/">Home</Link>
					</div>
					<div className="navItem">
						<Link className={location.pathname === "/about" ? "selected" : ""} to="/about">About Us</Link>
					</div>
          <div className="navItem">
						<Link className={location.pathname === "/help" ? "selected" : ""} to="/help">Help</Link>
					</div>
					<div className="navItem">
						<a onClick={this.showLoginModal}>Log in</a>
					</div>
				</nav>
			</div>
		)
	}
}
