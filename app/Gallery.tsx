/* eslint-disable @next/next/no-img-element */

import filePaths from "./ImageFilePaths.js";

const Gallery = () => {
    return (
        <div className="container mx-auto mt-16 md:mt-36 px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                {
                    filePaths.map((path, index) => {
                        return (
                            <div className="flex md:w-1/3 flex-wrap" key={index}>
                                <div className="w-full p-1 md:p-2">
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src={path} />
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    )


}

export default Gallery
