import {useState} from "react";
import {useTransition, animated} from "@react-spring/web";

const ods15 = {
    title: 'VIDA SOBRE \n' + 'A TERRA',
    text: ' Juntos, podemos proteger a vida em nosso planeta.\n' +
        'A ODS 15 busca preservar os ecossistemas terrestres, combater a\n' +
        'desertificação e a degradação do solo, e promover a conservação da biodiversidade.\n' +
        'É hora de agir!',
    imageURL: './src/assets/ods_imgs/ods_15/ods15.png'
}
const ods14 = {
    title: 'VIDA DEBAIXO \n' + 'DA AGUA',
    text: 'Podemos proteger nossos oceanos e mares.\n' +
        'A ODS 14 busca conservar e utilizar de forma sustentável\n' +
        'os recursos marinhos, promovendo a vida na água.\n' +
        'É hora de agir!',
    imageURL: './src/assets/ods_imgs/ods_14/ods14.png'
}
const ods13 = {
    title: 'COMBATE AS' + '\n ALTERAÇÕES CLIMATICAS',
    text: 'Juntos, podemos enfrentar o desafio climático.\n' +
            'A ODS 13 busca combater as mudanças climáticas e seus impactos,\n' +
            'promovendo medidas urgentes para preservar nosso planeta.\n' +
            'É hora de agir!',
    imageURL: './src/assets/ods_imgs/ods_13/ods13.png'
}

export default function Slide(){

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

    const slideTransition = useTransition(imageList[num], {
        from: {opacity: 0, transform: 'scale(1.1)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(0.85)'},
        config: {duration: 150},
    })

    return(
        <>
            <div className={`absolute w-full top-1/2 px-10 z-50
                            flex justify-between justify-items-center`}>
                <div onClick={downClick} style={{backgroundImage: `url(${iconURL.at(1)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center left-0`}></div>
                <div onClick={upClick} style={{backgroundImage: `url(${iconURL.at(0)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center right-0`}></div>
            </div>
            <div className={`flex justify-center items-center`}>
                <h1 className={`text-white text-5xl font-bold text-center
                                absolute z-50 mt-[40rem]
                                `}>
                    {imageList.at(num).title.split('\n').map((substring, index) => (
                        <span key={index}>
                            {substring}
                            <br/>
                        </span>
                    ))}
                </h1>
            </div>
            <div>
                <p className={`text-white text-left
                                absolute z-40 top-[28rem] left-10`}>
                    {imageList.at(num).text.split('\n').map((substring, index) => (
                        <span key={index}>
                            {substring}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
            <div>
                <div className={`h-screen w-screen bg-black absolute z-10 opacity-40`}></div>
                {slideTransition((style, item) => (
                    <animated.div
                        style={{
                            ...style,
                            backgroundImage: `url(${item.imageURL})`
                        }}
                        className="absolute w-screen h-screen bg-cover bg-no-repeat"
                    />
                ))}
            </div>

        </>
    )
}