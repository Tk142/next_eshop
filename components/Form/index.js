import React from 'react'
import Input from '../Input'

const Form = () => {
	return (
		<form className='Form'>
			<Input inputtype='input' type='text' name='name' placeholder='Name' />
			<Input
				inputtype='input'
				type='text'
				name='surname'
				placeholder='Surname'
			/>
			<Input inputtype='input' type='email' name='email' placeholder='Email' />
			<Input
				inputtype='textarea'
				type='text'
				name='message'
				placeholder='Message'
			/>
			<button>Submit</button>
		</form>
	)
}

export default Form
