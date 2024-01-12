
const SectionTitle = ({imgSrc, altText}) => {

    return <img 
        src={imgSrc} 
        className="max-h-10 mx-12 md:max-h-20 md:mx-28 lg:mx-36 lg:mt-10"
        alt={altText}/>
}

export default SectionTitle