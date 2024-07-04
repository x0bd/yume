import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "yume - oss developer jobs",
	description: "work in oss and get paid",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={GeistMono.className}>
				<main className="container mx-auto max-w-2xl max-h-full flex flex-col justify-evenly px-6 py-8">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
