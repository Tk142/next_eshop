import React, { useState } from 'react'
import SnipcartButton from '../../Snipcart/snipcartButton'

const Product = props => {
	const { id, name, description, price } = props.product
	const [amount, setAmount] = useState('')

	const handleChange = event => {
		setAmount(event.target.value)
	}

	return (
		<div className='product'>
			<div className='product__information'>
				<h2 className='product__title'>{name}</h2>
				<p className='product__description'>{description}</p>
				<div className='product__input'>
					<p>€{price}</p>
					<input
						onChange={handleChange}
						type='number'
						placeholder='0'
						value={amount}
					></input>
					<SnipcartButton product={props.product} amount={amount} />
				</div>
			</div>
			<img className='product__image' src={props.product.image} alt='product' />
		</div>
	)
}

export default Product
