import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Head from 'next/head'
import Snipcart from '../Snipcart'

const Layout = props => {
	return (
		<>
			<Head>
				<title>E-shop</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='main'>
				<Snipcart />
				{props.children}
			</main>

			<Footer />
		</>
	)
}

export default Layout
