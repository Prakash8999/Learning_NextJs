
import Link from 'next/link'
import React from 'react'
import SearchBar from './component/client/SearchBar'

const header = () => {

	return (
		<nav className='flex justify-center items-center bg-cyan-300 p-4 gap-x-20'>
			<Link href={'/'}>
				Home
			</Link>
			<Link href={'/about'}>
				About
			</Link>
			<Link href={'/contact'}>
				Contact
			</Link>

			<SearchBar />
		</nav>
	)
}

export default header