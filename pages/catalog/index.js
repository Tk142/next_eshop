import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { db } from '../../firebase'
import ProductList from '../../components/ProductList'

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
	console.log(products)
	return (
		<div className='container'>
			<Layout>
				<h1>Catalog</h1>
				<ProductList products={products} />
			</Layout>
		</div>
	)
}

export default Catalog
