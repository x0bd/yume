import Link from "next/link";

const Header = () => {
	return (
		<header className="flex items-center justify-between">
			<Link href="/" className="font-bold text-xl">
				本YUME
			</Link>
			<nav className="flex gap-2">
				<Link
					href={"/login"}
					className="bg-gray-200 shadow-sm rounded-sm text-sm py-2 px-4"
				>
					Login
				</Link>
				<Link
					href={"/new-listing"}
					className="bg-gray-900 shadow-sm text-sm rounded-sm text-gray-100 py-2 px-4"
				>
					Post a job for free
				</Link>
			</nav>
		</header>
	);
};

export default Header;
