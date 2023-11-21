import Context from './components/Context'
import './style/globals.scss'
import './style/reset.scss'

export const metadata = {
	title: '메디포켓',
	description: 'MediPocket',
}

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
			</head>
			<body>
				<div className='medipocket'>
					<main>
						<Context>
						{children}
						</Context>
					</main>
				</div>
			</body>
		</html>
	)
}
