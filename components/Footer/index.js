import React from 'react'
import './index.scss'

const Footer = () => {
	const date = new Date()
	const year = date.getFullYear()
	return <footer className='footer'>&copy;{year} Next.js Eshop</footer>
}

export default Footer
