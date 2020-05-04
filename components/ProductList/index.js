import React from 'react'
import Product from './Product'

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
