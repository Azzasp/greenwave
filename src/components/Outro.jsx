import AcompanharButton from "./acompanharButton.jsx";
import {useState} from "react";

export default function Outro(){

    const imageURL = [
        './src/assets/Images.png'
    ]

    const [email, setEmail] = useState('');

    return (
        <>
            <div>
                <div className="mt-20">
                    <div style={{backgroundImage: `url(${imageURL.at(0)})` }}
                            className="bg-cover bg-center bg-no-repeat
                                        w-full h-screen opacity-30 absolute"></div>
                    <div className="absolute flex flex-col justify-center items-center h-screen w-full">
                        <h1 className="text-white text-5xl font-bold">Junte-se a nós!</h1>
                        <div>
                            <input type="email" placeholder='Insira seu Email'
                                    className={`w-[600px] h-12 mt-10 
                                                outline outline-3 outline-white rounded-xl placeholder-white
                                                bg-transparent text-white text-center`}>
                            </input>
                        </div>
                        <div className="mt-10"><AcompanharButton></AcompanharButton></div>

                        <p className="text-white text-center mt-10">Na luta contra as mudanças climáticas e na proteção do nosso planeta cada ação conta. <br></br>
                            Assuma o compromisso de reduzir sua pegada de carbono, adotar práticas sustentáveis e<br></br>
                            apoiar iniciativas ambientais.</p>
                    </div>

                    <div className="bg-black w-full h-screen"></div>
                </div>

            </div>
        </>
    )

}
