
export default function ScrollSpySpacer() {
    const negMargins = `-mt-3 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-14`
    return <div className={`h-12 sm:h-24 max-w-screen-2xl mx-auto absolute ${negMargins}`}>
        <img src={"/assets/resized/sectionDivider.png"} alt="section-spacer" />
    </div>
}