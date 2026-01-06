export const skills = [
	"TypeScript",
	"React",
	"Svelte",
	"Astro",
	"Node.js",
	"Bun",
	"Golang",
	"Godot",
	"Tailwind CSS",
	"Git",
];

export const socials = [
	{ name: "GitHub", url: "https://github.com/dogxii", icon: "github" },
	{ name: "Twitter", url: "https://twitter.com/dogxii", icon: "twitter" },
	{ name: "Email", url: "mailto:hi@dogxi.me", icon: "email" },
	{ name: "Blog", url: "https://blog.dogxi.me", icon: "blog" },
];

export type Lang = "en" | "zh";

export interface I18nContent {
	lang: Lang;
	htmlLang: string;
	title: string;
	description: string;
	greeting: string;
	oneLiners: string[];
	intro: string[];
	nav: {
		about: string;
		skills: string;
		contact: string;
	};
	cta: {
		github: string;
		blog: string;
	};
	sections: {
		activity: string;
		about: string;
		skills: string;
		contact: string;
	};
	about: {
		line1: string;
		line2: string;
		indie: string;
		anime: string;
		pets: string;
		line3: string;
	};
	contact: {
		email: string;
		blog: string;
		blogName: string;
	};
	langSwitch: {
		label: string;
		href: string;
	};
}

export const en: I18nContent = {
	lang: "en",
	htmlLang: "en",
	title: "Curious Dev",
	description:
		"Dogxi — A curious dev exploring web, games, and everything in between.",
	greeting: "Hello, I'm Dogxi 👋",
	oneLiners: [
		"The noob-er I am, the more I play.",
		"Code to meet interesting people, build interesting things.",
		"Cuteness is justice.",
		"Dreaming to be a tech geek like Viki.",
		"Because I love it, I love it. Let's go!",
	],
	intro: [
		"University student. 19 years of practice. Still a noob who loves to play.",
		"Exploring web dev, game dev, and everything unknown.",
	],
	nav: {
		about: "About",
		skills: "Skills",
		contact: "Contact",
	},
	cta: {
		github: "GitHub",
		blog: "Read My Blog",
	},
	sections: {
		activity: "Activity",
		about: "About",
		skills: "Skills",
		contact: "Contact",
	},
	about: {
		line1:
			"Half-E half-I. Vegetarian-ish. Loves lettuce & cilantro. British English enjoyer.",
		line2: "Into",
		indie: "indie games",
		anime: "anime",
		pets: "cats & dogs",
		line3: "Want to do many things. Cuteness is justice.",
	},
	contact: {
		email: "Email",
		blog: "Blog",
		blogName: "Dogxi's Den",
	},
	langSwitch: {
		label: "中文",
		href: "/zh",
	},
};

export const zh: I18nContent = {
	lang: "zh",
	htmlLang: "zh-CN",
	title: "Curious Dev",
	description: "Dogxi — 一个独立开发者，探索 Web、游戏和一切未知。",
	greeting: "你好，我是 Dogxi 👋",
	oneLiners: [
		"越菜越爱玩。",
		"通过代码，遇见更多有趣的人，做更有趣的事。",
		"可爱至上。",
		"梦想成为像 Viki 一样的技术宅。",
		"因为热爱，所以热爱，一起加油！",
	],
	intro: [
		"大学生 - 练习时长19年 - 越菜越爱玩的个人练习生。",
		"正在探索 Web 开发、游戏开发，以及一切未知。",
	],
	nav: {
		about: "关于",
		skills: "技能",
		contact: "联系",
	},
	cta: {
		github: "GitHub",
		blog: "阅读博客",
	},
	sections: {
		activity: "活动",
		about: "关于",
		skills: "技能",
		contact: "联系",
	},
	about: {
		line1: "半e半i人。偏素食主义。爱吃生菜和香菜。喜欢 British English。",
		line2: "喜欢",
		indie: "独立游戏",
		anime: "动漫",
		pets: "猫猫狗狗",
		line3: "想做很多事。可爱即正义。",
	},
	contact: {
		email: "邮箱",
		blog: "博客",
		blogName: "Dogxi 的狗窝",
	},
	langSwitch: {
		label: "EN",
		href: "/",
	},
};

export function getContent(lang: Lang): I18nContent {
	return lang === "zh" ? zh : en;
}
