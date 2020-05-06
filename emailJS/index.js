import emailjs from 'emailjs-com'
import config from './config'

const sendEmail = e => {
	e.preventDefault()

	emailjs.sendForm('gmail', config.TEMPLATE_ID, e.target, config.USER_ID).then(
		result => {
			console.log(result.text)
		},
		error => {
			console.log(error.text)
		}
	)
}

export default sendEmail
