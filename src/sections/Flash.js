import SectionHeader from "../components/SectionHeader"
import imageFilePaths from "../FlashImages.js";
import Gallery from "../components/Gallery.js";

const Flash = () => {
    return (
        <div id="flash" className="bg-[url('../public/assets/bgRockPlant.jpg')] pb-8 lg:pb-14">
            <SectionHeader imgSrc={'./assets/flashHeader.png'} altText={'Flash Section'} />
            <Gallery imageFilePaths={imageFilePaths}/>
        </div>
    )
}

export default Flash 