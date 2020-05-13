import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import config from '../../utils/emailJS/config'
import Input from '../Input'
import { EmailSpinner } from '../Spinner'

const Form = () => {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [response, setResponse] = useState('')

	const sendEmail = e => {
		e.preventDefault()
		setResponse(<EmailSpinner />)

		emailjs
			.sendForm('gmail', config.TEMPLATE_ID, e.target, config.USER_ID)
			.then(
				result => {
					setResponse('Email sent')
				},
				error => {
					setResponse('Error, email not sent')
				}
			)
	}

	return (
		<form onSubmit={sendEmail} className='Form'>
			<Input
				inputtype='input'
				label='Name'
				value={name}
				type='text'
				name='name'
				placeholder='Name'
				onChange={e => setName(e.target.value)}
				required
			/>
			<Input
				inputtype='input'
				label='Surname'
				value={surname}
				type='text'
				name='surname'
				placeholder='Surname'
				onChange={e => setSurname(e.target.value)}
				required
			/>
			<Input
				inputtype='input'
				label='Email'
				value={email}
				type='email'
				name='email'
				placeholder='Email'
				onChange={e => setEmail(e.target.value)}
				required
			/>
			<Input
				inputtype='textarea'
				label='Message'
				value={message}
				type='text'
				name='message'
				placeholder='Message'
				onChange={e => setMessage(e.target.value)}
				required
			/>
			<button className='button button-inverted'>Submit</button>
			<h3 style={{ textAlign: 'center' }}>{response}</h3>
		</form>
	)
}

export default Form
