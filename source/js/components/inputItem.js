import React from 'react';
import {connect} from 'react-redux';
import {editInputItem, removeInputItem} from '../actions/index';
import types from '../config/types';
import patterns from '../config/patterns';

const submitButtonClasses = 'button input-item__submit-button';
const requiredClasses = 'input-item__control input-item__control--inline';

const mapDispatchToProps = dispatch => {
    return {
    	editInputItem: payload => dispatch(editInputItem(payload)),
        removeInputItem: id => dispatch(removeInputItem(id))
    };
};

const onFormSubmit = (e, props) => {
	e.preventDefault();
	setValidityMessage(props, true);
};

const onInputChange = (e, {id, editInputItem}) => {
	const target = e.target;
	const name = target.name;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const editVals = {
		id,
		isValid: false
	}
	if (target.classList.contains('input-item__display-input')) {
		editVals.value = target.value;
	} else {
		editVals[name] = value;
	}
	editInputItem(editVals);
};

const setValidityMessage = ({id, editInputItem}, isValid) => {
	editInputItem({
		id,
		isValid: isValid
	});
};

const renderInputString = (props) => {
	const typeStr = ` type="${props.inputType}"`;
	const patternStr = props.inputPattern ?
		` pattern="${props.inputPattern}"` :
		'';
	const requiredStr = props.isRequired ?
		` required` :
		'';
	return `input${typeStr}${patternStr}${requiredStr}`;
};

const InputItem = (props) => (
	<li className="input-item" id={props.id} style={props.style}>
		<form onSubmit={(e) =>onFormSubmit(e, props)}>
			{props.itemCount > 1 ? (<button 
				className="input-item__remove-button" 
				type="button" 
				onClick={() => props.removeInputItem(props.id)}>&times;
			</button>) : ''}
			<div className="input-item__display">
				<span className="input-item__validity-display">{props.isValid === true ? 'Form submitted! No validation errors.' : ''}</span>
				<input 
					className="input-item__display-input"
					type={props.inputType} 
					pattern={props.inputPattern} 
					required={props.isRequired}
					value={props.value}
					onFocus={() => setValidityMessage(props, false)}
					onChange={(e) => onInputChange(e, props)} />
				<pre>&lt;{renderInputString(props)}&gt;</pre>
				<button className={submitButtonClasses} type="submit">Test This Input</button>
			</div>
			<div className="input-item__controls">
				<div className="input-item__control">
					<label htmlFor="inputType">Input Type:</label>
					<select 
						name="inputType"
						id="inputType"
						value={props.inputType} 
						onChange={(e) => onInputChange(e, props)}>
						{types.map(type => <option key={type.value} value={type.value}>{type.name}</option>)}
					</select>
				</div>
				<div className="input-item__control">
					<label htmlFor="inputPattern">Pattern:</label>
					<select 
						name="inputPattern"
						id="inputPattern"
						value={props.inputPattern} 
						onChange={(e) => onInputChange(e, props)}>
						{patterns.map(pattern => <option key={pattern.value} value={pattern.value}>{pattern.name}</option>)}
					</select>
				</div>
				<div className={requiredClasses}>
					<input 
						name="isRequired"
						id="isRequired"
						type="checkbox" 
						checked={props.isRequired} 
						onChange={(e) => onInputChange(e, props)} /> <label htmlFor="isRequired">Required</label>
				</div>
			</div>
		</form>
	</li>
);

export default connect(null, mapDispatchToProps)(InputItem);