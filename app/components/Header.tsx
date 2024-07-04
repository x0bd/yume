import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Header = async () => {
	const { user } = await getUser();
	const signInUrl = await getSignInUrl();

	return (
		<header className="flex items-center justify-between">
			<Link href="/" className="font-bold text-xl">
				夢YUME
			</Link>
			<nav className="flex gap-2">
				{!user && (
					<Link
						href={signInUrl}
						className="bg-gray-200 shadow-sm rounded-sm text-sm py-2 px-4"
					>
						Login
					</Link>
				)}
				{user && (
					<form
						action={async () => {
							"use server";
							await signOut();
						}}
					>
						<button
							type="submit"
							className="bg-gray-200 shadow-sm rounded-sm text-sm py-2 px-4"
						>
							Logout
						</button>
					</form>
				)}

				<Link
					href={"/new-listing"}
					target="_blank"
					className="bg-gray-900 shadow-sm text-sm rounded-sm flex gap-1 items-center text-gray-100 py-2 px-4"
				>
					Post a job
					<span>
						<GoArrowUpRight />
					</span>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
