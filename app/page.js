"use client"
import style from './style/page.module.scss'
import { useRouter } from 'next/navigation';
import { useContext} from 'react';
export default function Home() {
	setTimeout(() => router.push('/pages/kakaologin'), 2000);
	return (
		<>
			<h1>splash</h1>
		</>
	)
}
