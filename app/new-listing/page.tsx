import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import { TbAlertSquareRounded } from "react-icons/tb";

export default async function NewListingPage() {
	const { user } = await getUser();

	if (!user) {
		return (
			<div className="container">
				You need to be logged in to post a job!
			</div>
		);
	}

	const workos = new WorkOS(process.env.WORKOS_API_KEY);

	const organizationMemberships =
		await workos.userManagement.listOrganizationMemberships({
			userId: user.id,
		});

	return (
		<div className="container">
			<div>
				<pre>{JSON.stringify(organizationMemberships, null, 2)}</pre>

				<h2 className="text-lg font-semibold">Your Companies</h2>
				<p className="text-gray-500 text-sm mb-2">Select a company</p>
				<div className="text-md text-gray-700 font-bold border bg-gray-200 border-gray-400 flex gap-1 items-center rounded-sm p-2">
					<span className="text-lg">
						<TbAlertSquareRounded />
					</span>{" "}
					No Companies Found Assigned to Your User!
				</div>

				<h2 className="text-lg font-semibold">Create a new Company</h2>
				<p className="text-gray-500">
					To create a job listing you first need to register
				</p>
				<form action="" className="flex gap-2">
					<input
						className="border py-3 px-3 bg-gray-200 text-sm rounded-sm border-none focus:outline-none"
						type="text"
						placeholder="company name"
					/>
					<button className="bg-gray-900 text-sm items-center text-gray-100 rounded-sm py-2 px-4">
						Create Company
					</button>
				</form>
			</div>
		</div>
	);
}
