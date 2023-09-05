'use client'
import React from 'react'
import {useParams} from 'next/navigation'

const page = ({params}) => {
console.log(params);
	return (
	<div>Dyanamic Routing: {params.id}</div>
  )
}

export default page