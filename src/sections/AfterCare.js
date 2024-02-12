
import SectionHeader from "components/SectionHeader"

const paragraphs = [
    {
        header: `First Steps`,
        items: [
            `If you opted for a transparent semi-permeable dressing, it can be left on for 24 to 48 hours. Remove it earlier if you get a buildup of liquid plasma that looks like it is trying to make an escape out the side, or if the bandage peels up, exposing the tattoo. It is easiest to remove under lukewarm running water. `,
            `If you opted for plastic wrap, remove the wrap within three hours.`,
            `After removing the initial dressing, follow the instructions below to gently cleanse and moisturize the tattoo. As soon as you remove the bandage, you need to begin a consistent routine of cleansing, moisturizing and protecting your tattoo.`
        ]
    },
    {
        header: `Gentle Cleansing`,
        items: [
            `You need to keep your tattoo clean. Wash it a minimum of twice a day.`,
            `Wash your tattoo softly, no scrubbing!`,
            `Use lukewarm water and a gentle liquid soap, my favorite is the unscented Castile oil soap by Dr. Bronners.`,
            `Gently pat the tattoo dry with a clean, soft cloth. avoid rubbing.`,
        ]
    },
    {
        header: `Moisturizing Magic`,
        items: [
            `The broken skin of your tattoo will dry out easily. In order for your tattoo to heal well and look good you will need to moisturize it several times a day until it is fully healed.`,
            `There are many moisturizers that can work, provided that they are unscented, do not contain alcohol, and do not irritate your skin.`,
            `My favorite way to moisturize is to glide a thin layer of shea butter or coconut oil on the tattoo.`,
            `Ensure your hands are clean before touching the tattoo to prevent any potential infections.`
        ]
    },
    {
        header: "Hydration Hero",
        items: [
            "Stay well-hydrated by drinking plenty of water to aid in the healing process and maintain skin elasticity."
        ]
    },
    {
        header: "Sun Shield Spell",
        items: [
            "Protect your tattoo from direct sunlight, especially during the initial healing weeks. Direct sun can absolutely ruin your healing tattoo.",
            "Once your tattoo is fully healed, it still needs to be protected from the sun to keep it looking good. Wear protective clothing or use a sunscreen with high SPF to prevent fading and damage."
        ]
    },
    {
        header: "Clothing Caution",
        items: [
            "Wear loose-fitting, breathable clothing over your tattoo to avoid irritation.",
            "Opt for fabrics like cotton to allow your skin to breathe."
        ]
    },
    {
        header: "Stay out of the swamp! No Swimming or Hot Tubs",
        items: [
            "Refrain from swimming in pools, hot tubs, or other bodies of water until the tattoo is fully healed to prevent infections. Two weeks is a good estimate but individual healing times vary.",
            "Serious (even deadly) infections and damage to the tattoo can occur if you do not follow this advice!",
            "Avoid sweating heavily for the first several days to a week. Cleanse and moisturize after breaking a sweat.",
            "Don’t let your tattoo hang out wet, too much moisture is breeding grounds for bacteria."
        ]
    },
    {
        header: "Herbal Soothing",
        items: [
            "If you are experiencing discomfort, consider applying a thin layer of aloe vera gel. Ensure it's free of additives and alcohol.",
            "Natural first aid salves designed for application on broken skin with ingredients like calendula and comfrey can help calm and soothe your tattoo."
        ]
    },
    {
        header: "Listen to Your Skin",
        items: [
            "Pay attention to your body's reactions; if you notice any unusual redness, swelling, or discharge, consult with a healthcare professional immediately.",
            "If your tattoo is itchy, cleanse and moisturize it. Never pick or scratch!"
        ]
    },
    {
        header: "Patience and Persistence",
        items: [
            "Healing times vary, but on average, it takes 2-4 weeks. Be patient and consistent with your aftercare routine."
        ]
    },
    {
        header: "Consult the Witch",
        items: [
            "If you have any concerns or questions about your tattoo's healing process, don't hesitate to reach out for questions or support.",
            "Email me a picture if you are unsure or have questions about your tattoo.",
            "Touch ups for are free for the first two years."
        ]
    }
]

