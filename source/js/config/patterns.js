export default [
	{
		name: 'No Pattern',
		value: ''
	},
	{
		name: 'Numbers only - [0-9]*',
		value: '[0-9]*'
	},
	{
		name: 'Short Zip Code - (\d{5}?)',
		value: '(\d{5}?)'
	},
	{
		name: 'Extended Zip Code - (\d{5}([\-]\d{4})?)',
		value: '(\d{5}([\-]\d{4})?)'
	},
	{
		name: 'Credit/Bank Account - [0-9]{13,16}',
		value: '[0-9]{13,16}'
	},
	{
		name: 'Alphanumeric (No Spaces) - [a-zA-Z0-9]+',
		value: '[a-zA-Z0-9]+'
	},
	{
		name: 'Alphanumeric (With Spaces) - [a-zA-Z0-9\s]+',
		value: '[a-zA-Z0-9\s]+'
	}
];