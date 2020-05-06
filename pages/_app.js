import React from 'react'
import App from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'

import '../styles/styles.scss'

import '../styles/header.scss'
import '../styles/footer.scss'
import '../styles/layout.scss'
import '../styles/nav.scss'

import '../styles/productList.scss'
import '../styles/product.scss'

import '../styles/button.scss'
import '../styles/input.scss'
import '../styles/form.scss'
import '../styles/spinner.scss'
import '../styles/cart.scss'
import '../styles/title.scss'

import '../styles/snipcart.scss'

class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props

		return (
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		)
	}
}

export default MyApp
