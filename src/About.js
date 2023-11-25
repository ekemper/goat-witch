import ScrollSpySpacer from "./ScrollSpySpacer"

const About = () => {

    const headerText = `Hi, my name is Carlyn!`
    const bodyText = `I’m a Colorado-born artist with a deep love for people, animals, plants and the land. 
        I am transmasculine gender-gueer and prefer they/them pronouns.`

    return (
        <div id="about">
            <ScrollSpySpacer />
            <div className="w-4/5 mt-16 md:mt-36 mx-auto md:grid md:grid-cols-2 max-w-5xl">
                <h1 className="text-left px-4 mb-4 text-white">About</h1>
                <img className="mx-auto max-w-xsm rounded-full" alt="Hurray!" src={"/about-small.jpg"} />
                <div className="bg-grayGreenBackground mt-4 text-white md:m-28">
                    <h4 className="text-left px-4 pt-4">{headerText}</h4>
                    <p className="text-left px-4 pb-4">{bodyText}</p>
                </div>

            </div>
        </div>
    )
}

export default About