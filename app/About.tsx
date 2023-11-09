const About = () => {

    const headerText = `Hi, my name is Carlyn!`
    const bodyText = `I’m a Colorado-born artist with a deep love for people, animals, plants and the land. 
        I am transmasculine gender-gueer and prefer they/them pronouns.`

    return (
        <div className="w-3/4 mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img className="mx-auto max-w-xsm" alt="Hurray!" src={"/about-small.jpg"} />
            <div className="bg-slate-500 mt-4">
                <h4 className="text-left px-4 pt-4">{headerText}</h4>
                <p className="text-left px-4 pb-4">{bodyText}</p>
            </div>

        </div>
    )
}

export default About