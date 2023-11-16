'use client'
import { MyContext } from '@/app/components/Context';
import MediItem from '@/app/components/MediItem'
import Link from 'next/link';
import React, { useContext, useRef, useState } from 'react'

function page() {
	const { data, setsearch } = useContext(MyContext);
	const input_teg = useRef();

	const enterKeyDown = (value) => {
		setsearch(value)
	}

	const imgFilter = (imgURL) => {
		if (imgURL == "" || imgURL == undefined) {
			return '/asset/image/pill/IMAGE_pill.png'
		} else {
			return imgURL
		}
	}

	return (
		<div>
			<div className='search'>
				<input ref={input_teg} type='search' placeholder='제품명을 입력해주세요.' onKeyDown={(e) => { e.key == 'Enter' ? enterKeyDown(e.target.value) : ""; }}></input>
				<button onClick={()=>console.log(input_teg.current.value = "")}><img src='/asset/common/ICON_minus2.png' /></button>
			</div>

			<div className='list'>
				<ul>
					{
						data ?
							data.map((item) => (
								<li key={item.itemSeq} onClick={()=>{close()}}>
									<Link href={`/pages/detailMedicine/${item.itemSeq}`}>
									<figure>
										<img src={imgFilter(item.itemImage)} />
										<figcaption><p>{item.entpName}</p><p>{item.itemName}</p>
										</figcaption>
									</figure>
											<button><img src='/asset/icon/ICON_arrow_right.png' /></button>
									</Link>
								</li>
							))
							:
							<>
								<li><b>검색어와 일치하는 약을 찾을 수 없습니다.</b>
									<p>다른 검색어를 입력하시거나, <br />철자를 확인해주세요!</p></li>
							</>
					}
				</ul>
			</div>
		</div>
	)
}

export default page