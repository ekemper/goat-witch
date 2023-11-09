import { create } from "domain";
import { FC } from "react";

const imgUrls = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
]


{/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let chunkSize = 3;
let chunks = [];

while (numbers.length > 0) {
    chunks.push(numbers.splice(0, chunkSize));
}
console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

*/}

const createImgRows = () => {
    let chunkSize = 3;
    let rows = []
    while (imgUrls.length > 0) {
        rows.push(imgUrls.splice(0, chunkSize));
    }
    return rows
}

const imageUrlsByRow = createImgRows()
console.log({imageUrlsByRow})

const imageClasses = `h-auto max-w-full`

const Gallery = () => {
    return (<div className="grid grid-cols-2 md:grid-cols-3" >

        {imageUrlsByRow.map((row, index) => {
            return (
                <div className="grid" key={index}>
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img className={imageClasses} src={imageUrlsByRow[index][0]} alt={`${index} - 1`} />
                    </div>
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img className={imageClasses} src={imageUrlsByRow[index][1]} alt={`${index} - 2`} />
                    </div>
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img className={imageClasses} src={imageUrlsByRow[index][2]} alt={`${index} - 3`} />
                    </div>
                </div>
            )
        })}
    </div>)
}

export default Gallery