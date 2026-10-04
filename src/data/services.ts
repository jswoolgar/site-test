export interface Service {
	id: string;
	icon: string;
	title: string;
	tone: 1 | 2 | 3 | 4 | 5 | 6;
	tags: string[];
	short: string;
	long: string;
	image: string;
	imageAlt: string;
	imagePosition?: string;
}

export const services: Service[] = [
	{
		id: "design",
		icon: "\u{1F3A8}",
		title: "Design",
		tone: 1,
		tags: ["Web", "Feature", "Product"],
		short:
			"Web, feature, and product design that looks great and gets out of the way. Pretty is nice. Pretty that converts is better.",
		long: "Good design isn’t decoration. It’s the difference between a visitor who sticks around and one who wanders off to a competitor. We design whole websites, single features, and entire products that look sharp, make sense on the first try, and work as hard as you do.",
		image: "/images/service-design.jpg",
		imageAlt: "A hand sketching website wireframes on a tablet",
	},
	{
		id: "development",
		icon: "\u{1F4BB}",
		title: "Development",
		tone: 2,
		tags: ["WordPress", "Front-end", "Mobile", "Support", "Hosting"],
		short:
			"WordPress, front-end, and mobile builds, plus the hosting and support to keep them humming. No mystery plugins from 2016.",
		long: "We build it properly. WordPress sites you can actually edit, front-end code that loads before your coffee cools, and mobile experiences that never make anyone pinch and zoom. Then we stick around: hosting that stays up, support that picks up the phone, and not a single mystery plugin.",
		image: "/images/service-development.jpg",
		imageAlt: "Code on a laptop screen",
	},
	{
		id: "copy",
		icon: "\u{1F4DD}",
		title: "Copy",
		tone: 4,
		tags: ["Technical", "Copywriting", "Knowledge Base", "Messaging", "Local Search"],
		short:
			"Technical docs, copywriting, knowledge bases, messaging, and local search. Words that explain things and help the right people find you.",
		long: "If it isn’t written down, it doesn’t exist. We write the technical docs your developers keep promising, the copy that sounds like an actual human wrote it, the messaging that makes your point in one breath, and the knowledge bases that answer questions before they turn into support tickets. We’ll also get you found when people nearby search for exactly what you do.",
		image: "/images/service-copy.jpg",
		imageAlt: "An open notebook and pen on a wooden desk",
	},
];
