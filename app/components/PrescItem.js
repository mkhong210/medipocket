import React from 'react'
import style from '../pages/listPrescription/listPresc.module.scss'

function PrescItem() {
	return (
		<div className={style.prescItem}>
			<div className={style.title}>
				<p>목감기</p>
				<img src='/asset/icon/ICON_arrow_right.png' alt='오른쪽 화살표' />
			</div>
			<div className={style.desc}>
				<p className={style.hospital}>탑 이비인후과</p>
				<p className={style.date}>2023.10.31 진료</p>
			</div>
		</div>
	)
}

export default PrescItem