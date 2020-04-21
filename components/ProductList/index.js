import React from 'react'
import Product from './Product'
import './index.scss'

const ProductList = props => {
	return (
		<div className='productList'>
			{props.products.map(product => (
				<Product product={product} key={product.id} />
			))}
		</div>
	)
}
export default ProductList
