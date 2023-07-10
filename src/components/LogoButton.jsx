

export default function LogoButton(){

    /*
    * TODO: Animação de opacidade e funcionalidade de retornar ao inicio
    * */

    return(
        <>
            <div className={`inline-block end-0 bottom-6 right-6 fixed
                            drop-shadow-xl`}>

                <div className="w-16 h-16 rounded-full bg-black">
                    <h1 className={`text-white text-2xl font-bold
                                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                        G<span className={`text-green-500`}>W</span>
                    </h1>
                </div>
            </div>
        </>
    )
}