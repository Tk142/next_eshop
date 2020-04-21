import React from 'react'
import Link from 'next/link'
import './index.scss'

const Nav = () => {
	return (
		<nav className='navigation'>
			<Link href='/'>Home</Link>
			<Link href='/catalog'>Catalog</Link>
			<Link href='/contacts'>Contacts</Link>
		</nav>
	)
}

export default Nav
