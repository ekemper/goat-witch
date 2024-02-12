
import { useState } from 'react'

const GalleryImage = ({ path }) => {

    return (
        <div className="flex mx-auto w-4/5 md:w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={path} />
            </div>
        </div>
    )
}

const Gallery = ({imageFilePaths}) => {
    const [showMore, setShowMore] = useState(false)
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const medBreakpoint = '640'
    const showAllImgForDesktop = vw > medBreakpoint
    return (
        <div className="pb-8 lg:pb-14">
            <div className="container mx-auto mt-10 md:mt-28 px-5 py-2 lg:px-32 ">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {
                        imageFilePaths.map((path, index) => {
                            const dontShowThatImage = !showAllImgForDesktop 
                                && !showMore 
                                && index > 2

                            if(dontShowThatImage) return null

                            return <GalleryImage path={path} key={index} />
                        })
                    }
                </div>

                {!showMore && !showAllImgForDesktop && <button
                    onClick={() => setShowMore(true)}
                    className="w-full 
                        text-white
                        bg-black
                        font-bold
                        uppercase
                        p-2
                        my-10
                        border-solid border-2
                        backdrop-blur-lg"
                    style={{color: "#ffffff",}}>
                    See More!
                </button>}
            </div>
        </div>
    )
}

export default Gallery
