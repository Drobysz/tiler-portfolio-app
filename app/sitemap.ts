import type {
	MetadataRoute,
} from "next";

export default function sitemap():
	MetadataRoute.Sitemap {
	const baseUrl =
		"https://dp-carrelage.vercel.app";

	const routes = [
		{ route: "", lastModified: "2026-10-20" },
		{ route: "/projects", lastModified: "2026-10-20" },
		{ route: "/contacts", lastModified: "2026-10-20" },
		{ route: "/furnishers", lastModified: "2026-10-20" },
	];

	return routes.map(
		({ route, lastModified }) => ({
			url: `${baseUrl}${route}`,
			lastModified:
				new Date(lastModified),
			changeFrequency:
				"monthly",
			priority:
				route === "" ? 1 : 0.8,
		})
	);
}
