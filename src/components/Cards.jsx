import Card from "./Card.jsx";

export default function Cards () {
    /*
    * TODO:Adicionar animações e parallax
     */
    return(
        <>

            <div className="relative">
                <div className="flex justify-center">
                    <h1 className=" z-20 text-white text-5xl font-semibold absolute pt-4">
                        Parceria pela <span className="text-green-500"> Sustentabilidade!</span>
                    </h1>
                </div>
                <div className="z-10">
                    <Card num={0}></Card>
                </div>
                <div className="bg-black w-full h-99">

                </div>
            </div>
        </>
    )
}