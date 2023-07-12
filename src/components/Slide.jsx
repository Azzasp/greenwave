import {useState} from "react";
import {useTransition, animated} from "@react-spring/web";

const ods15 = {
    title: 'VIDA SOBRE \n' + 'A TERRA',
    text: ' Juntos, podemos proteger a vida em nosso planeta.\n' +
        'A ODS 15 busca preservar os ecossistemas terrestres, combater a\n' +
        'desertificação e a degradação do solo, e promover a conservação da biodiversidade.\n' +
        'É hora de agir!',
    imageURL: '/assets/src/assets/ods_imgs/ods_15/ods15.png'
}
const ods14 = {
    title: 'VIDA DEBAIXO \n' + 'DA AGUA',
    text: 'Podemos proteger nossos oceanos e mares.\n' +
        'A ODS 14 busca conservar e utilizar de forma sustentável\n' +
        'os recursos marinhos, promovendo a vida na água.\n' +
        'É hora de agir!',
    imageURL: '/assets/src/assets/ods_imgs/ods_14/ods14.png'
}
const ods13 = {
    title: 'COMBATE AS' + '\n ALTERAÇÕES CLIMATICAS',
    text: 'Juntos, podemos enfrentar o desafio climático.\n' +
            'A ODS 13 busca combater as mudanças climáticas e seus impactos,\n' +
            'promovendo medidas urgentes para preservar nosso planeta.\n' +
            'É hora de agir!',
    imageURL: '/assets/src/assets/ods_imgs/ods_13/ods13.png'
}

export default function Slide(){

    const [num, setNum] = useState(0);
    const [index, setIndex] = useState(num)

    const imageList = [
        ods13, ods14, ods15
    ]
    const iconURL = [
        '/assets/src/assets/icons/right.svg',
        '/assets/src/assets/icons/left.svg'
    ]
    function upClick(){
        if(num > imageList.length -2) setNum(0);
        else setNum(num + 1);
        setIndex(num)
    }
    function downClick(){
        if(num === 0) setNum(imageList.length - 1);
        else setNum(num - 1);
        setIndex(num);
    }

    const slideTransition = useTransition(imageList[num], {
        from: {opacity: 1,transform: `translate(${num > index ? num > imageList.length -2 ? '-100%' : '100%'  : num === 0 ? '100%' : '-100%'}, 0)`},
        enter: {opacity: 1, transform: 'translate(0, 0)'},
        leave: {opacity: 1, transform: 'translate(-100%, 0)'},
        config: {duration: 550},
    })

    return(
        <>
            <div className={`absolute w-full top-1/2 px-10 z-50
                            flex justify-between justify-items-center
                            `}>
                <div onClick={downClick} style={{backgroundImage: `url(${iconURL.at(1)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center left-0`}></div>
                <div onClick={upClick} style={{backgroundImage: `url(${iconURL.at(0)})`}}
                        className={`w-[25px] h-[25px] bg-cover bg-no-repeat bg-center right-0`}></div>
            </div>
            <div className={`flex justify-center items-center`}>
                <h1 className={`text-white text-7xl font-bold text-center
                                absolute z-50
                                sm:text-4xl sm:mt-[80rem]
                                xl:mt-[40rem]
                                2xl:mt-[80rem]`}>
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
                                absolute z-40 left-10
                                sm:top-[50rem]
                                xl:top-[28rem]
                                2xl:top-[50rem]`}>
                    {imageList.at(num).text.split('\n').map((substring, index) => (
                        <span key={index}>
                            {substring}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
            <div className={`flex justify-center absolute  left-[37rem]
                            sm:left-[16rem] sm:top-[60rem]
                            md:left-[19rem]
                            lg:left-[27rem]
                            xl:top-[35rem] xl:left-[37rem]
                            2xl:top-[60rem] 2xl:left-[42.5rem]`}>
                <a href="#cards" className={`z-30`}>
                    <button onClick="#cards" className="h-8 w-36 outline outline-2 outline-white rounded-2xl
                                font-semibold text-white
                                hover:bg-white hover:text-black transition-colors">
                        EXPLORAR
                    </button>
                </a>

            </div>
            <div>
                <div className={`h-screen w-screen bg-black absolute z-10 opacity-40`}></div>
                {slideTransition((style, item) => (
                    <animated.div
                        style={{
                            ...style,
                            backgroundImage: `url(${item.imageURL})`,
                        }}
                        className={`absolute w-screen h-screen bg-cover bg-no-repeat bg-center`}
                    />

                ))}
            </div>

        </>
    )
}