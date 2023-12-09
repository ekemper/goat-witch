
export default function ScrollSpySpacer() {
    const negMargins = `-mt-3 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-14`
    return <div className={`h-12 sm:h-24 absolute ${negMargins}`}>
    <img src={"/assets/sectionDivider.png"} alt="section-spacer"/>
    </div>
}