const Items = ({ items }) => {
    return items.map((item, index) => {
        return (<li
            className="mt-4 lg:mt-6"
            key={index}
            style={{ color: "#ffffff", }}>
            {item}
        </li>)
    })
}

const Aftercare = () => {
    return (
        <div id="aftercare" className="bg-[url('../public/assets/resized/bgRockPlant.jpg')] pb-8 lg:pb-14">
            <SectionHeader imgSrc={'./assets/rawImages/aftercareHeader.png'} altText={'Aftercare Section'} />

            <div className="px-8 pb-8 mx-auto w-4/5 sm:w-3/4 mt-4 lg:w-2/3"
                style={{'background-color': 'black', opacity: '70%'}}>

                <h2 className="text-2xl font-bold pt-8" style={{ color: "#ffffff", }}>
                    Congratulations on your tattoo! To ensure its vibrant longevity, follow these aftercare recommendations
                </h2>

                {paragraphs.map((paragraph) => {
                    return (
                        <div className="pt-8" key={paragraph.header}>
                            <h2
                                className="text-2xl font-bold uppercase"
                                style={{ color: "#ffffff", }}>
                                {paragraph.header}
                            </h2>
                            <ul className="list-disc px-8">
                                <Items items={paragraph.items} />
                            </ul>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Aftercare


/**
 * 

:





Hydration Hero:
Stay well-hydrated by drinking plenty of water to aid in the healing process and maintain skin elasticity.

Sun Shield Spell:
Protect your tattoo from direct sunlight, especially during the initial healing weeks. Direct sun can absolutely ruin your healing tattoo.
Once your tattoo is fully healed, it still needs to be protected from the sun to keep it looking good. Wear protective clothing or use a sunscreen with high SPF to prevent fading and damage.

Clothing Caution:
Wear loose-fitting, breathable clothing over your tattoo to avoid irritation.
Opt for fabrics like cotton to allow your skin to breathe.

Stay out of the swamp! No Swimming or Hot Tubs:
Refrain from swimming in pools, hot tubs, or other bodies of water until the tattoo is fully healed to prevent infections. Two weeks is a good estimate but individual healing times vary.
Serious (even deadly) infections and damage to the tattoo can occur if you do not follow this advice!
Avoid sweating heavily for the first several days to a week. Cleanse and moisturize after breaking a sweat. 
Don’t let your tattoo hang out wet, too much moisture is breeding grounds for bacteria.

Herbal Soothing:
If you are experiencing discomfort, consider applying a thin layer of aloe vera gel – ensure it's free of additives and alcohol.
Natural first aid salves designed for application on broken skin with ingredients like calendula and comfrey can help calm and soothe your tattoo.

Listen to Your Skin:
Pay attention to your body's reactions; if you notice any unusual redness, swelling, or discharge, consult with a healthcare professional immediately.
If your tattoo is itchy, cleanse and moisturize it. Never pick or scratch!

Patience and Persistence:
Healing times vary, but on average, it takes 2-4 weeks. Be patient and consistent with your aftercare routine.

Consult the Witch:
If you have any concerns or questions about your tattoo's healing process, don't hesitate to reach out for questions or support.
Email me a picture if you are unsure or have questions about your tattoo.
Touch ups for are free for the first two years, 


Ritual Aftercare

Integration of ritual experience takes time and can vary from feelings of celebratory easeful lightness, to embracing the gravity of big emotions. Healing and growth rarely take a straight line and sometimes we find ourselves weaving in and out of the emotional and cognitive work. 

For this reason we will have a planned check-in. Check-ins can range from a simple message exchange, to meeting again in person to help you resolve loose ends. This really depends on the depth of the work we get into and how individual needs vary. 

If you need further processing, please contact me so that we can help you find resolution. If your needs are outside of my scope of practice, I can help you to connect with professional resources for mental health and spiritual advisement. 




 * 
 */