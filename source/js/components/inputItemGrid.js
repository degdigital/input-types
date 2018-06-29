import React from 'react';
import {connect} from 'react-redux';
import InputItem from './inputItem.js';
import {TransitionGroup} from 'react-transition-group';
import FadeAndSlideTransition from './fadeAndSlideTransition.js';

const mapStateToProps = state => {
	return {
		inputItems: state.inputItems,
		isLoading: state.isLoading,
		saveSuccessful: state.saveSuccessful
	};
};

const List = ({children}) => {
	return (
		<ul className="input-item-grid">
			{children}
		</ul>
	);
};

const InputItemGrid = ({inputItems, isLoading, saveSuccessful}) => (
	<main className="main">
		<div className="wrapper">
        	{saveSuccessful ? <div className="save-status">URL updated. Share it with your friends!</div> : ''}
			{isLoading ? <div className="loading"><span className="icon-spinner"></span>Loading</div> : ''}
			<TransitionGroup component={List}>
				{
					inputItems.map((item, index) => {
						return (
							<FadeAndSlideTransition duration={250} key={item.id}>
								<InputItem 
									key={item.id} 
									index={index}
									itemCount={inputItems.length}
									{...item} />
							</FadeAndSlideTransition>
						)
					})
				}
			</TransitionGroup>
		</div>
	</main>
);

export default connect(mapStateToProps)(InputItemGrid);