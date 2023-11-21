"use client"
import axios from "axios"
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext(null);
function Context({children}){
    const [search , setsearch] = useState("");
    const [data, setData] = useState([]);

    const dataFn = ()=>{
        if(search != ""){
            axios.get(`https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=kchW%2FinovxOaPimbytjUfP5PgKg1NOqtx3o1O%2BVLS98jxZB2guWNxaxcmGNSlSARyrfb%2BVOfOBZn8FcgYqsKxg%3D%3D&itemName=${search}&type=json`)
            .then(function(respons){
                setData(respons.data.body.items);            
            })
        }else{
            setData([])
        }
    }


    useEffect(()=>{
        dataFn()
    },[search])

    const value ={
        data,setData,search,setsearch
    }
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default Context