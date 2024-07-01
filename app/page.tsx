import Image from "next/image";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Hero />
			<Jobs />
			<Footer />
		</>
	);
}
