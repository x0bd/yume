import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { TbAlertSquareRounded } from "react-icons/tb";

export default async function NewListingPage() {
	const workos = new WorkOS(process.env.WORKOS_API_KEY);
	const { user } = await getUser();

	if (!user) {
		return (
			<div className="container">
				You need to be logged in to post a job!
			</div>
		);
	}

	const organizationMemberships =
		await workos.userManagement.listOrganizationMemberships({
			userId: user.id,
		});

	const activeOrganizationMemberships = organizationMemberships.data.filter(
		(om) => om.status === "active"
	);
	const organizationsNames: { [key: string]: string } = {};
	for (const activeMembership of activeOrganizationMemberships) {
		const organization = await workos.organizations.getOrganization(
			activeMembership.organizationId
		);
		organizationsNames[organization.id] = organization.name;
	}

	return (
		<div className="container">
			<div>
				<h2 className="text-lg font-semibold">Your Companies</h2>
				<p className="text-gray-500 text-sm mb-2">
					Select a company to create a job posting for
				</p>

				<div className="p-4 bg-gray-200 space-y-3 rounded grid gap-3 grid-cols-2">
					{Object.keys(organizationsNames).map((orgId) => (
						<Link
							className="p-3 border-2 text-gray-600 flex gap-1 items-center bg-gray-50 rounded shadow-sm"
							href={"/new-listing/" + orgId}
							key={orgId}
						>
							{organizationsNames[orgId]}
							<GoArrowRight />
						</Link>
					))}
				</div>

				{organizationMemberships.data.length === 0 && (
					<div className="text-md text-gray-700 font-bold border bg-gray-200 border-gray-400 flex gap-1 items-center rounded-sm p-2">
						<span className="text-lg">
							<TbAlertSquareRounded />
						</span>{" "}
					</div>
				)}

				<Link href={"/new-company"}>
					<button
						type="submit"
						className="bg-gray-900 text-sm items-center flex gap-1 text-gray-100 rounded-sm py-2 px-4"
					>
						Create a new Company <GoArrowRight />
					</button>
				</Link>
			</div>
		</div>
	);
}
