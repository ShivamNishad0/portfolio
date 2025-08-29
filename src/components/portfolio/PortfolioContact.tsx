import { useState, useEffect } from "react";
import {
	Send,
	MapPin,
	Mail,
	Phone,
	Clock,
	Linkedin,
	Github,
} from "lucide-react";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@traken-ui/react";
import axios from "axios";

function PortfolioContact() {
	const [isVisible, setIsVisible] = useState(false);
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { name, email, subject, message } = formState;

		const data = {
			fields: [
				{ name: "full_name", value: name },
				{ name: "email", value: email },
				{ name: "subject", value: subject },
				{ name: "message", value: message },
			],
		};



		
		if (response.status === 200) {
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		}
	};

	const contactInfo = [
		{
			icon: <Mail className='w-5 h-5' />,
			title: "Email",
			value: "sn.shivamni@gmail.com",
			link: "mailto:sn.shivamni@gmail.com",
		},
		{
			icon: <Phone className='w-5 h-5' />,
			title: "Phone",
			value: "+91 8887756715",
			link: "tel:+91 8887756715",
		},
		{
			icon: <MapPin className='w-5 h-5' />,
			title: "Location",
			value: "Kanpur, Uttar Pradesh, India",
			link: null,
		},
		{
			icon: <Clock className='w-5 h-5' />,
			title: "Working Hours",
			value: "Mon-Fri: 9AM - 6PM",
			link: null,
		},
	];

	return (
		<section
			id='contact'
			className='bg-black text-white py-16 md:py-4 lg:py-8 overflow-hidden'>
			<div className='max-w-[768px] w-full xl:max-w-[1080px]  mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center space-x-3 mb-6'>
						<div className='h-1 w-10 bg-indigo-500' />
						<span className='text-indigo-400 uppercase text-sm tracking-widest font-medium'>
							Contact Me
						</span>
						<div className='h-1 w-10 bg-indigo-500' />
					</div>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
						Get In Touch
					</h2>
					<p className='text-gray-300 max-w-2xl mx-auto text-base md:text-lg'>
						Have a project in mind or just want to say hello? Feel
						free to reach out. I'm always open to discussing new
						projects, creative ideas or opportunities to be part of
						your vision.
					</p>
				</div>

				{/* Contact Content */}
				<div className='flex flex-col justify-center items-center md:flex-row  gap-8 lg:gap-12 '>
					{/* Contact Info */}
					<div
						className={`lg:col-span-2 transition-all duration-1000 transform ${
							isVisible
								? "translate-x-0 opacity-100"
								: "-translate-x-12 opacity-0"
						}`}>
						<Card className='bg-gray-900/50 backdrop-blur-sm border text-gray-200 border-gray-800 rounded-2xl p-6 md:p-8 h-full'>
							<CardHeader className='p-0 bg-transparent text-gray-200'>
								<h3 className='text-2xl font-bold mb-6'>
									Contact Information
								</h3>
								<p className='text-gray-300 mb-8'>
									Let's turn your ideas into reality. I'm here
									to help with any questions about
									collaboration or projects.
								</p>
							</CardHeader>

							<CardBody className='space-y-6 bg-transparent p-0'>
								{contactInfo.map((item, index) => (
									<div
										key={index}
										className='flex items-start gap-4'>
										<div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mt-1'>
											{item.icon}
										</div>
										<div>
											<h4 className='text-sm text-gray-400 mb-1'>
												{item.title}
											</h4>
											{item.link ? (
												<a
													href={item.link}
													className='text-white hover:text-indigo-400 transition-colors'>
													{item.value}
												</a>
											) : (
												<p className='text-white'>
													{item.value}
												</p>
											)}
										</div>
									</div>
								))}
							</CardBody>

							<CardFooter className='mt-10 bg-transparent p-0 text-gra-200'>
								<h4 className='text-lg font-semibold mb-4'>
									Connect With Me
								</h4>
								<div className='flex gap-4'>
									<a
										href='https://www.linkedin.com/in/sn-shivam/'
										aria-label={`Connect on Linkedin`}
										className='w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors'>
										<Linkedin />
									</a>
									{/* <a
										href='https://twitter.com/DheeruRajpoot3'
										aria-label={`Connect on Twitter`}
										className='w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors'>
										<Twitter />
									</a> */}
									{/* <a
										href='https://www.instagram.com/dheeru_rajpoot_/'
										aria-label={`Connect on Instagram`}
										className='w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors'>
										<Instagram />
									</a> */}
									<a
										href='https://github.com/ShivamNishad0'
										aria-label={`Connect on Github`}
										className='w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors'>
										<Github />
									</a>
								</div>
							</CardFooter>
						</Card>
					</div>

					{/* Contact Form */}
					<Card
						className={`lg:col-span-3 transition-all backdrop-blur-sm   rounded-2xl duration-1000 border-gray-800 border delay-300 transform bg-transparent text-gray-200 ${
							isVisible
								? "translate-x-0 opacity-100"
								: "translate-x-12 opacity-0"
						}`}>
						<CardBody className=' bg-transparent  p-6 md:p-8'>
							<h3 className='text-2xl font-bold mb-6 text-gray-200'>
								Send Me a Message
							</h3>

							<form onSubmit={handleSubmit} className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-300 mb-2'>
											Your Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formState.name}
											onChange={handleChange}
											required
											className='w-full bg-gray-800/50 border border-gray-700 focus:border-indigo-500 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all'
											placeholder='John Doe'
										/>
									</div>

									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-300 mb-2'>
											Your Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formState.email}
											onChange={handleChange}
											required
											className='w-full bg-gray-800/50 border border-gray-700 focus:border-indigo-500 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all'
											placeholder='john@example.com'
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-gray-300 mb-2'>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										value={formState.subject}
										onChange={handleChange}
										required
										className='w-full bg-gray-800/50 border border-gray-700 focus:border-indigo-500 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all'
										placeholder='Project Discussion'
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-300 mb-2'>
										Your Message
									</label>
									<textarea
										id='message'
										name='message'
										value={formState.message}
										onChange={handleChange}
										required
										rows={5}
										className='w-full bg-gray-800/50 border border-gray-700 focus:border-indigo-500 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all resize-none'
										placeholder="Hello, I'd like to talk about..."></textarea>
								</div>

								<Button
									type='submit'
									className='group flex items-center justify-center w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 cursor-pointer'>
									Send Message
									<Send
										size={18}
										className='ml-2 transform group-hover:translate-x-1 transition-transform'
									/>
								</Button>
							</form>
						</CardBody>
					</Card>
				</div>
			</div>
		</section>
	);
}

export default PortfolioContact;
