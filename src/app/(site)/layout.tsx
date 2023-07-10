import '../globals.css';
import { Roboto_Mono, Fira_Mono } from 'next/font/google';
import { FilterProvider } from './context/FilterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { ReactNode } from 'react';

export const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
});
export const firaMono = Fira_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata = {
	title: 'codetechify.com',
	description: 'This is my portfolio site',
};

interface IProps {
	children: ReactNode;
	projectModal: ReactNode;
}

export default function RootLayout({ children, projectModal }: IProps) {
	return (
		<html lang='en'>
			<body className={`text-white bg-slate-700 ${robotoMono.className}`}>
				<FilterProvider>
					<Header />
					<main>{children}</main>
					{projectModal}
					<Footer />
				</FilterProvider>
			</body>
		</html>
	);
}
