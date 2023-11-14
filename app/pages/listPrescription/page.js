"use client"
import React, { useEffect, useState } from 'react'
import style from './listPresc.module.scss'
import BtmNavi from '@/app/components/BtmNavi'
import Header from '@/app/components/Header'
import PrescItem from '@/app/components/PrescItem'
import Link from 'next/link'

function page() {
	const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth() + 1);
		console.log(year, month);
  }, [year, month]);

	return (
		<>
			<Header name='처방전' />
			<section className={`inner ${style.presc_list}`}>
				<div className={style.date_month}>
					<div className={style.month}>
						<p>{year}.{month}</p>
						<button className={style.calendar_btn}>
							<img src='/asset/icon/ICON_calendar.png' />
						</button>
					</div>
					<p className={style.month_desc}>월별 기준으로 표시됩니다.</p>
				</div>
				<div className={style.item_wrap}>
					<PrescItem />
					<PrescItem />
					<PrescItem />
				</div>
				<div className={style.save_btn_wrap}>
					<Link href='/pages/savePrescription' className={style.save_btn}>
						<img src='/asset/icon/ICON_saveBtn.png' alt='저장 버튼 아이콘' />
					</Link>
				</div>
			</section>
			<BtmNavi />
		</>
	)
}

export default page