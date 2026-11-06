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
		title: 'By the Page',
		summary:
			'This is the best way to work with me if you have a finished or significantly completed manuscript. I\'ll read what you have and give you my comments and suggestions.',
		details: [
			'Turn around in about 10 business days',
			'You\'ll get a written document including my comments and ideas on how to proceed',
			'I\'ll also sit with you--in person or via Zoom--and discuss the document'
		],
		rate: '4 cents per word'
	},
	{
		title: 'By the Hour',
		summary:
			'This is the best way to work with me if you are early in the process and aren\'t sure what to do next. We can chat either in person or via Zoom, go over your idea, and I can provide comments and suggestions on next steps.',
		details: [
			'We can discuss your idea, partial manuscript, or passion project',
			'I can guide you through the process of turning your idea into a story, including next steps for your writing process',
			'I\'ll also send you a written document with the discussed suggestions for your reference'
		],
		rate: '$200 per hour'
	},
];
