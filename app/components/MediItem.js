"use client"
import React, { useContext, useEffect, useRef } from 'react'
import { MyContext } from './Context'
import '../style/model.scss'
import Link from 'next/link';

function MediItem({close}) {
	const { data, search, setsearch } = useContext(MyContext);
	const input_teg = useRef();


	const imgFilter = (imgURL) => {
		if (imgURL == "" || imgURL == undefined) {
			return '/asset/image/pill/IMAGE_pill.png'
		} else {
			return imgURL
		}
	}
	const enterKeyDown = (value) => {
		setsearch(value)
	}


	return (
		<div className='model'>
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
									<figure>
										<img src={imgFilter(item.itemImage)} />
										<figcaption><p>{item.entpName}</p><p>{item.itemName}</p>
										</figcaption>
									</figure>
											<button><img src='/asset/icon/ICON_add.png' />추가하기</button>
								</li>
							))
							:
							<>
								<li><b>검색어와 일치하는 약을 찾을 수 없습니다.</b>
									<p>다른 검색어를 입력하시거나, <br />철자를 확인해주세요!</p></li>

								<li><b>약을 직접 추가하시겠습니까?</b>
									<p><img src='/asset/common/ICON_plus.png'/>{search}</p>
									<button onClick={()=>close()}>약 추가하기</button>
								</li>
							</>
					}
				</ul>
			</div>
		</div>
	)
}

export default MediItem