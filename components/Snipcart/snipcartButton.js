import React from 'react'

const SnipcartButton = props => {
	return (
		<button
			className='button snipcart-add-item'
			data-item-id={props.product.id}
			data-item-name={props.product.name}
			data-item-price={props.product.price}
			data-item-image={props.product.image}
			data-item-quantity={props.amount}
			data-item-url='/'
		>
			Add to cart
		</button>
	)
}
export default SnipcartButton
