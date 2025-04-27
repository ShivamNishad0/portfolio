import { useState, useEffect } from "react";
import {
	Code,
	Terminal,
	Database,
	Server,
	GitBranch,
	Globe,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "@traken-ui/react";

function PortfolioSkills() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timeout);
	}, []);

	// Tech categories with their respective technologies
	const techCategories = [
		{
			title: "Languages",
			icon: <Code className='w-5 h-5 text-indigo-400' />,
			skills: ["JavaScript", "TypeScript"],
		},
		{
			title: "System",
			icon: <Terminal className='w-5 h-5 text-indigo-400' />,
			skills: ["Windows", "Mac"],
		},
		{
			title: "Backend",
			icon: <Server className='w-5 h-5 text-indigo-400' />,
			skills: ["Node.js", "Express", "REST APIs"],
		},
		{
			title: "Frontend",
			icon: <Globe className='w-5 h-5 text-indigo-400' />,
			skills: ["React", "Next.js", "Tailwind CSS"],
		},
		{
			title: "Version Control",
			icon: <GitBranch className='w-5 h-5 text-indigo-400' />,
			skills: ["Git", "GitHub"],
		},
		{
			title: "Databases",
			icon: <Database className='w-5 h-5 text-indigo-400' />,
			skills: ["MySQL", "PostgreSQL", "MongoDB"],
		},
	];

	return (
		<section
			id='skills'
			className='w-full bg-black text-white py-12 md:py-20 lg:py-24 overflow-hidden relative'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6'>
				<div
					className={`w-full transition-all duration-1000 transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-12 opacity-0"
					}`}>
					<div className='flex items-center justify-center md:justify-start w-full space-x-3 mb-6 md:mb-8'>
						<div className='h-1 w-8 md:w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-widest font-medium'>
							Tech Stack
						</span>
					</div>

					<h2 className='text-center md:text-left text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-12'>
						Technologies I{" "}
						<span className='text-indigo-400'>Work With</span>
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 md:gap-6'>
						{techCategories.map((category, index) => (
							<Card
								key={index}
								className={`bg-gray-900 bg-opacity-70 backdrop-blur-sm border border-gray-800 rounded-xl p-5 md:p-6 hover:border-indigo-500 transition-all duration-500 transform ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-12 opacity-0"
								}`}>
								<CardHeader className='bg-transparent border-0 shadow-none p-0'>
									<div className='flex items-center mb-4'>
										<div className='p-2 mr-3 text-gray-200 bg-gray-800 rounded-lg'>
											{category.icon}
										</div>
										<h3 className='text-lg text-gray-200 md:text-xl font-semibold'>
											{category.title}
										</h3>
									</div>
								</CardHeader>
								<CardBody className='bg-transparent border-0 shadow-none p-0'>
									<div className='flex flex-wrap gap-2 text-gray-200'>
										{category.skills.map(
											(skill, skillIndex) => (
												<span
													key={skillIndex}
													className='bg-gray-800 hover:bg-indigo-900 text-xs md:text-sm py-1 px-3 rounded-full transition-colors duration-300'>
													{skill}
												</span>
											)
										)}
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</div>

				{/* Glowing orb background effects - improved positioning for responsiveness */}
				<div className='absolute -top-40 right-0 md:-right-40 w-72 md:w-96 h-72 md:h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl pointer-events-none'></div>
				<div className='absolute -bottom-40 left-0 md:-left-40 w-72 md:w-96 h-72 md:h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl pointer-events-none'></div>
			</div>
		</section>
	);
}

export default PortfolioSkills;
