import { getUser } from "@workos-inc/authkit-nextjs";
import { createCompany } from "../actions/workosActions";

export default async function newCompanyName() {
	const { user } = await getUser();

	async function handleNewCompanyFormSubmit(data: FormData) {
		"use server";

		if (user)
			await createCompany(data.get("newCompanyName") as string, user?.id);
	}

	if (!user) {
		("Login to use this page");
	}

	return (
		<div className="container">
			<h2 className="text-lg font-semibold">Create a new Company</h2>
			<p className="text-gray-500">
				To create a job listing you first need to register
			</p>
			<form action={handleNewCompanyFormSubmit} className="flex gap-2">
				<input
					name="newCompanyName"
					className="border py-3 px-3 bg-gray-200 text-sm rounded-sm border-none focus:outline-none"
					type="text"
					placeholder="company name"
				/>
				<button
					type="submit"
					className="bg-gray-900 text-sm items-center text-gray-100 rounded-sm py-2 px-4"
				>
					Create Company
				</button>
			</form>
		</div>
	);
}
