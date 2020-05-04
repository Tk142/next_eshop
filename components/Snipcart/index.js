import React from 'react'
import Head from 'next/head'
import snipcartConfig from './config'

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
				data-api-key={snipcartConfig.apikey}
				data-config-add-product-behavior='none'
			></div>
		</>
	)
}

export default Snipcart
