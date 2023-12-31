"use client";
import React from "react";
import style from "./splashslide.module.scss";

import { Swiper,SwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

function page() {
  return (
    <div className={style.splashslide}>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className={style.splashslide_contents1}>
            <div className={style.splashslide1_img}>
              <img src="/asset/image/splash/Splash_slide1.png" />
            </div>
            <div className={style.splashslide_txt}>
              <b>처방받으신 약의 상세정보가 궁금하신가요?</b>
              <div className={style.splashslide_txt_p}>
                <p>약 검색을 통해 약의 정보를</p>
                <p>알 수 있습니다!</p>
              </div>
            </div>
            {/* <div className={style.splash_skip}>
              <p>건너뛰기</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.splashslide_contents2}>
            <div className={style.splashslide2_img}>
              <img src="/asset/image/splash/Splash_slide2.png" />
            </div>
            <div className={style.splashslide_txt}>
              <b>이전 처방기록을 쉽게 볼 수 있습니다!</b>
              <div className={style.splashslide_txt_p}>
                <p>처방기록과 약에 대한</p>
                <p>부작용 등을 기록하여 담당의에게</p>
                <p>쉽게 전달할 수 있습니다.</p>
              </div>
            </div>
            <div className={style.splashslide_next}>
              <a href="/pages/main">다음</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default page;
