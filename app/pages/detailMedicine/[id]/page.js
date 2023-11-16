'use client'
import React, { useEffect, useState } from "react";
import style from "./detailMedi.module.scss";
import Header from "@/app/components/Header";
import axios from "axios";

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
    <div>
      <Header name="약 상세정보"/>
      <figure>
        <img src={imgFilter(Ddata[0].itemImage)}/>
        <figcaption>
          <p>{Ddata[0].entpName}</p>
          <b>{Ddata[0].itemName}</b>
        </figcaption>

        <ul>
          <li>
            <p>효능</p>
            <textarea>{Ddata[0].efcyQesitm}</textarea>
          </li>
          <li>
            <p>복용전 주의사항</p>
            <textarea>{Ddata[0].atpnWarnQesitm}</textarea>
          </li>
          <li>
            <p>사용 방법</p>
            <textarea>{Ddata[0].useMethodQesitm}</textarea>
          </li>
          <li>
            <p>보관법</p>
            <textarea>{Ddata[0].depositMethodQesitm}</textarea>
          </li>
          <li>
            <p>부작용</p>
            <textarea>{Ddata[0].seQesitm}</textarea>
          </li>
          <li>
            <p>주의사항</p>
            <textarea>{Ddata[0].atpnQesitm}</textarea>
          </li>
          <li>
            <p>복용 중 주의 식품 </p>
            <textarea>{Ddata[0].intrcQesitm}</textarea>
          </li>
        </ul>
      </figure>
    </div>
  );
}

export default page;
