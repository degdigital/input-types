import React from 'react';
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
		return (
			<li id={this.props.id}>
				<span>{this.state.isValid ? 'Form submitted; no validation errors.' : ''}</span>
				<pre>&lt;{this.renderInputString()}&gt;</pre>
				<form onSubmit={this.onFormSubmit}>
					<input 
						type={this.state.inputType} 
						pattern={this.state.inputPattern} 
						required={this.state.isRequired} 
						onFocus={this.clearValidityMessage} />
					<span></span>
					<select 
						name="inputType"
						value={this.state.value} 
						onChange={this.onInputChange} 
						onFocus={this.clearValidityMessage}>
						{types.map(type => <option key={type.value} value={type.value}>{type.name}</option>)}
					</select><br />
					<select 
						name="inputPattern"
						value={this.state.value} 
						onChange={this.onInputChange} 
						onFocus={this.clearValidityMessage}>
						{patterns.map(pattern => <option key={pattern.value} value={pattern.value}>{pattern.name}</option>)}
					</select><br />
					<input 
						name="isRequired" 
						type="checkbox" 
						checked={this.state.isRequired} 
						onChange={this.onInputChange} 
						onFocus={this.clearValidityMessage} /> Required<br />
					<button type="submit">Test This Form</button>
					<button type="button" onClick={() => this.props.onRemoveInput(this.props.id)}>Remove</button>
				</form><br />
			</li>
		);
	}

}

InputItem.defaultProps = {
  isRequired: false
};

export default InputItem;