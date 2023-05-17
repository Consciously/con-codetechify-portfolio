import '../globals.css';
import { Montserrat, Space_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

export const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
});
export const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata = {
	title: 'Create Next App',
	description: 'My portfolio website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`text-white bg-slate-700 ${montserrat.className}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
