import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import "@radix-ui/themes/styles.css";
import { TextField, Theme } from "@radix-ui/themes";

type PageProps = {
	params: {
		orgId: string;
	};
};

export default async function NewListingPageForOrgPage(props: PageProps) {
	const { user } = await getUser();
	const workos = new WorkOS(process.env.WORKOS_API_KEY);

	if (!user) {
		return "Please log in";
	}

	const orgId = props.params.orgId;
	const oms = await workos.userManagement.listOrganizationMemberships({
		userId: user?.id,
		organizationId: orgId,
	});
	const hasAccess = oms.data.length > 0;

	if (!hasAccess) {
		return "no access";
	}

	return (
		<Theme>
			<form className="container mt-8" action="">
				<TextField.Root placeholder="Job Title" />
			</form>
		</Theme>
	);
}
