import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";

export const metadata: Metadata = {
	title: "yume - oss developer jobs",
	description: "work in oss and get paid | simple and no BS job board",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={GeistMono.className}>
				<main className="container mx-auto max-w-2xl px-6 py-8">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
