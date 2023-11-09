const description = 'Dope Human'
const callToAction = 'Book a session'

const Jumbotron = () => {

    const callToActionClasses = `
        w-3/4 
        mx-auto 
        rounded-none 
        bg-green-900
        text-white
        uppercase
        p-2
        md:w-1/2`

    const JumbotronContainerDesktopClasses = `
        md:flex-row
        md:relative 
        md:max-w-6xl
        md:mx-auto
        `

    return (
        <div className={`p-4 flex flex-col ${JumbotronContainerDesktopClasses}`}>

            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
                className="w-full md:w-1/2"
                src={'/IMG_0302_transparent.png'}
                alt='Goat Witch Tatoo'/>

            <div className={`
                flex flex-col w-full my-10 
                md:w-1/2 md:grid md:content-center md:my-0
                `}>
                <h3 className="m-6 text-white text-center">{description}</h3>
                <button className={callToActionClasses}>{callToAction}</button>
            </div>

        </div>
    )
}

export default Jumbotron