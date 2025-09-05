import { useState, useEffect } from "react";
import {
	Github,
	ExternalLink,
	Quote,
	ShoppingBag,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "@traken-ui/react";

function PortfolioProjects() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const projects = [
		{
			title: "Task Tracker",
			description:
			"Task Tracker is a lightweight productivity app that helps users efficiently manage daily tasks. It lets users create, update, delete, and complete tasks while setting priorities and deadlines for better time management. The app features a clean interface along with WhatsApp integration for a welcome message and instant chat support, ensuring users stay organized and never miss important tasks.",			
			image: "/tasktracker.png",
			tags: ["React.js", "Vite", "Node.js", "Tailwind CSS", "MongoDB"],
			githubUrl: "https://github.com/ShivamNishad0/tasktracker",
			liveUrl: "https://tasktrackershivam.netlify.app/",
			featured: true,
			icon: <ShoppingBag className='w-5 h-5' />,
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
			icon: <Quote className='w-5 h-5' />,
		},
		{
			title: "Book World",
			description:
			"Book World is like a personal librarian who knows your taste, guiding you through shelves of endless knowledge and imagination. Built with Flask and powered by intelligent algorithms, it connects readers with books they’ll love — whether it’s a thrilling mystery, a timeless classic, or a hidden gem. Just like a magical library that whispers.",			
			image: "/bookworld.png",
			tags: ["Flask", "Jyupter", "Python", "JavaScript", "HTML", "CSS"],
			githubUrl: "https://github.com/ShivamNishad0/BookRecommendation",
			//liveUrl: "https://www.evtn.org",
			featured: true,
			icon: <ShoppingBag className='w-5 h-5' />,
		},
		
		
	];

	return (
		<section
			id='projects'
			className='bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden relative'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8'>
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
					<p className='text-gray-300 max-w-3xl mx-auto text-base md:text-lg'>
						A collection of projects showcasing my expertise in
						system programming, version control systems, and web
						development.
					</p>
				</div>

				{/* Featured Projects - Improved responsiveness */}
				{/* Featured Projects */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16 mb-20">
				{projects
					.filter((project) => project.featured)
					.map((project, index) => (
					<Card
						key={index}
						className={`group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 transform hover:border-indigo-500 h-full`}
					>
						<CardHeader className="aspect-video relative overflow-hidden bg-transparent">
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

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

						<CardBody className="p-4 sm:p-6 bg-transparent text-gray-300 flex flex-col h-full">
						{/* Title + Icon */}
						<div className="flex items-center mb-3">
							<div className="bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3">
							{project.icon}
							</div>
							<h3 className="text-lg sm:text-xl md:text-2xl font-bold truncate">
							{project.title}
							</h3>
						</div>

						{/* Description fills available space */}
						<p className="text-gray-300 mb-4 text-sm sm:text-base flex-grow">
							{project.description}
						</p>

						{/* Tags always at the bottom */}
						<div className="flex flex-wrap gap-2 mt-auto">
							{project.tags.map((tag, tagIndex) => (
							<span
								key={tagIndex}
								className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
							>
								{tag}
							</span>
							))}
						</div>
						</CardBody>
					</Card>
					))}
				</div>

				{/* Other Projects Grid - Improved for better responsiveness */}
				{/* <h3 className='text-xl sm:text-2xl font-bold mb-6 text-center'>
					Other Notable Projects
				</h3> */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
					{projects
						.filter((project) => !project.featured)
						.map((project, index) => (
							<div
								key={index}
								className={`group border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:border-indigo-500 transition-all duration-500 transform text-gray-200 ${
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
										<h3 className='font-bold text-base sm:text-lg truncate text-gray-200 '>
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
								<p className='text-gray-300 mb-4 text-xs sm:text-sm line-clamp-2'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{project.tags.map((tag, tagIndex) => (
										<span
											key={tagIndex}
											className='bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs'>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
				</div>
			</div>

			{/* Background effects - Positioned to avoid overflow */}
			<div className='absolute top-20 right-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
			<div className='absolute bottom-20 left-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
		</section>
	);
}

export default PortfolioProjects;
