import React from 'react'
import Head from 'next/head'

const Snipcart = () => {
	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css'
				/>
				<script src='https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js'></script>
			</Head>
			<div
				id='snipcart'
				data-api-key='NDBlMWQxODktNzFkZS00MDkzLWI3NjgtNDMwN2QyODVmOWExNjM3MTc4MDk0MzYyOTQ4Njk4'
				data-config-add-product-behavior='none'
			></div>
		</>
	)
}

export default Snipcart
