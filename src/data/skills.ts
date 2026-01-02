// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description: "不太会Java但是会JavaScript",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 6 },
		projects: [
			"mizuki-blog",
			"portfolio-website",
			"data-visualization-tool",
		],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "JS的Plus版本",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 6 },
		projects: ["mizuki-blog", "portfolio-website", "task-manager-app"],
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description: "真难学捏",
		icon: "logos:react",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["portfolio-website", "task-manager-app"],
		color: "#61DAFB",
	},
	{
		id: "vue",
		name: "Vue.js",
		description: "好上手捏",
		icon: "logos:vue",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 6 },
		projects: ["data-visualization-tool"],
		color: "#4FC08D",
	},
	{
		id: "nextjs",
		name: "Next.js",
		description: "轻量全栈框架",
		icon: "logos:nextjs-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["e-commerce-frontend", "blog-platform"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "astro",
		name: "Astro",
		description: "偶然发现",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "用过都说好",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["mizuki-blog", "portfolio-website"],
		color: "#06B6D4",
	},
	{
		id: "sass",
		name: "Sass/SCSS",
		description: "优雅的写CSS",
		icon: "logos:sass",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["legacy-website", "component-library"],
		color: "#CF649A",
	},
	{
		id: "webpack",
		name: "Webpack",
		description: "传统派打包方式",
		icon: "logos:webpack",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		projects: ["custom-build-tool", "spa-application"],
		color: "#8DD6F9",
	},
	{
		id: "vite",
		name: "Vite",
		description: "维新派打包方式",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["vue-project", "react-project"],
		color: "#646CFF",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description: "喜欢这个",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description: "Java好难呀",
		icon: "logos:java",
		category: "backend",
		level: "beginner",
		experience: { years: 2, months: 0 },
		projects: ["enterprise-system", "microservices-api"],
		color: "#ED8B00",
	},
	{
		id: "c",
		name: "C",
		description: "启蒙老师",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 6, months: 2 },
		projects: ["embedded-system", "kernel-module"],
		color: "#A8B9CC",
	},
	{
		id: "fastify",
		name: "Fastify",
		description: "好快的node后端框架",
		icon: "devicon:fastify",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["data-visualization-tool"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "spring",
		name: "Spring Boot",
		description: "市面上全是这个...",
		icon: "logos:spring-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["enterprise-system", "rest-api"],
		color: "#6DB33F",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description: "不必多言",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	{
		id: "influxdb",
		name: "InfluxDB",
		description: "一种用来监控的时序型数据库",
		icon: "devicon:influxdb",
		category: "database",
		level: "advanced",
		experience: { years: 1, months: 1 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	{
		id: "mongodb",
		name: "MongoDB",
		description: "听说微信小程序云开发用的就是它？",
		icon: "logos:mongodb-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		color: "#47A248",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description: "游戏存档...",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "管你什么语言，用就完事了",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description:
			"JetBrains flagship IDE, the preferred tool for Java development with powerful intelligent coding assistance.",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 0 },
		projects: ["java-enterprise", "spring-boot-app"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description: "写python的",
		icon: "logos:pycharm",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 4 },
		projects: ["python-web-app", "data-analysis"],
		color: "#21D789",
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "反向代理",
		icon: "logos:nginx",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		projects: ["web-server-config", "load-balancer"],
		color: "#009639",
	},
	{
		id: "linux",
		name: "Linux",
		description: "优雅人士正在使用Linux",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	{
		id: "postman",
		name: "Postman",
		description: "测试API利器",
		icon: "logos:postman-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["api-testing", "api-documentation"],
		color: "#FF6C37",
	},

	// Other Skills
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
