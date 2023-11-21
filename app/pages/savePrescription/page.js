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
			<section className={style.save_presc}>
				<div className={style.input_wrap}>
					<form>
						<div className={`inner ${style.input_top}`}>
							<p className={style.input_title}>진단명</p>
							<input type='text' placeholder='진단명을 입력하세요'></input>
							<p className={style.input_title}>병원명</p>
							<input type='text' placeholder='진단 받으신 ‘병원명’ 또는 ‘개인’ 을 입력해주세요.'></input>
							<p className={style.input_title}>증상</p>
							<input type='text' placeholder='어떠한 증상이 있으셨나요?'></input>
							<p className={style.input_title}>복용기간</p>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								{/* <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} /> */}
								{/* <DateRangePicker /> */}
								{/* <MobileDatePicker />
								<MobileDatePicker /> */}
							</LocalizationProvider>
						</div>
					</form>
					<div className={`inner ${style.medi_wrap}`}>
						<p className={style.input_title}>복용약</p>
						<button onClick={() => setmodal(true)} className={style.save_btn}>
							<img src='/asset/common/ICON_plus.png'/>약 추가하기
						</button>
						<ul>
							<li></li>
						</ul>
					</div>
					{
						modal? 
						<MediItem close ={()=>setmodal(false)}/>
						:""
					}
				</div>
			</section>
			<BtmNavi />
		</>
	)
}

export default page