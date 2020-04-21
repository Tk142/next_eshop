import React from 'react'
import Link from 'next/link'

const Nav = () => {
	return (
		<nav>
			<Link href='/'>Home</Link>
			<Link href='/catalog'>Catalog</Link>
			<Link href='/contacts'>Contacts</Link>
		</nav>
	)
}

export default Nav
