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
				title: 'Why rent a car with Simplybook ?',
				steps: [
					{
						img: placeholder,
						title: '',
						description: 'Simple, fast, reliable booking. Get exactly what you booked'
					},
					{
						img: placeholder,
						title: '',
						description: 'Support local small and medium businesses'
					},
					{
						img: placeholder,
						title: '',
						description: 'Strong, reliable insurance providing full coverage at low cost'
					},
					{
						img: placeholder,
						title: '',
						description: '24/7 phone support'
					},
					{
						img: placeholder,
						title: '',
						description: 'No surprises. No hidden costs'
					}
				]
			},
			{
				id: 'manager',
				title: 'Simplybook for small and medium local car rentals',
				steps: [
					{
						img: placeholder,
						title: '',
						description: 'Providing small and medium companies with the internet presence they deserve throughout the year without advertising costs'
					},
					{
						img: placeholder,
						title: '',
						description: 'Supporting local communities'
					},
					{
						img: placeholder,
						title: '',
						description: 'Easy to manage, simple and fast availability entry and update, anytime, anywhere'
					},
					{
						img: placeholder,
						title: '',
						description: 'Full technical support from our team'
					},
					{
						img: placeholder,
						title: '',
						description: 'Low cost insurance deals allowing small and medium size companies to have competitive prices and offer better deals'
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
		for (var j=0; j<5; j++) {
			var step = this.state.content[i].steps[j];
			steps.push((
			<div key={j} className="grid-item-1">
				<div className="grid">
					<div className="grid-row-item-row-center">
						<img className="image-description" src={step.img}></img>
						{/* <div className="title-description">{step.title}</div> */}
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
						<div className="grid-item slogan">Supporting small and medium local car rental companies</div>
					</div>
					<div className="grid-row-item-col button-row">
						<a id="#travel" onClick={this.animateAndScroll} className="btn btn-primary btn-space-col btn-large-size">Why Simplybook</a>
						<a id="#manager" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Local Rentals</a>
						<a id="#host" onClick={this.animateAndScroll} className="btn btn-primary btn-large-size btn-space-col">Low cost</a>
					</div>
				</div>
				{this.renderHelpSections()}
				<div>
					<div id="host" className="grid-row-item-row section-header">
						<div className="grid-item subtitle">Straight forward reliable insurance for full coverage at low cost </div>
						<div className="grid">
							<div className="grid-row-item-col">
								<p className="section-text">
									For your safety and peace of mind we provide full insurance in cooperation with strong, reliable insurance providers at low cost. Unlike most providers who only cover car theft or serious damage, our insurance deals also include damages to the roof, windows, tyres and undercarriage covering you for both small and more serious accidents. It is a better choice for you, and it is a better choice for car rentals as you are both covered. This makes everyone safer and happier.

								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-row-item-col subfooter">
					<div className="grid-item"><Link to="/about">About Us</Link></div>
					<div className="grid-item"><Link to="/help">Help</Link></div>
					<div className="grid-item"><Link to="/terms">FAQ</Link></div>
				</div>
				<div className="grid-row-item-row footer">
					<div className="grid-item">Copyright @SimplyBook {new Date().getFullYear()}</div>
				</div>
			</div>
		)
	}
}
