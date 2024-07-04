"use client";

import { useState } from "react";
import {
	CitySelect,
	CountrySelect,
	StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { RiImage2Line } from "react-icons/ri";
import { MdOutlinePerson } from "react-icons/md";

export default function JobForm() {
	const [countryId, setCountryId] = useState(0);
	const [stateId, setStateId] = useState(0);

	return (
		<form
			className="p-3 mt-8 flex flex-col gap-3 rounded bg-gray-200 "
			action=""
		>
			<h3 className="text-sm font-black">New Job Post</h3>
			<input
				className="focus:outline-none text-gray-600 rounded w-full p-3 text-sm border-none"
				placeholder="Job Title"
			/>

			<div className="grid md:lg:grid-cols-2 gap-2">
				<div className="flex gap-3">
					<label className="text-sm text-gray-800" htmlFor="location">
						Remote?
					</label>
					<select
						name="location"
						id="location"
						defaultValue="onsite"
						className="rounded text-sm text-gray-600"
					>
						<option value="onsite">On-Site</option>
						<option value="hybrid">Hybrid-Remote</option>
						<option value="remote">Fully Remote</option>
					</select>
				</div>
				<div className="flex gap-3">
					<label className="text-sm text-gray-800" htmlFor="location">
						Full-time?
					</label>
					<select
						name="availability"
						id="availability"
						defaultValue="free"
						className="rounded text-sm text-gray-600"
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
					className="border p-1 rounded text-sm text-gray-600 focus:outline-none border-none"
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
					/>
					<StateSelect
						countryid={countryId}
						onChange={(e) => {
							setStateId(e.id);
						}}
						placeHolder="Select State"
					/>
					<CitySelect
						countryid={countryId}
						stateid={stateId}
						onChange={(e) => {
							console.log(e);
						}}
						placeHolder="Select City"
					/>
				</div>
			</div>

			<textarea
				className="p-3 h-56 focus:outline-none text-gray-600 rounded-sm text-sm w-full border-none"
				placeholder="Job Description..."
			/>

			<div className="flex lg:md:flex-row flex-col lg:md:gap-2">
				<div className="flex flex-col w-3/4 gap-2">
					<h3 className="text-sm font-medium text-gray-800">
						Contact Person
					</h3>
					<div className="flex gap-2 w-full grow items-center">
						<div className="bg-gray-100 size-24 rounded cursor-pointer  flex items-center justify-center">
							<MdOutlinePerson size={40} />
						</div>
						<div className="flex flex-col grow w-auto gap-1">
							<input
								type="text"
								placeholder="Jane Doe"
								className="border w-full p-1 rounded text-sm text-gray-600 focus:outline-none border-none"
							/>
							<input
								type="text"
								placeholder="Phone"
								className="border p-1 w-full rounded text-sm text-gray-600 focus:outline-none border-none"
							/>
							<input
								type="text"
								placeholder="Email"
								className="border p-1 w-full rounded text-sm text-gray-600 focus:outline-none border-none"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-sm text-gray-800">Job Icon</h3>
					<div className="bg-gray-100 size-24 rounded cursor-pointer flex items-center justify-center">
						<RiImage2Line size={40} />
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
