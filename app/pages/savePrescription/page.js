<<<<<<< HEAD
"use client"
import React, { useEffect, useState } from 'react'
import style from './savePresc.module.scss'
import BtmNavi from '@/app/components/BtmNavi'
import Header from '@/app/components/Header'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import axios from 'axios'
import MediItem from '@/app/components/MediItem'
=======
import React from 'react'
import style from './savePresc.module.scss'
import BtmNavi from '@/app/components/BtmNavi'
import Header from '@/app/components/Header'
>>>>>>> 72973a4d75e8dc0787146016142fd36274c69e6d

function page() {
	const [members, setMembers] = useState();
	const [modal, setmodal] = useState(false);

	const inserting = async () => {
		await axios.post(`/api/insert`, { id: "hehe", password: "wow" })
			.then(res => {
				console.log(res.data)
			})
		memberLoading();
	}

	const memberLoading = async () => {
		await axios.get(`/api/insert`)
			.then(res => {
				setMembers(res.data);
			})
	}

	useEffect(() => {
		// inserting()
	}, [])


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
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							{/* <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} /> */}
							{/* <DateRangePicker /> */}
							<MobileDatePicker />
							<MobileDatePicker />
						</LocalizationProvider>

						<p>복용약</p>
						<button onClick={setmodal(true)}><img src='/public/asset/common/ICON_plus.png'/>약추가하기</button>
						<ul>
							<li></li>
						</ul>
					</form>
					{
						modal? 
						<MediItem close = {()=>{setmodal(false)}}/>
						:""
					}
				</div>
			</section>
			<BtmNavi />
		</>
	)
}

export default page