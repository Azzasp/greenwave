import {useState} from "react";

export default function Slide(){

    /*TODO: criar as transições e implementar {...}
     */
    const [num, setNum] = useState(0);

    const imageURL = [
        './src/assets/ods13.png',
        './src/assets/ods14.png',
        './src/assets/ods15.png'
    ]

    const iconURL = [
        './src/assets/icons/right.svg',
        './src/assets/icons/left.svg'
    ]

    function upClick(){
        if(num > imageURL.length -2) setNum(0);
        else setNum(num + 1);
    }

    function downClick(){
        if(num === 0) setNum(imageURL.length - 1);
        else setNum(num - 1);
    }


    return(
        <>
            <div
                 className={`absolute w-full top-1/2 px-10
                            flex justify-between justify-items-center`}>
                <div onClick={downClick} style={{backgroundImage: `url(${iconURL.at(1)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center left-0`}></div>
                <div onClick={upClick} style={{backgroundImage: `url(${iconURL.at(0)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center right-0`}></div>
            </div>
            <div style={{backgroundImage: `url(${imageURL.at(num)})`}}
                 className="w-screen h-screen bg-cover bg-no-repeat">
            </div>

        </>
    )
}