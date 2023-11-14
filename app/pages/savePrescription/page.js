import React from 'react'
import style from './savePresc.module.scss'
import BtmNavi from '@/app/components/BtmNavi'
import Header from '@/app/components/Header'

function page() {
	return (
		<>
			<Header name='처방전 등록' />
			<section className={`inner ${style.save_presc}`}>
				<div className={style.input_wrap}>
					<form>
						<p>진단명</p>
						<input type='text' placeholder='진단명을 입력하세요'></input>
						<p>병원명</p>
						<input type='text' placeholder='진단 받으신 ‘병원명’ 또는 ‘개인’ 을 입력해주세요.'></input>
						<p>증상</p>
						<input type='text' placeholder='어떠한 증상이 있으셨나요?'></input>
					</form>
				</div>
			</section>
			<BtmNavi />
		</>
	)
}

export default page