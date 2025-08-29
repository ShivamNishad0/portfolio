import { Button } from "@traken-ui/react";
import { useState } from "react";

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

const links = ["Home", "Skills", "Projects", "About", "Contact"];

function NavbarPortfolio() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header
			className={`w-full bg-transparent fixed top-0 left-0 backdrop-blur-2xl shadow-md z-50 md:px-8`}>
			{/* Desktop Navbar */}
			<div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-2 sm:px-8 lg:px-10 py-4 flex justify-between items-center'>
				{/* Logo and Links */}
				<div className='text-3xl font-bold text-gray-200'>
					<a href='/'>Shivam Nishad</a>
				</div>

				<div className='hidden lg:flex items-center justify-between'>
					<nav className='flex gap-6 items-center justify-start'>
						{links.map((link) => (
							<a
								key={link}
								href={`#${link.toLowerCase()}`}
								className={`hover:text-[#aeb5ff] text-gray-200 hover:-translate-y-1 duration-300  transition-all`}>
								{link}
							</a>
						))}
					</nav>
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
					className={`lg:hidden transition-all duration-300 shadow-2xl border-b border-gray-700 rounded-b-md px-6 py-4 flex flex-col gap-4 justify-center items-center`}>
					{links.map((link) => (
						<a
							key={link}
							href={`#${link.toLowerCase()}`}
							className={`hover:text-[#aeb5ff] text-gray-200  hover:-translate-y-1 duration-300  transition-all`}>
							{link}
						</a>
					))}

					<Button className='px-4 py-2 bg-[#432DD7] font-semibold cursor-pointer hover:bg-[#442dd7aa] transition-all duration-300 rounded-md hover:-translate-y-1 text-gray-200'>
						Hire me
					</Button>
				</div>
			)}
		</header>
	);
}

export default NavbarPortfolio;
