import SectionHeader from "../components/SectionHeader.js"

import Gallery from "../components/Gallery.js";
import imageFilePaths from "../PortfolioImages.js";
const Portfolio = () => {
    return (
        <div 
            id="portfolio" 
            className="bg-[url('../public/assets/resized/bgRockPlant.jpg')] pb-8 lg:pb-14">
            <SectionHeader 
                imgSrc={'/assets/rawImages/portfolioHeader.png'} 
                altText={'PortFolio Section'} />

            <Gallery imageFilePaths={imageFilePaths}/>

        </div>
    )
}

export default Portfolio 