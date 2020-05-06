import React from 'react'
import Form from '../../components/Form'
import { motion } from 'framer-motion'

const ContactUs = () => {
	return (
		<motion.div exit={{ opacity: 0 }}>
			<div className='container'>
				<h1 className='title'>Contact Us</h1>
				<Form />
			</div>
		</motion.div>
	)
}

export default ContactUs
