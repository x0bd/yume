import Image from "next/image";
import { TiHeart, TiHeartOutline } from "react-icons/ti";

const JobRow = () => {
	return (
		<>
			<div className="p-3 border-2 text-gray-600 bg-gray-50 rounded shadow-sm relative">
				<div className="absolute top-2 right-2">
					{/* <TiHeart /> */}
					<TiHeartOutline />
				</div>
				<div className="flex grow gap-4">
					<div className="content-center">
						<Image
							src={"/favicon.png"}
							alt="vercel"
							width={50}
							height={50}
						/>
					</div>
					<div className="grow sm:flex">
						<div className="grow">
							<div className="text-gray-600 text-sm font-medium">
								Vercel
							</div>
							<div className="font-bold mb-1">
								Design Engineer
							</div>
							<div className="text-gray-500 text-sm">
								Remote &middot; San Francisco, US &middot;
								Full-time
							</div>
						</div>
						<div className="content-end text-gray-500 text-xs">
							5 days ago
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobRow;
