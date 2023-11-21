import React from 'react'
import style from './main.module.scss'
import Cal from '@/app/components/Cal'

function page() {
	return (
		<div>
			<div className={style.head_bar}>
				<div className={style.head_name}>
					<p>권오성님</p>
				</div>
				<div className={style.head_logout}>
					<img src=''></img>
				</div>
			</div>
			<Cal/>
			<div className={style.slide_bar}>
				<div className={style.slide_bar_header}>
					<div className={style.date}>
						<p>2023년 11월 17일</p>
						<a>전체내역 보기<img src='/asset/icon/ICON_rightarrow.png'/></a>
					</div>
					<div className={style.medical}>
						<img src='/asset/icon/ICON_important'/>
						<p>오늘 약은 챙겨드셨나요?</p>
					</div>
				</div>
				<div className={style.medical_info}>
					<div className={style.medical_title}>
						<img src='/asset/image/pill/pill_red'></img>
						<p>감기약</p>
					</div>
					<div className={style.medical_date}>
						<p>2023.11.12~2023.11.18 (6)일 복용</p>
						<img src='/asset/icon/ICON_rightarrow.png'/>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default page