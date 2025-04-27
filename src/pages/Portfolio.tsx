import NavbarPortfolio from "../components/portfolio/PortfolioNavbar";
import PortfolioAbout from "../components/portfolio/PortfolioAbout";
import PortfolioContact from "../components/portfolio/PortfolioContact";
import PortfolioFooter from "../components/portfolio/PortfolioFooter";
import PortfolioHero from "../components/portfolio/PortfolioHeroSection";
import PortfolioSkills from "../components/portfolio/PortfolioSkills";
import PortfolioProjects from "../components/portfolio/PortfolioProjects";

function Portfolio() {
	return (
		<>
			<NavbarPortfolio />
			<PortfolioHero />
			<PortfolioSkills />
			<PortfolioProjects />
			<PortfolioAbout />
			<PortfolioContact />
			<PortfolioFooter />
		</>
	);
}

export default Portfolio;
