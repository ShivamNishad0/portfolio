import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@traken-ui/react";
import "./styles/style.css";

function PortfolioHero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timeout);
	}, []);

	const roles = [
		"Full Stack Developer",
		"Frontend Developer",
		"Backend Developer",
	];

	const [roleIndex, setRoleIndex] = useState(0);
	const [typedText, setTypedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentRole = roles[roleIndex];
		let timeout: number;

		if (!isDeleting && typedText !== currentRole) {
			timeout = window.setTimeout(() => {
				setTypedText(currentRole.substring(0, typedText.length + 1));
			}, 100);
		} else if (isDeleting && typedText !== "") {
			timeout = window.setTimeout(() => {
				setTypedText(currentRole.substring(0, typedText.length - 1));
			}, 50);
		} else if (!isDeleting && typedText === currentRole) {
			timeout = window.setTimeout(() => {
				setIsDeleting(true);
			}, 1000);
		} else if (isDeleting && typedText === "") {
			timeout = window.setTimeout(() => {
				setIsDeleting(false);
				setRoleIndex((prev) => (prev + 1) % roles.length);
			}, 500);
		}

		return () => clearTimeout(timeout);
	}, [typedText, isDeleting, roleIndex]);

	return (
		<section
			id='home'
			className='relative flex  items-center justify-center w-full bg-white dark:bg-black text-black dark:text-white py-18 md:py-24 lg:py-32 overflow-hidden'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px] flex flex-col items-center md:flex-row md:items-start md:justify-center gap-8 md:gap-12 px-4 sm:px-6 z-10'>
				{/* Left Content */}
				<Card
					className={`w-full bg-transparent flex flex-col items-center md:items-start md:w-1/2 transition-all duration-1000 transform ${
						isVisible
							? "translate-x-0 opacity-100"
							: "-translate-x-12 opacity-0"
					}`}>
					<CardHeader className='flex bg-transparent items-center justify-center md:justify-start w-full space-x-3 mb-4 md:mb-6 p-0'>
						<div className='h-1 w-8 md:w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-xs md:text-sm tracking-widest font-medium'>
							Portfolio
						</span>
					</CardHeader>

					<CardBody className='flex flex-col items-center md:items-start w-full bg-transparent p-0'>
						<h1 className='text-center md:text-left w-full text-4xl text-gray-800 dark:text-gray-200 font-bold mb-3 md:mb-4 leading-tight'>
							Hello, I'm Shivam Nishad
							<span className='block mt-2 text-indigo-400'>
								{typedText}
								<span className='animate-pulse'>|</span>
							</span>
						</h1>
						<p className='text-center px-2 md:px-0 md:text-left w-full text-[1rem] text-gray-600 dark:text-gray-300 mb-6 md:mb-8'>
							Hi, I'm Shivam Nishad, a passionate Full Stack
							Developer and Digital Entrepreneur with a knack for
							building powerful web experiences. With years of
							hands-on experience in WordPress, MERN Stack, and
							Next.js, I've successfully delivered a wide range of
							projects—from dynamic social platforms to e-commerce
							solutions and digital marketing tools.
						</p>
					</CardBody>

					<CardFooter className='flex flex-col sm:justify-center md:justify-start sm:flex-row items-center  w-full gap-3 md:gap-4 bg-transparent p-0'>
						<a href='./Resume.pdf' download='Shivam Nishad.pdf'>
							<Button className='group flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base font-medium py-3 px-4  rounded-md transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 cursor-pointer'>
								Download Resume
								<ArrowRight
									size={16}
									className='ml-2 transform group-hover:translate-x-1 transition-transform'
								/>
							</Button>
						</a>

						<div className='flex items-center space-x-3 md:space-x-4 ml-1'>
							<a
								href='https://github.com/ShivamNishad0'
								aria-label='GitHub'
								className='text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300'>
								<Github size={18} className='md:w-5 md:h-5' />
							</a>
							<a
								href='https://www.linkedin.com/in/sn-shivam/'
								aria-label='LinkedIn'
								className='text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300'>
								<Linkedin size={18} className='md:w-5 md:h-5' />
							</a>
							<a
								href='mailto:sn.shivamni@gmail.com'
								aria-label='Email'
								className='text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300'>
								<Mail size={18} className='md:w-5 md:h-5' />
							</a>
						</div>
					</CardFooter>
				</Card>

				{/* Right Image */}
				<div
					className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 transform ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-12 opacity-0"
					}`}>
					<div className='relative w-100 h-100 mx-auto md:mx-0 md:ml-auto sm:mt-10'>
						<div className='absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500'>
							<div className='absolute inset-1 rounded-full bg-white dark:bg-black flex items-center justify-center overflow-hidden'>
								<div
									className='w-full h-full rounded-full bg-cover bg-center'
									style={{
										backgroundImage: `url('./IMG_2834.jpg')`,
										backgroundSize: "cover",
										backgroundPosition: "top",
									}}></div>
							</div>
						</div>

						{/* Floating tags */}
						<Button className='absolute top-0 right-0 bg-gray-100 dark:bg-gray-900 py-1 px-4 md:py-2 md:px-4 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 animate-float cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 '>
							<span className='text-xs md:text-sm font-medium '>
								Full Stack Developer{" "}
							</span>
						</Button>
						<Button className='absolute bottom-0 left-0 bg-gray-100 dark:bg-gray-900 py-1 px-4 md:py-2 md:px-6 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 animate-float-delay cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 '>
							<span className='text-xs md:text-sm font-medium'>
								Frontend
							</span>
						</Button>
						<Button className='absolute bottom-0 right-0 bg-gray-100 dark:bg-gray-900 py-1 px-3 md:py-2 md:px-4 rounded-full shadow-lg border border-gray-300 dark:border-gray-800 animate-float-delay-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 '>
							<span className='text-xs md:text-sm font-medium'>
								Backend
							</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfolioHero;
