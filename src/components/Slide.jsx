import {useState} from "react";

const ods15 = {
    title: 'VIDA SOBRE A TERRA',
    text: ' Juntos, podemos proteger a vida em nosso planeta.\n' +
        'A ODS 15 busca preservar os ecossistemas terrestres, combater a\n' +
        'desertificação e a degradação do solo, e promover a conservação da biodiversidade.\n' +
        'É hora de agir!',
    imageURL: [
        './src/assets/ods_imgs/ods_15/sky.png',
        './src/assets/ods_imgs/ods_15/lake.png',
        './src/assets/ods_imgs/ods_15/terrain.png'
    ]
}

const ods14 = {
    title: 'VIDA DEBAIXO DA ' + 'AGUA',
    text: 'Podemos proteger nossos oceanos e mares.\n' +
        'A ODS 14 busca conservar e utilizar de forma sustentável\n' +
        'os recursos marinhos, promovendo a vida na água.\n' +
        'É hora de agir!',
    imageURL: [
        './src/assets/ods_imgs/ods_14/coral.png',
        './src/assets/ods_imgs/ods_14/ocean.png',
        './src/assets/ods_imgs/ods_14/fishes.png'
    ]
}

const ods13 = {
    title: 'COMBATE\n' + 'AS ALTERAÇÕES CLIMATICAS',
    text: 'Juntos, podemos enfrentar o desafio climático.\n' +
            'A ODS 13 busca combater as mudanças climáticas e seus impactos,\n' +
            'promovendo medidas urgentes para preservar nosso planeta.\n' +
            'É hora de agir!',
    imageURL: [
        './src/assets/ods_imgs/ods_13/ice.png',
        './src/assets/ods_imgs/ods_13/mountain.png',
        './src/assets/ods_imgs/ods_13/animals.png'
    ]
}

export default function Slide(){

    /*TODO: criar as transições e implementar {...}
     */

    const [num, setNum] = useState(0);

    const imageList = [
        ods13, ods14, ods15
    ]

    const iconURL = [
        './src/assets/icons/right.svg',
        './src/assets/icons/left.svg'
    ]

    function upClick(){
        if(num > imageList.length -2) setNum(0);
        else setNum(num + 1);
    }

    function downClick(){
        if(num === 0) setNum(imageList.length - 1);
        else setNum(num - 1);
    }


    return(
        <>
            <div className={`absolute w-full top-1/2 px-10 z-50
                            flex justify-between justify-items-center`}>
                <div onClick={downClick} style={{backgroundImage: `url(${iconURL.at(1)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center left-0`}></div>
                <div onClick={upClick} style={{backgroundImage: `url(${iconURL.at(0)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center right-0`}></div>
            </div>
            <div>
                <h1>{imageList.at(num)
                    .title}</h1>
            </div>
            <div>
                <div style={{backgroundImage: `url(${imageList.at(num)
                        .imageURL.at(0)})`}}
                     className=" absolute w-screen h-screen bg-cover bg-no-repeat">
                </div>
                <div style={{backgroundImage: `url(${imageList.at(num)
                        .imageURL.at(1)})`}}
                     className="absolute w-screen h-screen bg-cover bg-no-repeat">
                </div>
                <div style={{backgroundImage: `url(${imageList.at(num)
                        .imageURL.at(2)})`}}
                     className="absolute w-screen h-screen bg-cover bg-no-repeat">
                </div>
            </div>

        </>
    )
}