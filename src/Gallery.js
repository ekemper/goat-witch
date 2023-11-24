
import filePaths from "./ImageFilePaths.js";
import ScrollSpySpacer from "./ScrollSpySpacer.js";

const GalleryImage = ({ path }) => {

    return (
        <div className="flex md:w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={path} />
            </div>
        </div>
    )
}

const Gallery = () => {
    return (
        <div id="gallery">
            <ScrollSpySpacer />
            <div className="container mx-auto mt-16 md:mt-36 px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {
                        filePaths.map((path, index) => {
                            return (<GalleryImage path={path} key={index} />)
                        })
                    }
                </div >
            </div>
        </div>
    )
}

export default Gallery
