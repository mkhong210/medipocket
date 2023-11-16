'use client'
import MediItem from '@/app/components/MediItem'
import React, { useState } from 'react'

function page() {
	const [modal, setmodal] = useState(false);

	return (
		<div>search
			<p onClick={()=>{setmodal(true)}}>afeaefafeaef</p>
								{
						modal? 
						<MediItem close={()=>{setmodal(false)}}/>
						:""
					}
		</div>
	)
}

export default page