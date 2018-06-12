import React from 'react';
import InputItem from './inputItem.js';
import {TransitionGroup} from 'react-transition-group';
import FadeAndSlideTransition from './fadeAndSlideTransition.js';

function List({children}) {
  return (
    <ul className="input-item-grid">
      {children}
    </ul>
  )
}

const InputItemGrid = ({items, onRemoveInput}) => (
	<main className="main">
		<div className="wrapper">
			<TransitionGroup component={List}>
				{
					items.map(item => {
						return (
							<FadeAndSlideTransition duration={250} key={item.id}>
								<InputItem key={item.id} id={item.id} value={item.name} inputType={item.inputType} onRemoveInput={onRemoveInput} />
							</FadeAndSlideTransition>
						)
					})
				}
			</TransitionGroup>
		</div>
	</main>
);

export default InputItemGrid;