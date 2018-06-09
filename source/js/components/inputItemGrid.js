import React from 'react';
import InputItem from './inputItem.js';

const InputItemGrid = ({items, onRemoveInput}) => (
	<main className="main">
		<div className="wrapper">
			<ul className="input-item-grid">
				{items.map(item => <InputItem key={item.id} id={item.id} value={item.name} inputType={item.inputType} onRemoveInput={onRemoveInput} />)}
			</ul>
		</div>
	</main>
);

export default InputItemGrid;