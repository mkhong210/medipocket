"use client"
import React, { useEffect, useState } from 'react'
import style from './savePresc.module.scss'
import BtmNavi from '@/app/components/BtmNavi'
import Header from '@/app/components/Header'
import axios from 'axios'
import MediItem from '@/app/components/MediItem'

function page() {
	const [members, setMembers] = useState();
	const [modal, setmodal] = useState(false);

	
	const savePresc = () => {
		const name = document.getElementById('input_name').value;
		const hospital = document.getElementById('input_hospital').value;
		const syptom = document.getElementById('input_syptom').value;
		const start = document.getElementById('input_startDate').value;
		const end = document.getElementById('input_endDate').value;
		console.log(name, hospital, syptom, start, end)
	}

	const inserting = async () => {
		await axios.post(`/api/insert`, {"medicine":[{"meidID":"1234","mediName":"타이네놀"},{"mediID":"4567","mediName":"파스"}]})
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
							<input type='text' id='input_name' placeholder='진단명을 입력하세요'></input>
							<p className={style.input_title}>병원명</p>
							<input type='text' id='input_hospital' placeholder='진단 받으신 ‘병원명’ 또는 ‘개인’ 을 입력해주세요.'></input>
							<p className={style.input_title}>증상</p>
							<input type='text' id='input_syptom' placeholder='어떠한 증상이 있으셨나요?'></input>
							<p className={style.input_title}>복용기간</p>
							<div className={style.input_date}>
								<input type='date' id='input_startDate'></input>
								<p>-</p>
								<input type='date' id='input_endDate'></input>
							</div>
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
						<button className={style.presc_saveBtn} onClick={savePresc}>
							<p>저장하기</p>
						</button>
				</div>
			</section>
			<BtmNavi />
		</>
	)
}

export default page