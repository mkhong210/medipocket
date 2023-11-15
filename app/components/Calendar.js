"use client"
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Cal() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
    <Calendar 
        locale='ko'
        onChange={onChange} value={value}
        formatDay={(locale, date) => {
          return date.getDate();
        }}
        tileContent = {({ date, view })=>{
          return date.getDate() == 31 ? <img src='/asset/common/ICON_search.png'></img> : <div></div>
        }}
      />
    </div>
  )
}

export default Cal