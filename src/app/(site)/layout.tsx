import '../globals.css';
import { Roboto_Mono, Fira_Mono } from 'next/font/google';
import { FilterProvider } from './context/FilterContext';
import { ProjectProvider } from './context/ProjectContext';
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
	modal: ReactNode;
}

export default function RootLayout({ children, modal }: IProps) {
	return (
		<html lang='en'>
			<body className={`text-white bg-slate-700 ${robotoMono.className}`}>
				<FilterProvider>
					<ProjectProvider>
						<Header />
						<main>{children}</main>
						{modal}
						<Footer />
					</ProjectProvider>
				</FilterProvider>
			</body>
		</html>
	);
}
