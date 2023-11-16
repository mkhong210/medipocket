import React, { useEffect, useState } from "react";
import style from "./detailMedi.module.scss";
import Header from "@/app/components/Header";

function page({parms}) {
  const [Ddata, setDdata] = useState([]);

  const madiDetail = () => {
    axios.get(`https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=kchW%2FinovxOaPimbytjUfP5PgKg1NOqtx3o1O%2BVLS98jxZB2guWNxaxcmGNSlSARyrfb%2BVOfOBZn8FcgYqsKxg%3D%3D&itemSeq=${parms}&type=json`)
      .then(function (respons) {
        setDdata(respons.data.body.items);
      })
  }

  useEffect(() => {
    madiDetail();
  }, [])


  return (
    <div>{Ddata}</div>
  );
}

export default page;
