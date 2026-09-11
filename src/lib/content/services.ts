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
		title: 'Developmental editing',
		summary:
			'Big-picture feedback on structure, pacing, character, and theme — the shape of the whole book.',
		details: [
			'Editorial letter (typically 8–15 pages)',
			'Margin notes throughout the manuscript',
			'A follow-up call to talk through the revision plan'
		],
		rate: 'Priced per project after a sample read'
	},
	{
		title: 'Line editing',
		summary:
			'Sentence-level work on clarity, voice, rhythm, and flow, while keeping your style intact.',
		details: [
			'Tracked changes at the paragraph and sentence level',
			'Notes on word choice, tone, and repetition',
			'Guidance you can apply to the rest of your writing'
		],
		rate: 'Per 1,000 words'
	},
	{
		title: 'Copyediting & proofreading',
		summary: 'A careful final pass for grammar, consistency, and the small errors that slip through.',
		details: [
			'Grammar, punctuation, and spelling',
			'Consistency (names, timelines, style choices)',
			'A style sheet you can keep for future books'
		],
		rate: 'Per 1,000 words'
	}
];
