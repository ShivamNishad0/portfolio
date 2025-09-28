import { useState, useEffect } from "react";
import { Code, Figma, Layers, Lightbulb, ArrowRight } from "lucide-react";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@traken-ui/react";

function PortfolioAbout() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const skills = [
		{ name: "Frontend Development", icon: <Code className='w-5 h-5' /> },
		{ name: "Backend Development", icon: <Figma className='w-5 h-5' /> },
		{
			name: "Full-Stack Applications",
			icon: <Layers className='w-5 h-5' />,
		},
		{
			name: "Creative Problem Solving",
			icon: <Lightbulb className='w-5 h-5' />,
		},
	];

	const experiences = [
		{
			year: "2025",
			position: "Full Stack Developer Intern",
			company: "SmartCard AI",
			description:
				"Designed and developed a responsive dashboard for SmartCard AI using React.js and Flask, providing users with a clear and interactive interface. The dashboard includes secure login, API-integrated data visualization, transaction tracking, and AI-driven insights for better decision-making.",
		},
		{
			year: "June, 2024 - July, 2024",
			position: "Full Stack Developer Intern",
			company: "Innobyte Services",
			description:
				"Completed a hands-on Full Stack Developer internship where I developed a fully functional e-commerce web application from scratch. The project included user registration and login, email verification, secure payment gateway integration, and responsive UI design, demonstrating my skills in both frontend and backend development.",
		},
		{
			year: "2023 - 2025",
			position: "Master of Computer Applications",
			company: "Pranveer Singh Institute of Technology",
			description:
				"Successfully completed a Master’s degree in Computer Applications, gaining in-depth knowledge of software development, data structures, algorithms, and database management systems.",
		},
		{
			year: "2020 - 2023",
			position: "Bachelor of Science",
			company: "CSJM University Kanpur",
			description:
				"Completed a Bachelor's degree in Science, which provided a solid academic foundation in logical reasoning, analytical thinking, and core programming principles.",
		},
	];

	return (
		<section
			id='about'
			className='bg-white dark:bg-black text-black dark:text-white py-2 md:py-4 lg:py-8 overflow-hidden'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px]  mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center space-x-3 mb-6'>
						<div className='h-1 w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-sm tracking-widest font-medium'>
							About Me
						</span>
						<div className='h-1 w-10 bg-indigo-500' />
					</div>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
						My Journey & Expertise
					</h2>
					<p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg'>
						With over 5 years of experience crafting digital
						experiences, I combine technical expertise with creative
						design to build solutions that make an impact.
					</p>
				</div>

				{/* About Content */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 place-items-center grid-flow-row'>
					{/* Experience Timeline */}
					<Card
						className={`transition-all duration-1000 delay-300 transform bg-transparent text-gray-800 dark:text-gray-200 ${
							isVisible
								? "translate-x-0 opacity-100"
								: "-translate-x-12 opacity-0"
						}`}>
						<CardHeader className='text-2xl font-bold mb-6 flex items-center bg-transparent text-gray-800 dark:text-gray-200 p-0'>
							<span className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3'>
								<Layers className='w-6 h-6' />
							</span>
							Education & Experience
						</CardHeader>

						<CardBody className='space-y-8 bg-transparent text-gray-200'>
							{experiences.map((exp, index) => (
								<div
									key={index}
									className='relative pl-8 border-l border-gray-300 dark:border-gray-800'>
									<div className='absolute left-0 top-0 -translate-x-1/2 bg-indigo-600 w-4 h-4 rounded-full border-4 border-white dark:border-black'></div>
									<span className='block text-indigo-600 dark:text-indigo-400 text-sm mb-1'>
										{exp.year}
									</span>
									<h4 className='font-bold text-lg text-gray-800 dark:text-gray-200'>
										{exp.position}
									</h4>
									<span className='text-gray-600 dark:text-gray-400 text-sm block mb-2'>
										{exp.company}
									</span>
									<p className='text-gray-700 dark:text-gray-300'>
										{exp.description}
									</p>
								</div>
							))}
						</CardBody>
					</Card>

					{/* Skills & Profile */}
					<Card
						className={`transition-all duration-1000 delay-500 transform p-2 bg-transparent rounded-2xl md:p-4 backdrop-blur-sm border border-gray-300 dark:border-gray-800 ${
							isVisible
								? "translate-x-0 opacity-100"
								: "translate-x-12 opacity-0"
						}`}>
						<CardHeader className='bg-transparent'>
							<div className='flex flex-col md:flex-row md:items-center mb-8 gap-6'>
								<div
									className='w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 flex-shrink-0'
									style={{
										backgroundImage: "url(./IMG_2834.jpg)",
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}></div>
								<div>
									<h3 className='text-2xl font-bold mb-2 text-gray-800 dark:text-gray-400'>
										Shivam Nishad
									</h3>
									<p className='text-gray-700 dark:text-gray-300'>
										Creative developer passionate about
										building beautiful, functional, and
										accessible web experiences.
									</p>
								</div>
							</div>
						</CardHeader>
						<CardBody className='bg-transparent'>
							<h3 className='text-xl font-bold mb-4 text-gray-800 dark:text-gray-400'>
								Core Skills
							</h3>
							<div className=' grid grid-cols-1 grid-flow-row-dense  gap-2 mb-8'>
								{skills.map((skill, index) => (
									<div
										key={index}
										className='flex items-center gap-3 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-400'>
										<div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg flex-shrink-0'>
											{skill.icon}
										</div>
										<span className='font-medium'>
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</CardBody>

						<CardFooter className='bg-transparent'>
							<h3 className='text-xl font-bold mb-4 text-gray-800 dark:text-gray-400'>
								Technologies
							</h3>
							<div className='flex flex-wrap gap-2 mb-6'>
								{[
									"React",
									"Javascript",
									"Next.js",
									"Node.js",
									"Tailwind CSS",
									"HTML/CSS",
									"MongoDB",
									"Git",
								].map((tech, index) => (
									<span
										key={index}
										className='bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm cursor-pointer'>
										{tech}
									</span>
								))}
							</div>
							<a href='#contact'>
								<Button className='group flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 cursor-pointer'>
									Get In Touch
									<ArrowRight
										size={18}
										className='ml-2 transform group-hover:translate-x-1 transition-transform'
									/>
								</Button>
							</a>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
}

export default PortfolioAbout;
