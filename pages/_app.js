import React from 'react'
import App from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
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

		const variants = {
			initial: { scale: 0.96, y: 30, opacity: 0 },
			enter: {
				scale: 1,
				y: 0,
				opacity: 1,
				transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
			},
			exit: {
				scale: 0.6,
				y: 100,
				opacity: 0,
				transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
			}
		}

		return (
			<Layout>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						variants={variants}
						initial='exit'
						animate='enter'
						exit='exit'
					>
						<Component {...pageProps} key={router.route} />
					</motion.div>
				</AnimatePresence>
			</Layout>
		)
	}
}

export default MyApp
