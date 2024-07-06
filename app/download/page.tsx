"use client";

import supabase from "../../supabase";
import Head from "next/head";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {
	const [selectedFile, setSelectedFile] = useState<File | undefined>(
		undefined
	);
	const [uploaded, setUploaded] = useState<string | null>(null);
	const inputRef = useRef(null);

	const handleUpload = async () => {
		if (selectedFile) {
			const filename = nanoid();

			const { data, error } = await supabase.storage
				.from("images")
				.upload(
					`${filename}.${selectedFile.name.split(".").pop()}`,
					selectedFile
				);

			if (error) {
				console.log("Error uploading file:", error.message);
			} else {
				const { data: file } = await supabase.storage
					.from("images")
					.getPublicUrl(data?.path);
				console.log(file);
				setUploaded(file?.publicUrl);
			}
		}
	};

	return (
		<>
			<div className="container mt-8">
				<div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
					<h1 className="text-3xl font-semibold">Upload File</h1>
					<input
						type="file"
						ref={inputRef}
						onChange={(e) => {
							setSelectedFile(e?.target?.files?.[0]);
						}}
					/>
					<button
						className="mt-5 bg-emerald-500 hover:bg-opacity-80 text-white rounded-sm px-4 py-2 duration-200"
						type="button"
						onClick={handleUpload}
					>
						Upload File
					</button>
					{uploaded && (
						<img src={uploaded} className="my-5 max-w-[400px]" />
					)}
				</div>
				<Head>
					<title>Uploaded File</title>
				</Head>
			</div>
		</>
	);
}
