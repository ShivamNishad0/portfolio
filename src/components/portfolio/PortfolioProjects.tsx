import { useState, useEffect } from "react";
import {
	Github,
	ExternalLink,
	NotebookTabs,
	SquareCheckBig,
	BriefcaseMedical,
	Webhook,
	BookOpen,
	Scroll,
	ArrowRight,
} from "lucide-react";
import {
	Card,
	CardBody,
	CardHeader,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalFooter,
} from "@traken-ui/react";
import { useTheme } from "../../contexts/ThemeContext";
import { ScrollReveal } from "./ScrollReveal";

function PortfolioProjects() {
	const { theme } = useTheme();
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedProject, setSelectedProject] = useState<any>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const projects = [
		{
			title: "prodify",
			description:
			"Prodify is a modern product management and showcase platform designed to help users discover, organize, and manage products efficiently. It focuses on clean UI, smooth user experience, and scalable architecture, making it ideal for real-world product workflows.",			
			image: "/prodify.png",
			tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express.js"],
			githubUrl: "https://github.com/ShivamNishad0/prodify",
			featured: true,
			icon: <Webhook className='w-5 h-5' />,
		},
		{
			title: "Event Scheduler",
			description:
			"A full-stack Event Scheduling Web App built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). It enables users to create, view, update, and manage events efficiently through an intuitive interface.",			
			image: "/eventscheduler.png",
			tags: ["React.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
			githubUrl: "https://github.com/ShivamNishad0/Event-Scheduling",
			liveUrl: "https://event-scheduling.onrender.com/",
			featured: true,
			icon: <NotebookTabs className='w-5 h-5' />,
		},
		{
			title: "Task Tracker",
			description:
			"Task Tracker is a lightweight productivity app that helps users efficiently manage daily tasks. It lets users create, update, delete, and complete tasks while setting priorities and deadlines for better time management. The app features a clean interface along with WhatsApp integration for a welcome message and instant chat support, ensuring users stay organized and never miss important tasks.",			
			image: "/tasktracker.png",
			tags: ["React.js", "Vite", "Node.js", "Tailwind CSS", "MongoDB"],
			githubUrl: "https://github.com/ShivamNishad0/tasktracker",
			liveUrl: "https://tasktrackershivam.netlify.app/",
			featured: true,
			icon: <SquareCheckBig className='w-5 h-5' />,
		},
		{
			title: "DocEase: Recommendation System",
			description:
				"A Web application that suggest the doctor by searching the nearby location. Built with Next.js and integrated with Payment API, it eliminates the need for manual content creation and scheduling. Includes custom scheduling options, and social platform auth. Ideal for content creators, influencers, and digital marketers looking to streamline their daily posting.",
			image: "/DocEase.png",
			tags: ["React.js", "Vite","Node.js", "Tailwind CSS"],
			githubUrl: "https://github.com/ShivamNishad0/DocEase",
			liveUrl: "https://doceasee.netlify.app/",
			featured: true,
			icon: <BriefcaseMedical className='w-5 h-5' />,
		},
		{
			title: "Book World",
			description:
			"Book World is like a personal librarian who knows your taste, guiding you through shelves of endless knowledge and imagination. Built with Flask and powered by intelligent algorithms, it connects readers with books they’ll love — whether it’s a thrilling mystery, a timeless classic, or a hidden gem. Just like a magical library that whispers.",			
			image: "/bookworld.png",
			tags: ["Flask", "Jyupter", "Python", "JavaScript", "HTML", "CSS"],
			githubUrl: "https://github.com/ShivamNishad0/BookRecommendation",
			featured: true,
			icon: <BookOpen className='w-5 h-5' />,
		},
		{
			title: "Portfolio",
			description:
			"This personal portfolio is a modern, responsive website that highlights my skills, projects, and career journey. Built with React.js and styled using Tailwind CSS, it provides a sleek, user-friendly interface with smooth navigation. The site is designed to showcase my work, share my experiences, and make it easy for recruiters and collaborators to connect with me.",			
			image: "/portfolio.png",
			tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
			githubUrl: "https://github.com/ShivamNishad0/portfolio",
			liveUrl: "shivamnishadd.netlify.app",
			featured: true,
			icon: <Scroll className='w-5 h-5' />,
		},
	];

	const filteredProjects = projects.filter((project) => {
		if (selectedCategory === "All") return true;
		if (selectedCategory === "React.js") return project.tags.includes("React.js");
		if (selectedCategory === "Node.js") return project.tags.includes("Node.js");
		if (selectedCategory === "Python") return project.tags.includes("Python") || project.tags.includes("Flask");
		return true;
	});

	return (
		<section
			id='projects'
			className='bg-white dark:bg-black text-black dark:text-gray-100 py-16 md:py-24 lg:py-32 overflow-hidden relative transition-colors duration-300'>
			<ScrollReveal className='max-w-3xl w-full xl:max-w-270 mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center space-x-3 mb-6'>
						<div className='h-1 w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-sm tracking-widest font-medium'>
							My Work
						</span>
						<div className='h-1 w-10 bg-indigo-500' />
					</div>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
						Featured{" "}
						<span className='text-indigo-400'>Projects</span>
					</h2>
					<p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg'>
						A collection of projects showcasing my expertise in MERN stack, Python/Flask development, and web design.
					</p>
				</div>

				{/* Category Filter Tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-12">
					{["All", "React.js", "Node.js", "Python"].map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
								selectedCategory === category
									? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
									: "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
							}`}
						>
							{category === "Python" ? "Python / Flask" : category}
						</button>
					))}
				</div>

				{/* Featured Projects - Improved responsiveness */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-20">
					{filteredProjects
						.filter((project) => project.featured)
						.map((project, index) => (
							<Card
								key={index}
								className={`group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-500 transform hover:border-indigo-500/50 h-full flex flex-col justify-between`}
							>
								<div>
									<CardHeader className="aspect-video relative overflow-hidden bg-transparent h-48 md:h-52">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

										{/* Project Links */}
										<div className="absolute top-4 right-4 flex space-x-2">
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-black/50 hover:bg-indigo-600 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
											>
												<Github size={18} className="text-white" />
											</a>
											{project.liveUrl && (
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="bg-black/50 hover:bg-indigo-600 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
												>
													<ExternalLink size={18} className="text-white" />
												</a>
											)}
										</div>
									</CardHeader>

									<CardBody className="p-4 sm:p-5 bg-transparent text-gray-600 dark:text-gray-300 flex flex-col">
										{/* Title + Icon */}
										<div className="flex items-center mb-3">
											<div className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3">
												{project.icon}
											</div>
											<h3 className="text-lg sm:text-xl font-bold truncate text-gray-800 dark:text-gray-100">
												{project.title}
											</h3>
										</div>

										{/* Description */}
										<p className="text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm line-clamp-3">
											{project.description}
										</p>
									</CardBody>
								</div>

								{/* Tags and Learn More always at the bottom */}
								<div className="px-4 pb-5 pt-0 bg-transparent mt-auto flex flex-col gap-4">
									<div className="flex flex-wrap gap-1.5">
										{project.tags.slice(0, 3).map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full text-xs"
											>
												{tag}
											</span>
										))}
										{project.tags.length > 3 && (
											<span className="text-gray-500 text-xs self-center">
												+{project.tags.length - 3} more
											</span>
										)}
									</div>

									<button
										onClick={() => setSelectedProject(project)}
										className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center cursor-pointer"
									>
										Learn More <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
									</button>
								</div>
							</Card>
						))}
				</div>

				{/* Other Projects Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
					{filteredProjects
						.filter((project) => !project.featured)
						.map((project, index) => (
							<div
								key={index}
								className={`group border border-gray-300 dark:border-gray-800 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:border-indigo-500 transition-all duration-500 transform text-gray-800 dark:text-gray-200 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-12 opacity-0"
								}`}
								style={{
									transitionDelay: `${(index + 2) * 200}ms`,
								}}>
								<div className='flex items-center justify-between mb-4 '>
									<div className='flex items-center'>
										<div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3'>
											{project.icon}
										</div>
										<h3 className='font-bold text-base sm:text-lg truncate text-gray-800 dark:text-gray-200 '>
											{project.title}
										</h3>
									</div>
									<div className='flex space-x-2'>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'>
											<Github size={16} />
										</a>
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'>
											<ExternalLink size={16} />
										</a>
									</div>
								</div>
								<p className='text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm line-clamp-2'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className='bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs'>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
				</div>
			</ScrollReveal>

			{/* Project Case Study Details Modal */}
			{selectedProject && (
				<Modal
					isOpen={!!selectedProject}
					onOpenChange={(open) => !open && setSelectedProject(null)}
					color={theme === "dark" ? "dark" : "light"}
					size="lg"
					radius="xl"
				>
					<ModalContent className="p-6 sm:p-8">
						<ModalHeader className="pb-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
							<div className="flex items-center gap-3">
								<div className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg">
									{selectedProject.icon}
								</div>
								<h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
									{selectedProject.title}
								</h3>
							</div>
						</ModalHeader>
						<ModalBody className="py-6 space-y-6">
							<img
								src={selectedProject.image}
								alt={selectedProject.title}
								className="w-full aspect-video object-cover rounded-xl border border-gray-200 dark:border-gray-800 shadow-md"
							/>
							<div>
								<h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Project Overview</h4>
								<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
									{selectedProject.description}
								</p>
							</div>
							<div>
								<h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies Used</h4>
								<div className="flex flex-wrap gap-2">
									{selectedProject.tags.map((tag: string, i: number) => (
										<span
											key={i}
											className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</ModalBody>
						<ModalFooter className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800 justify-end">
							<a
								href={selectedProject.githubUrl}
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm sm:text-base cursor-pointer"
							>
								<Github size={18} /> Code
							</a>
							{selectedProject.liveUrl && (
								<a
									href={selectedProject.liveUrl}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm sm:text-base shadow-lg hover:shadow-indigo-500/25 cursor-pointer"
								>
									<ExternalLink size={18} /> Demo
								</a>
							)}
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}

			{/* Background effects - Positioned to avoid overflow */}
			<div className='absolute top-20 right-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
			<div className='absolute bottom-20 left-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
		</section>
	);
}

export default PortfolioProjects;
