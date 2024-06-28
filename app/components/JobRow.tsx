import Image from "next/image";

const JobRow = () => {
	return (
		<div className="p-3 border-2 text-gray-600 bg-gray-50 rounded shadow-sm flex gap-4">
			<div className="content-center">
				<Image
					src={"/favicon.png"}
					alt="vercel"
					width={50}
					height={50}
					className="size-12"
				/>
			</div>
			<div className="grow">
				<div>Vercel</div>
				<div>Design Engineer</div>
				<div>Remote &middot; US &middot; Full-time</div>
			</div>
			<div className="content-end">1 week ago</div>
		</div>
	);
};

export default JobRow;
