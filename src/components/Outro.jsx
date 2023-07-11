import {useState} from "react";

export default function Outro(){

    const imageURL = [
        './src/assets/Images.png'
    ]

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email); // Implementar envio de email
        setEmail(''); // Limpar o valor do email após o envio.
    };

    return (
        <>
            <div>
                <div className={`mt-20
                                sm:-mt-[80rem]
                                xl:mt-[1rem]`}>
                    <div style={{backgroundImage: `url(${imageURL.at(0)})` }}
                            className={`bg-cover bg-center bg-no-repeat w-full h-screen opacity-30 absolute`}></div>
                    <div className="absolute flex flex-col justify-center items-center h-screen w-full">
                        <h1 className="text-white text-5xl font-bold">Junte-se a nós!</h1>
                        <form>
                            <input type="email" placeholder='Insira seu Email' value={email} onChange={handleEmailChange}
                                    className={`w-[600px] h-12 mt-10 
                                                outline outline-3 outline-white rounded-xl placeholder-white
                                                bg-transparent text-white text-center
                                                sm:w-[480px]
                                                lg:w-[600px]`}>
                            </input>
                            <div className={`ml-56
                                            sm:ml-[10.5rem]
                                            lg:ml-[14.2rem]
                                            xl:mt-10
                                            `}>
                                <button type="submit"
                                    className={`h-8 w-36 outline outline-2 outline-green-500 rounded font-semibold text-white
                                                hover:bg-green-500 hover:text-white transition-colors`}>
                                    Cadastrar
                                </button>
                            </div>
                        </form>

                        <p className={`text-white text-center mt-10
                                        sm:px-5`}>
                            Na luta contra as mudanças climáticas e na proteção do nosso planeta cada ação conta. <br></br>
                            Assuma o compromisso de reduzir sua pegada de carbono, adotar práticas sustentáveis e<br></br>
                            apoiar iniciativas ambientais.</p>
                    </div>

                    <div className="bg-black w-full h-screen"></div>
                </div>

            </div>
        </>
    )

}
