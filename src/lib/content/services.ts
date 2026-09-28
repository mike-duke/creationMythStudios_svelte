// Services as structured data. Because each service has the same shape
// (title, summary, details, rate), an array is easier to edit and render than
// prose. Add, remove, or reorder entries here and the Services page updates.

export type Service = {
	title: string;
	summary: string;
	details: string[];
	// A human-readable rate/basis. Keep it vague or specific as you prefer.
	rate: string;
};

export const services: Service[] = [
	{
		title: 'Lorem ipsum',
		summary:
			'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
		details: [
			'Lorem ipsum dolor sit amet consectetur',
			'Adipiscing elit sed do eiusmod tempor',
			'Incididunt ut labore et dolore magna'
		],
		rate: 'Consectetur adipiscing elit'
	},
	{
		title: 'Dolor sit amet',
		summary:
			'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
		details: [
			'Duis aute irure dolor in reprehenderit',
			'In voluptate velit esse cillum dolore',
			'Excepteur sint occaecat cupidatat'
		],
		rate: 'Per mille verba'
	},
	{
		title: 'Consectetur adipiscing',
		summary: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.',
		details: [
			'Sed ut perspiciatis unde omnis iste',
			'Natus error sit voluptatem accusantium',
			'Doloremque laudantium totam rem aperiam'
		],
		rate: 'Per mille verba'
	}
];
