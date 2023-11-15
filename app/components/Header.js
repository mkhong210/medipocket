import React from 'react'
import '../style/common.scss'

function Header({name}) {
	return (
		<header className='header'>
			<p>{name}</p>
		</header>
	)
}

export default Header