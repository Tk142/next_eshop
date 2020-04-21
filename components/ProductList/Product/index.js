import React from 'react'
import './index.scss'

const Product = props => {
	const { id, name, description, price } = props.product
	return (
		<div className='product'>
			<div className='product__information'>
				<h2 className='product__title'>{name}</h2>
				<p className='product__description'>{description}</p>
				<div className='product__input'>
					<p>€{price}</p>
					<input type='number' placeholder='0'></input>
					<button
						className='button'
						// onClick={() => props.addItem(id, name, price)}
					>
						Add to cart
					</button>
				</div>
			</div>
			<img
				className='product__image'
				src={props.product.image}
				alt='product'
				className='product__image'
			/>
		</div>
	)
}

export default Product
