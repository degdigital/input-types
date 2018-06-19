import React from 'react';
import {connect} from 'react-redux';
import InputItem from './inputItem.js';
import {TransitionGroup} from 'react-transition-group';
import FadeAndSlideTransition from './fadeAndSlideTransition.js';

const mapStateToProps = state => {
	return { inputItems: state.inputItems };
};

const List = ({children}) => {
	return (
		<ul className="input-item-grid">
			{children}
		</ul>
	);
};

const InputItemGrid = ({inputItems}) => (
	<main className="main">
		<div className="wrapper">
			<TransitionGroup component={List}>
				{
					inputItems.map(item => {
						return (
							<FadeAndSlideTransition duration={250} key={item.id}>
								<InputItem 
									key={item.id} 
									id={item.id} 
									value={item.name} 
									inputType={item.inputType} 
									inputPattern={item.inputPattern}
									isRequired={item.isRequired}
									isValid={item.isValid} />
							</FadeAndSlideTransition>
						)
					})
				}
			</TransitionGroup>
		</div>
	</main>
);

export default connect(mapStateToProps)(InputItemGrid);