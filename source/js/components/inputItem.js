import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import types from '../config/types';
import patterns from '../config/patterns';

class InputItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputType: this.props.inputType,
			inputPattern: this.props.inputPattern,
			isRequired: this.props.isRequired,
			isValid: this.props.isValid
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.setValidityMessage = this.setValidityMessage.bind(this);
		this.clearValidityMessage = this.clearValidityMessage.bind(this);
		this.renderInputString = this.renderInputString.bind(this);
	}

	onInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.setValidityMessage();
	}

	setValidityMessage() {
		this.setState({
			isValid: true
		});
	}

	clearValidityMessage() {
		this.setState({
			isValid: false
		});
	}

	renderInputString() {
		const typeStr = ` type="${this.state.inputType}"`;
		const patternStr = this.state.inputPattern ?
			` pattern="${this.state.inputPattern}"` :
			'';
		const requiredStr = this.state.isRequired ?
			` required` :
			'';
		return `input${typeStr}${patternStr}${requiredStr}`;
	}

	render() {
		const submitButtonClasses = 'button input-item__submit-button';
		const requiredClasses = 'input-item__control input-item__control--inline';
		return (
			<ReactCSSTransitionGroup transitionName="input-item" transitionAppear={true} transitionAppearTimeout={750} transitionEnter={false} transitionLeave={false}>	
				<li className="input-item" id={this.props.id}>
					<form onSubmit={this.onFormSubmit}>
							<button className="input-item__remove-button" type="button" onClick={() => this.props.onRemoveInput(this.props.id)}>&times;</button>
							<div className="input-item__display">
								<span className="input-item__validity-display">{this.state.isValid ? 'Form submitted! No validation errors.' : ''}</span>
								<input 
									className="input-item__display-input"
									type={this.state.inputType} 
									pattern={this.state.inputPattern} 
									required={this.state.isRequired} 
									onFocus={this.clearValidityMessage} />
								<pre>&lt;{this.renderInputString()}&gt;</pre>
								<button className={submitButtonClasses} type="submit">Test This Input</button>
							</div>
							<div className="input-item__controls">
								<div className="input-item__control">
									<label htmlFor="inputType">Input Type:</label>
									<select 
										name="inputType"
										id="inputType"
										value={this.state.value} 
										onChange={this.onInputChange} 
										onFocus={this.clearValidityMessage}>
										{types.map(type => <option key={type.value} value={type.value}>{type.name}</option>)}
									</select>
								</div>
								<div className="input-item__control">
									<label htmlFor="inputPattern">Pattern:</label>
									<select 
										name="inputPattern"
										id="inputPattern"
										value={this.state.value} 
										onChange={this.onInputChange} 
										onFocus={this.clearValidityMessage}>
										{patterns.map(pattern => <option key={pattern.value} value={pattern.value}>{pattern.name}</option>)}
									</select>
								</div>
								<div className={requiredClasses}>
									<input 
										name="isRequired"
										id="isRequired"
										type="checkbox" 
										checked={this.state.isRequired} 
										onChange={this.onInputChange} 
										onFocus={this.clearValidityMessage} /> <label htmlFor="isRequired">Required</label>
								</div>
							</div>
						</form>
				</li>
			</ReactCSSTransitionGroup>
		);
	}

}

InputItem.defaultProps = {
  isRequired: false
};

export default InputItem;