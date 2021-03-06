import React from 'react'
import Link from 'next/link'

const Nav = () => {
	return (
		<nav className='navigation'>
			<Link href='/'>
				<a href='/'>Home</a>
			</Link>
			<Link href='/catalog'>
				<a href='/catalog'>Catalog</a>
			</Link>
			<Link href='/contactUs'>
				<a href='/contactUs'>Contact Us</a>
			</Link>
		</nav>
	)
}

export default Nav
