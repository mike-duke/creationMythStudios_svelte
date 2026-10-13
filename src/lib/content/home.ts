export type Testimonial = {
	clientName: string;
	quote: string;
	image: string;
};

export type Home = {
	eyebrow: string;
	siteHeading: string;
	lede: string;
	aboutHeading: string;
	aboutPara: string;
	servicesHeading: string;
	servicesPara: string;
	testimonialsHeading: string;
	testimonials: Testimonial[];
};

export const home: Home = {
	eyebrow: "Creation Myth Studios",
	siteHeading: "Welcome, Writer!",
	lede: "",
	aboutHeading: "Who am I?",
	aboutPara: "My name is Mike. I'm a writer. I've been calling myself a writer for over 30 years. In that time, I've been learning what makes a great story, and more importantly, how to help other writers make their stories great. And now, I want to help you, too!",
	servicesHeading: "",
	servicesPara: "",
	testimonialsHeading: "",
	testimonials: [
		{
			clientName: "",
			quote: "",
			image: ""
		},
		{
			clientName: "",
			quote: "",
			image: ""
		}
	]
}