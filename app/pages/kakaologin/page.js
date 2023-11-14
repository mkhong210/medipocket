import React from 'react'
import style from './kakaologin.module.scss'
import KakaoLogin from '../../components/MyKakaoLogin'
function page() {
  return (
    <>
       <div className={style.kakaoLogin}>
            <div className={style.kakaoLogin_bgImg}>
                <div className={style.kakaoLogin_contents}>
                    <div className={style.kakaoLogin_img}>
                        <img src='/asset/image/splash/medipocket_icon.png'/>
                    </div>
                    <div className={style.kakaoLogin_txt}>
                        <h1>메디포켓</h1>
                        <p>처방정보를 포켓에</p>
                        <p>담아보세요!</p>
                    </div>
                    <div className='kakaoLogin_btn'>
                        <KakaoLogin/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page