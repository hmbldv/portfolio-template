export interface Certification {
	name: string;
	issuer: string;
	credlyUrl: string;
	dateIssued: string;
	expirationDate?: string;
	inProgress?: boolean;
	badgeImageUrl?: string;
}

export const certifications: Certification[] = [
	{
		name: "Example Certification",
		issuer: "Certification Provider",
		credlyUrl: "https://www.credly.com/badges/example",
		dateIssued: "Jan 2025",
		expirationDate: "Jan 2028",
		badgeImageUrl: "https://images.credly.com/images/placeholder.png",
	},
	{
		name: "In Progress Certification",
		issuer: "Another Provider",
		credlyUrl: "https://www.credly.com/badges/example2",
		dateIssued: "Expected 2025",
		inProgress: true,
		badgeImageUrl: "https://images.credly.com/images/placeholder2.png",
	},
];
