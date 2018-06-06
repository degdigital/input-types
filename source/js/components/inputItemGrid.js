import React from 'react';
import InputItem from './inputItem.js';

const InputItemGrid = ({items, onRemoveInput}) => (
	<ul>
		{items.map(item => <InputItem key={item.id} id={item.id} value={item.name} inputType={item.inputType} onRemoveInput={onRemoveInput} />)}
	</ul>
);

export default InputItemGrid;