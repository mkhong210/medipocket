"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import KakaoLogin from "react-kakao-login";

const MyKakaoLogin = () => {
  const router = useRouter();
  const responseKakao = (res) => {
    // res.profile에 사용자 정보가 들어 있습니다.
    console.log(res.profile.id);
    // 로컬 스토리지에 사용자 정보 저장
    localStorage.setItem("kakaoProfile", JSON.stringify(res.profile));
    router.push('/pages/splashslide');
  };
  return (
    <>
      <KakaoLogin
        token={process.env.NEXT_PUBLIC_KAKAO_API_KEY}
        onSuccess={responseKakao}
        onFail={console.error}
        onLogout={console.info}
        render={({ onClick }) => {
          return (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
            >
              <img src='/asset/image/splash/kakao_login1.png'/>
            </a>
          );
        }}
      />
    </>
  );
};

export default MyKakaoLogin;
