'use client'
import React, { useEffect, useState } from "react";
import style from "./detailMedi.module.scss";
import Header from "@/app/components/Header";
import axios from "axios";
import BtmNavi from "@/app/components/BtmNavi";

function page({params}) {
	const {id} = params
	const [Ddata, setDdata] = useState([]);
	console.log(id);

	const madiDetail = () => {
		axios.get(`https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=kchW%2FinovxOaPimbytjUfP5PgKg1NOqtx3o1O%2BVLS98jxZB2guWNxaxcmGNSlSARyrfb%2BVOfOBZn8FcgYqsKxg%3D%3D&itemSeq=${id}&type=json`)
			.then(function (respons) {
				setDdata(respons.data.body.items);
				console.log(respons.data.body.items);
			})
	}
	console.log(Ddata);

	const imgFilter = (imgURL) => {
		if (imgURL == "" || imgURL == undefined) {
			return '/asset/image/pill/IMAGE_pill.png'
		} else {
			return imgURL
		}
	}

	useEffect(() => {
		madiDetail();
	},[])

	if(!Ddata.length){return <p>로딩중</p>}
	else 
	return (
	<>
		<Header name="약 상세정보"/>
		<div className={style.DetailMedi}>
			<figure>
				<img src={imgFilter(Ddata[0].itemImage)}/>
				<figcaption>
					<p>{Ddata[0].entpName}</p>
					<b>{Ddata[0].itemName}</b>
				</figcaption>
			</figure>

				<ul>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>효능</p>
						<p>{Ddata[0].efcyQesitm}</p>
					</li>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>복용전 주의사항</p>
						<p>{Ddata[0].atpnWarnQesitm == undefined ? '특이 사항 없음': Ddata[0].atpnWarnQesitm}</p>
					</li>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>사용 방법</p>
						<p>{Ddata[0].useMethodQesitm}</p>
					</li>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>보관법</p>
						<p>{Ddata[0].depositMethodQesitm}</p>
					</li>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>부작용</p>
						<p>{Ddata[0].seQesitm == undefined ? '특이 사항 없음': Ddata[0].seQesitm}</p>
					</li>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>주의사항</p>
						<p>{Ddata[0].atpnQesitm == undefined ? '특이 사항 없음': Ddata[0].atpnQesitm}</p>
					</li>
					<li>
						<p><img src="/asset/icon/ICON_Exclamation.png"/>복용 중 주의 식품 </p>
						<p>{Ddata[0].intrcQesitm == undefined ? '특이 사항 없음': Ddata[0].intrcQesitm}</p>
					</li>
				</ul>
		</div>
		<BtmNavi />
	</>
	);
}

export default page;
