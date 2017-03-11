import React, { Component } from 'react';
import {Link} from 'react-router'
import '../css/grid';
import '../css/landingPage';

export default class extends Component {
	constructor() {
		super();
		var placeholder = require('../static/img/placeholder.jpg');

		this.state = {
			content: [
			{
				id: 'travel',
				title: 'Content Area A',
				steps: [
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			},
			{
				id: 'manager',
				title: 'Content Area B',
				steps: [
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			},
			{
				id: 'host',
				title: 'Content Area C',
				steps: [
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					},
					{
						img: placeholder,
						title: 'Lorem ipsum dolor sit',
						description: 'Nunc ut bibendum eu sed volutpat vestibulum'
					}
				]
			}
			]
		};
	}

	animateAndScroll(e) {
		$('html, body').animate({
			scrollTop: $(e.target.id).offset().top
		}, 1000);
	}

	renderSteps(i) {
		var path = "../static/img/";
		var steps = [];
		for (var j=0; j<3; j++) {
			var step = this.state.content[i].steps[j];
			steps.push((
			<div key={j} className="grid-item-1">
				<div className="grid">
					<div className="grid-row-item-row-center">
						<img className="image-description" src={step.img}></img>
						<div className="title-description">{step.title}</div>
						<div className="description">{step.description}</div>
					</div>
				</div>
			</div>));
		}
		return steps;
	}

	renderHelpSections() {
		var sectionDivs = [];
		for (var i=0; i<this.state.content.length; i++) {
			var isEven = i % 2 == 0 ? true:false;
			sectionDivs.push((
				<div key={i} id={this.state.content[i].id} className={"grid-row-item-row section-header " + (isEven ? 'event': 'odd')}>
					<div className="grid-item subtitle">{this.state.content[i].title}</div>
					<div className="grid">
						<div className="grid-row-item-col">
							{this.renderSteps(i)}
						</div>
					</div>
				</div>
				)
			)
		}
		return (
			sectionDivs
		)
	}

	render() {
		return (
			<div className="landing-page grid">
				<div className="main-title-container">
					<div className="grid-row-item-row title-row">
						<div className="grid-item title">SimplyBook TITLE</div>
						<div className="grid-item slogan">Our description</div>
					</div>
					<div className="grid-row-item-col button-row">
						<a id="#travel" onClick={this.animateAndScroll} className="btn btn-primary btn-space-col btn-large-size">Content Area A</a>
						<a id="#manager" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Content Area B</a>
						<a id="#host" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Content Area C</a>
					</div>
				</div>
				{this.renderHelpSections()}
				<div className="grid-row-item-col subfooter">
					<div className="grid-item"><Link to="/about">About Us</Link></div>
					<div className="grid-item"><Link to="/help">Help</Link></div>
					<div className="grid-item"><Link to="/terms">Terms and Privacy</Link></div>
				</div>
				<div className="grid-row-item-row footer">
					<div className="grid-item">Copyright @SimplyBook {new Date().getFullYear()}</div>
				</div>
			</div>
		)
	}
}
