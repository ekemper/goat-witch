
import filePaths from "./ImageFilePaths.js";
import ScrollSpySpacer from "./ScrollSpySpacer.js";
import SectionTitle from "./SectionTitle.js";
import { useState } from 'react'

const GalleryImage = ({ path }) => {

    return (
        <div className="flex md:w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
                <img
                    alt="gallery image"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={path} />
            </div>
        </div>
    )
}

const Gallery = () => {
    const [showMore, setShowMore] = useState(false)
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const medBreakpoint = '640'
    const showAllGalleryImages = vw > medBreakpoint
    return (
        <div id="gallery" className="bg-[url('../public/assets/bgSkullMoss.jpg')] pb-8 lg:pb-14">
            <ScrollSpySpacer />
            <SectionTitle imgSrc={'/assets/portfolioHeader.jpg'}/>
            <div className="container mx-auto mt-14 md:mt-36 px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {
                        filePaths.map((path, index) => {

                            if(!showAllGalleryImages && !showMore && index > 2) return 

                            return <GalleryImage path={path} key={index} />
                        })
                    }
                </div>

                {!showMore && !showAllGalleryImages && <button
                    onClick={() => setShowMore(true)}
                    className="w-full 
                        rounded-none 
                        text-white
                        bg-black
                        font-bold
                        uppercase
                        p-2
                        my-10">
                    See More!
                </button>}
            </div>
        </div>
    )
}

export default Gallery
