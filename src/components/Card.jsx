

export default function Card(){


    const imageURL = [
        '/src/assets/cards/colheita-acai.jpg',
        '/src/assets/cards/jacare.jpg',
        './src/assets/cards/onda.jpg',
        './src/assets/cards/barco.jpg'
    ]

    return (
        <>
            <div className="mt-16 w-full h-screen mx-auto flex justify-center items-center absolute">
                <div style={{backgroundImage: `url(${imageURL.at(0)})`}}
                     className="w-card-even h-card-even bg-cover bg-no-repeat bg-center z-[1]">
                </div>
                <div style={{backgroundImage: `url(${imageURL.at(1)})`}}
                     className="w-card-odd h-card-odd bg-cover bg-no-repeat bg-center mb-9 z-[0]">
                </div>
                <div style={{backgroundImage: `url(${imageURL.at(2)})`}}
                     className="w-card-even h-card-even bg-cover bg-no-repeat bg-center z-[1]">
                </div>
                <div style={{backgroundImage: `url(${imageURL.at(3)})`}}
                     className="w-card-odd h-card-odd bg-cover bg-no-repeat bg-center mb-9 z-[0]">
                </div>
            </div>
        </>
    )
}