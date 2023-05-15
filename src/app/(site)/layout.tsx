import '../globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang='en' className='bg-gray-900'>
			<body className='text-white'>
				<Header />
				<main className='mx-auto px-4 py-8 max-w-7xl'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
