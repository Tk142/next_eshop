import React, { Fragment } from 'react'
import Head from 'next/head'
import './index.scss'

const Snipcart = () => {
	return (
		<Fragment>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdn.snipcart.com/themes/v3.0.9/default/snipcart.css'
				/>
			</Head>
			<div
				id='snipcart'
				data-api-key='NDBlMWQxODktNzFkZS00MDkzLWI3NjgtNDMwN2QyODVmOWExNjM3MTc4MDk0MzYyOTQ4Njk4'
				hidden
			>
				<script src='https://cdn.snipcart.com/themes/v3.0.9/default/snipcart.js'></script>
			</div>
		</Fragment>
	)
}

export default Snipcart
