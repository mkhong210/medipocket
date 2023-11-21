"use client"
import React, { useState , useEffect } from 'react'
import style from './main.module.scss'
import Cal from '@/app/components/Cal'
import BtmNavi from '@/app/components/BtmNavi'
import Draggable from 'react-draggable';
function page() {
	const [startY ,setStartY]=useState("");
	const [mouseOn,setMouseOn]=useState(false);

	const onStart =(e)=>{
		//마우스로 선택되었을때
		setStartY(e.clientY);
		setMouseOn(true);
	}
	const onDrag = (e)=>{
		//마우스를 움직일때 
		if(mouseOn){
			const currentY=e.clientY;
			const image = document.querySelector(`.${style.slide_bar}`);
			console.log(currentY,startY);
			if (currentY < startY) {
				// 위로 드래그할 때
				image.classList.add('click');
			} else {
				// 아래로 드래그할 때
				image.classList.remove('click');
			}
		}
	}
	const onStop = () => {
		setMouseOn(false);
		const image = document.querySelector(`.${style.slide_bar} img`);
		image.classList.remove('click');
	};

	
	useEffect(() => {
		document.addEventListener('mousemove', onDrag);
		return () => {
		  document.removeEventListener('mousemove', onDrag);
		};
	  }, [mouseOn]); 

	return (
		<div>
			<div className={style.head_bar}>
				<div className={style.head_name}>
					<p>권오성님</p>
				</div>
				<div className={style.head_logout}>
					<img src='/asset/icon/ICON_logout.png'></img>
				</div>
			</div>
			<Cal/>
			<Draggable
				axis="y"
				handle=".handle"
				defaultPosition={{x: 0, y: 0}}
				position={null}
				grid={[25, 25]}
				scale={1}
				onStart={onStart}
				onDrag={onDrag}
				onStop={onStop}
			>
				<div className={style.slide_bar}>
				<div className={style.slide_bar_contents}>
					<img src='/asset/icon/ICON_bar.png'></img>
					<div className={style.slide_bar_header}>
						<div className={style.date}>
							<p>2023년 11월 17일</p>
							<a>전체내역 보기<img src='/asset/icon/ICON_rightarrow.png'/></a>
						</div>
						<div className={style.medical}>
							<img src='/asset/icon/ICON_important.png'/>
							<p>오늘 약은 챙겨드셨나요?</p>
						</div>
					</div>
					<div className={style.medical_info}>
						<div className={style.medical_title}>
							<img src='/asset/image/pill/pill_red.png'></img>
							<p>감기약</p>
						</div>
						<div className={style.medical_date}>
							<p>2023.11.12~2023.11.18 <span>(6)일 복용</span></p>
							<img src='/asset/icon/ICON_rightarrow.png'/>
						</div>
					</div>
					<div className={style.medical_info}>
						<div className={style.medical_title}>
							<img src='/asset/image/pill/pill_green.png'></img>
							<p>감기약</p>
						</div>
						<div className={style.medical_date}>
							<p>2023.11.12~2023.11.18 <span>(6)일 복용</span></p>
							<img src='/asset/icon/ICON_rightarrow.png'/>
						</div>
					</div>
					<div className={style.medical_info}>
						<div className={style.medical_title}>
							<img src='/asset/image/pill/pill_blue.png'></img>
							<p>감기약</p>
						</div>
						<div className={style.medical_date}>
							<p>2023.11.12~2023.11.18 <span>(6)일 복용</span></p>
							<img src='/asset/icon/ICON_rightarrow.png'/>
						</div>
					</div>
				</div>
				
			</div>
			</Draggable>
			<BtmNavi/>
		</div>
	)
}

export default page