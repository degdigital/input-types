import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/header.js';
import InputItemGrid from 'components/inputItemGrid.js';
import Footer from 'components/footer.js';
import {generateRandomId} from 'utils/utils.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.onAddInputClick = this.onAddInputClick.bind(this);
		this.onRemoveInput = this.onRemoveInput.bind(this);
		this.defaultInputItem = {
			name: 'Input Item',
			inputType: 'text'
		};
		this.state = {
	    	inputItems: [
	    		{
	    			...{id: generateRandomId()},
	    			...this.defaultInputItem
	    		}
	    	]
	    };
	}

	onAddInputClick() {
		const {inputItems} = this.state;
		const nextState = [{
			...{id: generateRandomId()},
			...this.defaultInputItem
		}, ...inputItems];
		this.setState({
			inputItems: nextState
		});
	}

	onRemoveInput(id) {
		const {inputItems} = this.state;
		const nextState = inputItems.filter(inputItem => inputItem.id !== id);
		this.setState({
			inputItems: nextState
		});
	}

	render() {
		const {inputItems} = this.state;
		return ([
			<Header key="header" onAddInput={this.onAddInputClick} />,
			<InputItemGrid key="inputItemGrid" items={inputItems} onRemoveInput={this.onRemoveInput} />
		]);
	}
}

export default App;