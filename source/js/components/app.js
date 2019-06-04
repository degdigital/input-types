import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSavedState} from '../actions/index.js';
import Header from '../components/header.js';
import InputItemGrid from '../components/inputItemGrid.js';
import {getUrlSegment} from '../utils/utils.js';
import {saveState} from '../actions/index.js';

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = dispatch => {
    return {
		fetchSavedState: (savedStateKey) => dispatch(fetchSavedState(savedStateKey)),
        onSave: (inputItems) => dispatch(saveState(inputItems))
    };
};

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const savedStateKey = getUrlSegment();
		if (savedStateKey) {
			this.props.fetchSavedState(savedStateKey);
		}
	}

	render() {
	    return ([
	    	<Header key="header" onSave={() => this.props.onSave(this.props.inputItems)} isFetching={this.props.isFetching} />,
			<InputItemGrid key="inputItemGrid" />
	    ]);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
