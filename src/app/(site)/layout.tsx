import '../globals.css';
import { Roboto_Mono, Fira_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

export const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
});
export const firaMono = Fira_Mono({
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
			<body className={`text-white bg-slate-700 ${robotoMono.className}`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
