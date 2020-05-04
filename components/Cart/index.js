import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
	return (
		<div className='Cart'>
			<button className='snipcart-checkout'>
				<FontAwesomeIcon icon={faShoppingCart} />
			</button>
			<span className='snipcart-total-price'></span>
		</div>
	)
}

export default Cart
