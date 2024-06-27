import Link from "next/link";

const Header = () => {
	return (
		<header className="flex items-center justify-between">
			<Link href="/" className="font-bold text-xl">
				YUME
			</Link>
			<nav className="flex gap-3">
				<Link href={"/login"} className="bg-gray-200 py-2 px-4">
					Login
				</Link>
				<Link
					href={"/new-listing"}
					className="bg-gray-900 text-gray-100 py-2 px-4"
				>
					Post a job for free
				</Link>
			</nav>
		</header>
	);
};

export default Header;
