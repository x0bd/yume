"use client";

import { useState, useRef } from "react";
import {
	CitySelect,
	CountrySelect,
	StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import supabase from "../../supabase";
import { nanoid } from "nanoid";
import { GeistMono } from "geist/font/mono";

export default function JobForm() {
	const [countryId, setCountryId] = useState(0);
	const [stateId, setStateId] = useState(0);

	const [selectedProfile, setSelectedProfile] = useState<File | undefined>(
		undefined
	);
	const [selectedJobProfile, setSelectedJobProfile] = useState<
		File | undefined
	>(undefined);
	const [uploadedJobProfile, setUploadedJobProfile] = useState<string | null>(
		null
	);
	const [uploadedProfile, setUploadedProfile] = useState<string | null>(null);
	const inputRef = useRef(null);

	const handleProfileUpload = async () => {
		if (selectedProfile) {
			const filename = nanoid();

			const { data, error } = await supabase.storage
				.from("images")
				.upload(
					`${filename}.${selectedProfile.name.split(".").pop()}`,
					selectedProfile
				);

			if (error) {
				console.log("Error uploading file:", error.message);
			} else {
				const { data: file } = await supabase.storage
					.from("images")
					.getPublicUrl(data?.path);
				console.log(file);
				setUploadedProfile(file?.publicUrl);
			}
		}
	};

	const handleJobProfileUpload = async () => {
		if (selectedJobProfile) {
			const filename = nanoid();

			const { data, error } = await supabase.storage
				.from("images")
				.upload(
					`${filename}.${selectedJobProfile.name.split(".").pop()}`,
					selectedJobProfile
				);

			if (error) {
				console.log("Error uploading file:", error.message);
			} else {
				const { data: file } = await supabase.storage
					.from("images")
					.getPublicUrl(data?.path);
				console.log(file);
				setUploadedJobProfile(file?.publicUrl);
			}
		}
	};

	return (
		<form
			className="p-3 mt-8 flex flex-col gap-3 rounded border-2 border-gray-600"
			action=""
		>
			<h3 className="text-sm font-black">New Job Post</h3>
			<input
				className="focus:border-gray-600 text-gray-600 rounded w-full p-3 text-sm border-2 border-gray-400"
				placeholder="Job Title"
			/>

			<div className="grid md:lg:grid-cols-2 gap-2">
				<div className="flex gap-3">
					<label
						className="text-sm text-gray-800 "
						htmlFor="location"
					>
						Remote?
					</label>
					<select
						name="location"
						id="location"
						defaultValue="onsite"
						className="rounded text-sm border-2 border-gray-400 text-gray-400"
					>
						<option value="onsite">On-Site</option>
						<option value="hybrid">Hybrid-Remote</option>
						<option value="remote">Fully Remote</option>
					</select>
				</div>
				<div className="flex gap-3">
					<label
						className="text-sm  text-gray-800"
						htmlFor="location"
					>
						Full-time?
					</label>
					<select
						name="availability"
						id="availability"
						defaultValue="free"
						className="rounded border-2 border-gray-400 text-sm text-gray-400"
					>
						<option value="free">freelancer</option>
						<option value="part">Part-time</option>
						<option value="full">Fulltime</option>
					</select>
				</div>
			</div>
			<div className="space-y-1">
				<h3 className="text-sm text-gray-800">Salary (per year)</h3>
				<input
					className="p-1 rounded text-sm border-2 border-gray-400 text-gray-400 focus:border-gray-600"
					type="text"
					placeholder="$"
				/>
			</div>
			<div>
				<h6 className="text-sm">Location:</h6>
				<div className="flex flex-col lg:md:flex-row gap-2">
					<CountrySelect
						onChange={(e) => {
							setCountryId(e.id);
						}}
						placeHolder="Select Country"
						inputClassName={GeistMono.className}
						containerClassName="rounded border-gray-400 text-sm"
					/>
					<StateSelect
						countryid={countryId}
						onChange={(e) => {
							setStateId(e.id);
						}}
						placeHolder="Select State"
						containerClassName="rounded text-sm"
						inputClassName={GeistMono.className}
					/>
					<CitySelect
						countryid={countryId}
						stateid={stateId}
						onChange={(e) => {
							console.log(e);
						}}
						placeHolder="Select City"
						containerClassName="rounded text-sm"
						inputClassName={GeistMono.className}
					/>
				</div>
			</div>

			<textarea
				className="p-3 h-56 focus:border-gray-600 text-gray-400 rounded-sm text-sm w-full border-2 border-gray-400"
				placeholder="Job Description..."
			/>

			<div className="flex lg:md:flex-row flex-col lg:md:gap-2">
				<div className="flex flex-col w-3/4 gap-2"></div>
			</div>

			<h3 className="text-sm text-gray-800">Contact Info: </h3>
			<div className="flex gap-2">
				<div className="flex flex-col grow w-auto gap-1">
					<input
						type="text"
						placeholder="Name"
						className="w-full p-2 border-2 border-gray-400 rounded text-sm text-gray-600 focus:border-gray-600"
					/>
					<input
						type="text"
						placeholder="Phone"
						className="p-2 w-full border-2 border-gray-400 rounded text-sm text-gray-600 focus:border-gray-600"
					/>
					<input
						type="text"
						placeholder="Email"
						className="p-2 w-full border-2 border-gray-400 rounded text-sm text-gray-600 focus:border-gray-600"
					/>
				</div>
			</div>
			<div className="grid lg:md:grid-cols-3 grid-cols-1">
				<div className="flex flex-col mt-3 gap-2 items-start">
					<h3 className="text-sm  text-gray-800">Contact Profile:</h3>
					{uploadedProfile ? (
						<img
							src={uploadedProfile}
							className="h-20 rounded w-20"
						/>
					) : (
						<input
							className="text-sm"
							placeholder="Select a file"
							type="file"
							ref={inputRef}
							onChange={(e) => {
								setSelectedProfile(e?.target?.files?.[0]);
							}}
						></input>
					)}
					<div>
						<button
							className="bg-gray-200 shadow-sm border-gray-900 rounded-sm text-xs py-1 px-2"
							type="button"
							onClick={handleProfileUpload}
						>
							Upload File
						</button>
					</div>
				</div>
				<div className="flex flex-col mt-3 gap-2 items-start">
					<h3 className="text-sm  text-gray-800">Job Icon:</h3>
					{uploadedJobProfile ? (
						<img
							src={uploadedJobProfile}
							className="h-20 rounded w-20"
						/>
					) : (
						<input
							className="text-sm"
							placeholder="Select a file"
							type="file"
							ref={inputRef}
							onChange={(e) => {
								setSelectedJobProfile(e?.target?.files?.[0]);
							}}
						></input>
					)}
					<div>
						<button
							className="bg-gray-200 shadow-sm border-gray-900 rounded-sm text-xs py-1 px-2"
							type="button"
							onClick={handleJobProfileUpload}
						>
							Upload File
						</button>
					</div>
				</div>
			</div>

			<div className="mt-2 flex items-center justify-between">
				<div></div>
				<button className="bg-gray-900 shadow-sm text-sm rounded-sm flex gap-1 items-center text-gray-100 py-2 px-10">
					submit
				</button>
			</div>
		</form>
	);
}
