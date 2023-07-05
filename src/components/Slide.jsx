import {useState} from "react";

export default function Slide(){

    /*TODO: Separar as funcionalidades das arrows, criar as transições
        e implementar {...}
     */
    const [num, setNum] = useState(0);

    const imageURL = [
        './src/assets/ods13.png',
        './src/assets/ods14.png',
        './src/assets/ods15.png'
    ]

    function handleClick(){
        if(num > imageURL.length -2) setNum(0);
        else setNum(num + 1);
    }


    return(
        <>
            <div onClick={handleClick} style={{backgroundImage: `url(${imageURL.at(num)})`}}
                 className="w-screen h-screen bg-cover bg-no-repeat

                 ">

            </div>

        </>
    )
}