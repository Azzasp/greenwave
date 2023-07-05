
export default function Noticias(){

    const imageURL = [
        'src/assets/news/congress.jpg',
        'src/assets/news/penguins.jpg',
        'src/assets/news/jihm-basalto.webp'
    ]

    return(
        <>
            <div className="mt-40">
                <h1 className="text-black text-5xl font-semibold flex justify-center">Noticias</h1>
                <div>
                    <div className="flex justify-center items-center mt-24">
                        <div style={{backgroundImage: `url(${imageURL.at(2)})`}}
                                className="w-48 h-48 bg-cover bg-no-repeat bg-center"></div>

                        <span className="ml-6">
                            <h3 className="text-black font-semibold text-xl">O pó mágico que pode ajudar a combater
                            as mudanças climáticas</h3>
                            <br></br>
                            <p>Em uma pedreira cercada pelo barulho de maquinário pesado,<br></br>
                                Jim Mann se agacha e pega um punhado de minúsculas<br></br>
                                pedras pretas. Este é o meu pó mágico, diz ele com um sorriso,<br></br>
                                esfregando-as suavemente entre os dedos.</p>
                        </span>
                    </div>
                    <div className="flex justify-center items-center mt-20">
                        <div style={{backgroundImage: `url(${imageURL.at(1)})`}}
                             className="w-48 h-48 bg-cover bg-no-repeat bg-center"></div>

                        <span className="ml-6">
                            <h3 className="text-black font-semibold text-xl">Efeitos da mudança climática e o
                                papel das empresas no combate</h3>
                            <br></br>
                            <p>Os efeitos de mudanças climáticas podem ser sentidos diariamente com o <br></br>
                                aumento das secas, alagamentos, aumento do nível do mar e outros fatos<br></br>
                                que apontam para um desequilíbrio ambiental.</p>
                        </span>
                    </div>
                    <div className="flex justify-center items-center mt-20">
                        <div style={{backgroundImage: `url(${imageURL.at(0)})`}}
                             className="w-48 h-48 bg-cover bg-no-repeat bg-center"></div>

                        <span className="ml-6">
                            <h3 className="text-black font-semibold text-xl">Efeitos da mudança climática e o
                                papel das empresas no combate</h3>
                            <br></br>
                            <p>Opresidente Luiz Inácio Lula da Silva cobrou de governantes mundiais uma luta<br></br>
                                unida contra a desigualdade em suas várias vertentes e a mudança de órgãos<br></br>
                                internacionais para melhorar a governança global e retratar a nova<br></br>
                                geopolítica do planeta.</p>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )

}