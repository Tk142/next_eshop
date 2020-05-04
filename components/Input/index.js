import React from 'react'

const Input = props => {
	let inputElement = null

	switch (props.inputtype) {
		case 'input':
			inputElement = <input className='Input__element' {...props} />
			break

		case 'textarea':
			inputElement = <textarea className='Input__element' {...props} />
			break

		default:
			inputElement = null
	}

	return (
		<div className='Input'>
			<label className='Input__label'>{props.label}</label>
			{inputElement}
		</div>
	)
}

export default Input
