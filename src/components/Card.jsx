import AcompanharButton from "./acompanharButton.jsx";


export default function Card(){


    const imageURL = [
        '/src/assets/cards/colheita-acai.jpg',
        '/src/assets/cards/jacare.jpg',
        './src/assets/cards/onda.jpg',
        './src/assets/cards/barco.jpg'
    ]

    return (
        <>
            <div className="mt-16 w-full h-screen flex justify-center items-center absolute">

                    <div className={`group`}>
                        <div className={`mt-52 absolute flex flex-col
                                        ml-5
                                        group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity `}>
                            <h1 className={`text-center text-white text-2xl font-semibold`}>Instituto Social Ambiental<br></br>(ISA)</h1>
                            <a href={'https://www.socioambiental.org/'} target={'_blank'} rel={'noreferrer'}
                               className={`flex justify-center items-center mt-4 group-hover:opacity-100`}><AcompanharButton></AcompanharButton></a>
                        </div>
                        <div className={`w-card-even h-card-even bg-black absolute -z-10 opacity-100`}></div>
                        <div style={{backgroundImage: `url(${imageURL.at(0)})`}}
                             className={`w-card-even h-card-even bg-cover bg-no-repeat bg-center z-50 drop-shadow-2xl
                                        group-hover:opacity-40 transition-opacity`}>
                        </div>
                    </div>




                    <div className={`group`}>
                        <div className={`mt-96 absolute flex flex-col ml-[4.5rem]
                                        group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity `}>
                            <h1 className={`text-center text-white text-2xl font-semibold`}>SOS Mata Atlantica</h1>
                            <a href={'https://www.sosma.org.br/'} target={'_blank'} rel={'noreferrer'}
                               className={`flex justify-center items-center mt-4 group-hover:opacity-100`}><AcompanharButton></AcompanharButton></a>
                        </div>
                        <div className={`w-card-odd h-card-odd bg-black absolute -z-10 opacity-100`}></div>
                        <div style={{backgroundImage: `url(${imageURL.at(1)})`}}
                             className={`w-card-odd h-card-odd bg-cover bg-no-repeat bg-center mb-9 z-[0] drop-shadow-2xl
                                        group-hover:opacity-40 transition-opacity`}>
                        </div>
                    </div>



                    <div className={`group`}>
                        <div className={`mt-52 absolute flex flex-col ml-[3.5rem]
                                        group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity `}>
                            <h1 className={`text-center text-white text-2xl font-semibold`}>Instituto Onda Verde</h1>
                            <a href={'https://www.ondaverde.org.br/'} target={'_blank'} rel={'noreferrer'}
                               className={`flex justify-center items-center mt-4 group-hover:opacity-100`}><AcompanharButton></AcompanharButton></a>
                        </div>
                        <div className={`w-card-even h-card-even bg-black absolute -z-10 opacity-100`}></div>
                        <div style={{backgroundImage: `url(${imageURL.at(2)})`}}
                             className={`w-card-even h-card-even bg-cover bg-no-repeat bg-center z-[1] drop-shadow-2xl
                                        group-hover:opacity-40 transition-opacity`}>
                        </div>
                    </div>



                    <div className={`group`}>
                        <div className={`mt-96 absolute flex flex-col ml-[7rem]
                                        group-hover:z-20 opacity-0 group-hover:opacity-100 transition-opacity `}>
                            <h1 className={`text-center text-white text-2xl font-semibold`}>ICMBio</h1>
                            <a href={'https://www.gov.br/icmbio/pt-br'} target={'_blank'} rel={'noreferrer'}
                               className={`flex justify-center items-center mt-4 group-hover:opacity-100`}><AcompanharButton></AcompanharButton></a>
                        </div>
                        <div className={`w-card-odd h-card-odd bg-black absolute -z-10 opacity-100`}></div>
                        <div style={{backgroundImage: `url(${imageURL.at(3)})`}}
                             className={`w-card-odd h-card-odd bg-cover bg-no-repeat bg-center -z-[5] drop-shadow-2xl
                                        group-hover:opacity-40 transition-opacity`}>
                        </div>
                    </div>

            </div>
        </>
    )
}