import Card from "./Card.jsx";

export default function Cards () {
    /*
    * TODO:Adicionar animações e parallax
     */
    return(
        <>

            <div>
                <h1 className="text-black text-xl flex justify-center">Parceria pela Sustentabilidade!</h1>
                <div>
                    <Card num={0}></Card>
                </div>
                <div className="bg-black w-full h-99">

                </div>
            </div>
        </>
    )
}