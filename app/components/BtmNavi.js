import React from 'react'
import '../style/common.scss'
import Link from 'next/link'

function BtmNavi() {
	return (
		<footer>
			<div className='btm_navi inner'>
				<div className='item_wrap'>
					<Link href='/pages/search' className='navi_item'>
						<img src='/asset/common/ICON_search.png' alt='검색 아이콘' />
						<p>약검색</p>
					</Link>
				</div>
				<div className='item_wrap'>
					<Link href='/pages/main' className='navi_item'>
						<img src='/asset/common/ICON_home.png' alt='홈 아이콘' />
						<p>홈</p>
					</Link>
				</div>
				<div className='item_wrap'>
					<Link href='/pages/listPrescription' className='navi_item'>
						<img src='/asset/common/ICON_prescription.png' alt='처방전 아이콘' />
						<p>처방전</p>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default BtmNavi