import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const Hero = () => {
	return (
		<section className={GeistSans.className}>
			<div className="py-12 space-y-20 container max-w-[85%] mx-auto">
				<h1 className="text-5xl bold text-center">
					work in open-source <br /> & get paid for it
				</h1>
				<div className="space-y-2">
					<p className="text-xs text-gray-600 font-semibold">
						WHAT DO YOU WANT TO WORK WITH?
					</p>
					<form className={GeistMono.className}>
						<div className="flex gap-2">
							<input
								type="search"
								placeholder="Rust, Tensorflow, WebGPU, React..."
								className="border w-full py-3 px-3 bg-gray-100 text-sm rounded-sm border-none focus:border-none"
							/>
							<button className="bg-gray-900 text-sm text-gray-100 rounded-sm py-2 px-4">
								Search
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Hero;
