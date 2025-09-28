import { Button } from "@traken-ui/react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

let closeIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='24'
		height='24'
		fill='#fff'>
		<path d='M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z' />
	</svg>
);
let menuIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='24'
		height='24'
		fill='#fff'>
		<path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z' />
	</svg>
);

let sunIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='24'
		height='24'
		fill='currentColor'>
		<path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
	</svg>
);

let moonIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='24'
		height='24'
		fill='currentColor'>
		<path
			fillRule='evenodd'
			d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
			clipRule='evenodd'
		/>
	</svg>
);

const links = ["Home", "Skills", "Projects", "About", "Contact"];

function NavbarPortfolio() {
	const [isOpen, setIsOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header
			className={`w-full bg-transparent dark:bg-gray-900/50 fixed top-0 left-0 backdrop-blur-2xl shadow-md z-50 md:px-8`}>
			{/* Desktop Navbar */}
			<div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-2 sm:px-8 lg:px-10 py-4 flex justify-between items-center'>
				{/* Logo and Links */}
				<div className='text-3xl font-bold text-gray-800 dark:text-gray-200'>
					<a href='/'>Shivam Nishad</a>
				</div>

				<div className='hidden lg:flex items-center justify-between'>
					<nav className='flex gap-6 items-center justify-start'>
						{links.map((link) => (
							<a
								key={link}
								href={`#${link.toLowerCase()}`}
							className={`hover:text-[#aeb5ff] text-gray-800 dark:text-gray-200 hover:-translate-y-1 duration-300  transition-all`}>
								{link}
							</a>
						))}
					</nav>
					<button
						onClick={toggleTheme}
						className='ml-4 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
						aria-label='Toggle theme'>
						{theme === 'light' ? moonIcon : sunIcon}
					</button>
					<a href='#contact'>
						<Button className='px-4 py-2 bg-[#432DD7] font-semibold cursor-pointer hover:bg-[#442dd7aa] transition-all duration-300 ml-6 rounded-md hover:-translate-y-1 text-white'>
							Hire me
						</Button>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className='lg:hidden'>
					<button onClick={toggleMenu}>
						{isOpen ? (
							<b className='h-6 w-6  font-semibold'>
								{closeIcon}
							</b>
						) : (
							<b className='h-6 w-6 font-semibold'>{menuIcon}</b>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div
					className={`lg:hidden transition-all duration-300 shadow-2xl border-b border-gray-700 dark:border-gray-600 dark:bg-gray-900/95 rounded-b-md px-6 py-4 flex flex-col gap-4 justify-center items-center`}>
					{links.map((link) => (
						<a
							key={link}
							href={`#${link.toLowerCase()}`}
							className={`hover:text-[#aeb5ff] text-gray-800 dark:text-gray-200  hover:-translate-y-1 duration-300  transition-all`}>
							{link}
						</a>
					))}
					<button
						onClick={toggleTheme}
						className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
						aria-label='Toggle theme'>
						{theme === 'light' ? moonIcon : sunIcon}
					</button>

					<Button className='px-4 py-2 bg-[#432DD7] font-semibold cursor-pointer hover:bg-[#442dd7aa] transition-all duration-300 rounded-md hover:-translate-y-1 text-gray-200'>
						Hire me
					</Button>
				</div>
			)}
		</header>
	);
}

export default NavbarPortfolio;
