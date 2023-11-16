import React from "react";
import style from "./detailMedi.module.scss";
import Header from "@/app/components/Header";

function page() {
  return (
    <>
    <Header name="처방전" />
    <div className={style.contentsALL}>
      <div className={style.top}>
        <div className={style.top_div}>
          <b>목감기</b>
          <p>진단을 기록해주세요!</p>
        </div>
        <ul className={style.prescription}>
          <li>
            <figure>
              <img src="/asset/icon/ICON_1.png" />
            </figure>
            <div>
              <b>병원명</b>
              <div>
                <p>서울OO이비인후과</p>
                <p>
                  <span>2023-10-30</span>방문
                </p>
              </div>
            </div>
          </li>
          <li>
            <figure>
              <img src="/asset/icon/ICON_1.png" />
            </figure>
            <div>
              <b>증상</b>
              <div>
                <p>오한, 떨림, 콧물</p>
              </div>
            </div>
          </li>
          <li>
            <figure>
              <img src="/asset/icon/ICON_1.png" />
            </figure>
            <div>
              <b>복용기간</b>
              <div>
                <p>2023-10-30~2023-11-02</p>
                <p>(6)일 복용</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={style.Low}>
        <div className={style.Low_div}>
          <figure>
            <img src="/asset/icon/ICON_2.png" />
          </figure>
          <b>복용약</b>
        </div>
        <ul className={style.drugList}>
          <li>
            <div>타이레놀정500밀리그람(아세트아미노펜)</div>
            <figure>
              <img src="/asset/icon/ICON_arrow_right.png" />
            </figure>
          </li>
        </ul>
        <div className={style.drugmemo}>
          <div>
            <figure>
              <img src="/asset/icon/ICON_2.png" />
            </figure>
            <b>복용일기</b>
          </div>
          <form>
            <input type="text" placeholder="복용 후 상태를 작성해주세요!" />
          </form>
          <ul>
          <li>
              <div>2023-10-30</div>
              <p>되게 졸렸당</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>

  );
}

export default page;
