const TailwindWidthGuide = () => {
    return (
        <div className="fixed right-4 top-36 z-50 text-3xl" style={{ color: "#ffffff", }}>
            <h1 className="hidden xs:block mx-4">XS</h1>
            <h1 className="hidden sm:block mx-4">SM</h1>
            <h1 className="hidden md:block mx-4">MD</h1>
            <h1 className="hidden lg:block mx-4">LG</h1>
            <h1 className="hidden xl:block mx-4">XL</h1>
            <h1 className="hidden 2xl:block mx-4">2XL</h1>
        </div>

    )
}

export default TailwindWidthGuide