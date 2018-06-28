import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSavedState} from 'actions/index.js';
import Header from 'components/header.js';
import InputItemGrid from 'components/inputItemGrid.js';
import {getUrlSegment} from 'utils/utils.js';

function mapStateToProps(state) {
	return state;
}

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {dispatch} = this.props;
		const savedStateKey = getUrlSegment();
		if (savedStateKey) {
			dispatch(fetchSavedState(savedStateKey));
		}
	}

	render() {
	    return ([
	    	<Header key="header" />,
			<InputItemGrid key="inputItemGrid" />
	    ]);
	}

}

export default connect(mapStateToProps)(App);
