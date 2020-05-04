import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import ProductList from '../../components/ProductList'
import Spinner from '../../components/Spinner'

const useProducts = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		db.collection('products').onSnapshot(snapchot => {
			const newProducts = snapchot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}))
			setProducts(newProducts)
		})
	}, [])
	return products
}

const Catalog = () => {
	const products = useProducts()
	let content = null

	products.length !== 0
		? (content = (
				<>
					<h1 className='title'>Catalog</h1> <ProductList products={products} />
				</>
		  ))
		: (content = <Spinner />)

	return <div className='container'>{content}</div>
}

export default Catalog
