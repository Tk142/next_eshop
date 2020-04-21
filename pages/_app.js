import React from 'react'
import App from 'next/app'
import { motion } from 'framer-motion'
import '../styles/styles.scss'

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return <Component {...pageProps} />
	}
}

export default MyApp
