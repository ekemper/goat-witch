
import ScrollSpySpacer from "./ScrollSpySpacer"
import SectionTitle from "./SectionTitle"

const SectionHeader = ({ imgSrc, altText }) => {

    return (<>
        <ScrollSpySpacer />
        <div className="h-20"></div>
        <SectionTitle imgSrc={imgSrc} altText={altText} />
    </>)
}

export default SectionHeader