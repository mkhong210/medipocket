"use client"
import style from './style/page.module.scss'
import { useRouter } from 'next/navigation';
export default function Home() {
	const router = useRouter();
	setTimeout(() => router.push('/pages/kakaologin'), 2000);
	return (
		<>
			<div className={style.splash}>
				<div className={style.splash_bgImg}>
					<div className={style.splash_contents}>
						<div className={style.splash_img}>
							<img src='/asset/image/splash/medipocket_icon.png'/>
						</div>
						<div className={style.splash_txt}>
							<p>오늘 약은 챙겨드셨나요?</p>
							<h1>메디포켓</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
