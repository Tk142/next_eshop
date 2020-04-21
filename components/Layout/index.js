import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Head from 'next/head'
import './index.scss'

const Layout = props => {
	return (
		<Fragment>
			<Head>
				<title>E-shop</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className='main'>{props.children}</main>
			<Footer />
		</Fragment>
	)
}

export default Layout
