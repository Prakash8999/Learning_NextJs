'use client'
import React, { useState } from 'react'

const SearchBar = () => {
	const [query, setQuery] = useState('')
	console.log(query);
	return (
		<input type="search" value={query} id="" onChange={(e) => {
			setQuery(e.target.value)
		}} />
	)
}

export default SearchBar