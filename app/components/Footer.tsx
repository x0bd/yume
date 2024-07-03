import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";

const Footer = () => {
	return (
		<section className={GeistSans.className}>
			<div className="my-12 container space-y-9 max-w-[85%] mx-auto">
				<div className="max-w-[90%] mx-auto">
					<h3 className="text-xl font-medium text-center">
						set & forget with autopilot
					</h3>
					<div className={GeistMono.className}>
						<h4 className="text-xs font-bold text-center text-gray-600">
							only desired tech & salary + unsub anytime + zero
							spam
						</h4>
					</div>
				</div>
				<div className="space-y-1">
					<p className="text-xs text-gray-600 font-semibold">
						EMAIL ME COMPANIES
					</p>
					<form className={GeistMono.className}>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="your-email@google.com"
								className="border w-full py-3 px-3 bg-gray-200 text-sm rounded-sm border-none focus:outline-none"
							/>
							<button className="bg-gray-900 text-sm text-gray-100 rounded-sm py-2 px-4">
								subscribe
							</button>
						</div>
					</form>
				</div>
				<div className="mx-auto max-w-[95%] container">
					<Link
						href="https://x.com/4kimov/status/1766595027407442378"
						target="_blank"
						className={GeistMono.className}
					>
						<p className="my-5 text-center text-xs text-gray-600 px-1 py-2 bg-inherit underline underline-offset-2">
							huge fan of fossfox btw
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;
