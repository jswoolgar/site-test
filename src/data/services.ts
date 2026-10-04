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
		tags: ["WordPress", "Front-end", "Mobile"],
		short:
			"WordPress, front-end, and mobile builds. Clean code, sensible structure, and no mystery plugins from 2016.",
		long: "We build it properly. WordPress sites you can actually edit, front-end code that loads before your coffee cools, and mobile experiences that never make anyone pinch and zoom. Clean code, sensible structure, and not a single mystery plugin.",
		image: "/images/service-development.jpg",
		imageAlt: "Code on a laptop screen",
	},
	{
		id: "copywriting",
		icon: "\u{1F4DD}",
		title: "Copywriting",
		tone: 3,
		tags: ["Technical", "Marketing", "Knowledge Base"],
		short:
			"Technical docs, marketing copy, and knowledge bases. Words that explain things, so your support inbox can finally take a nap.",
		long: "If it isn’t written down, it doesn’t exist. We write the technical docs your developers keep promising, the marketing copy that sounds like an actual human wrote it, and the knowledge bases that answer questions before they turn into support tickets.",
		image: "/images/service-copywriting.jpg",
		imageAlt: "An open notebook and pen on a wooden desk",
	},
	{
		id: "consulting",
		icon: "\u{1F9ED}",
		title: "Consulting",
		tone: 4,
		tags: ["Strategy", "Analytics", "Accessibility", "Local Search Marketing"],
		short:
			"Strategy, analytics, accessibility, and local search marketing. We’ll tell you what’s working, what isn’t, and what to do about it. Kindly.",
		long: "Not sure where to start, or whether to start at all? We’ll dig into your numbers, your audience, and your site, then give you our honest advice about next steps. Sometimes that advice is “leave it alone.” We’ll say so.",
		image: "/images/service-consulting.jpg",
		imageAlt: "Two colleagues planning with sticky notes on a whiteboard",
		imagePosition: "50% 40%",
	},
	{
		id: "support",
		icon: "\u{1F6E0}️",
		title: "Support",
		tone: 5,
		tags: ["Training", "Maintenance", "Technical"],
		short:
			"Training, maintenance, and technical help. We answer, we fix, and we only ask if you’ve tried turning it off and on again when it’s warranted.",
		long: "Launch day is the start of the relationship, not the goodbye. We train your team, keep everything updated and secure, and fix things when they break, ideally before you notice. Yes, we answer the phone.",
		image: "/images/service-support.jpg",
		imageAlt: "A friendly support specialist in a headset waving at a laptop",
	},
	{
		id: "addons",
		icon: "\u{1F50C}",
		title: "Add-ons",
		tone: 6,
		tags: ["Hosting", "SEO", "Security"],
		short:
			"Hosting, SEO, and security. The unglamorous stuff that keeps your site up, found, and out of the headlines.",
		long: "The behind-the-scenes extras that keep a site fast, findable, and safe: reliable hosting, SEO that helps the right people actually find you, and security that keeps trouble at the door. Unglamorous, essential, and entirely our problem.",
		image: "/images/service-addons.jpg",
		imageAlt: "Racks of servers in a data room",
	},
];
