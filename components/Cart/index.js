import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { removeItem } from '../../redux/actions/cartActions'
import Checkout from './Checkout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Cart = props => {
	const [display, setDisplay] = useState(false)
	let content = ''
	let total = 0

	// props.cart.map(product => (total = total + parseFloat(product.price)))

	const toggleCart = () => {
		setDisplay(!display)
	}

	const removeFromCart = id => {
		// props.removeItem(id)
	}

	const totalAmount = <p>Total: €{total.toFixed(2)}</p>

	let secondTotalAmount = totalAmount

	const cartList = (
		<div className='cart__list'>
			<ul>
				{props.cart.map(product => (
					<li key={product.id}>
						{product.title} €{product.price} {product.amount}{' '}
						<button onClick={() => removeFromCart(product.id)}>x</button>
					</li>
				))}
			</ul>
			<hr />
			{totalAmount}
			<Checkout product={props.product} />
		</div>
	)

	display ? (content = cartList) : (content = '')
	display ? (secondTotalAmount = '') : (secondTotalAmount = totalAmount)

	return (
		<div className='cart'>
			<button className='cart__button' onClick={toggleCart}>
				<FontAwesomeIcon icon={faShoppingCart} />
			</button>
			{secondTotalAmount}
			{content}
		</div>
	)
}

const mapStateToProps = state => ({
	cart: state.cart.products
})

// const mapDispatchToProps = {
// 	removeItem: removeItem
// }

Cart.getInitialProps = async ({ store }) => {}

Cart.propTypes = {
	cart: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
