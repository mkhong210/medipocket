"use client"
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from '../pages/main/main.module.scss';
import '../style/main_calendar.scss'

function Cal() {
  const [value, onChange] = useState(new Date());

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return date.getMonth() !== new Date().getMonth();
    }
  };

  const tileContent = ({ date, view })=>{
    return date.getDate() == 28 ? 
    <div className='pillgroup'>
      <img src='/asset/image/pill/pill_red.svg'/> 
    </div>: <div></div>
  }

  return (
    <div className='calender inner'>
      <Calendar 
          calendarType="US"
          next2Label={null}
          prev2Label={null}
          locale='ko'
          onChange={onChange} 
          value={value}
          // tileDisabled={tileDisabled}
          formatDay={(locale, date) => {
            return date.getDate();
          }}
          tileContent = {tileContent}
          nextLabel={
            <img src="/asset/icon/ICON_Schedule_arrow_right.svg"/>
          }
          prevLabel={
            <img src="/asset/icon/ICON_Schedule_arrow_left.svg"/>
          }
        />
    </div>
  )
}

export default Cal