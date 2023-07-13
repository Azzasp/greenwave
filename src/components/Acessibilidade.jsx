
// eslint-disable-next-line react/prop-types
export default function Acessibilidade( {onIncreaseFontSize, onDecreaseFontSize} ){



    return(
        <>
            <div className={`bg-slate-200`}>
                <div className={`w-screen h-8 flex justify-end px-10`}>
                    <h1 className={`mt-1 font-semibold text-base`}>Menu de Acessibilidade</h1>
                    <button onClick={onDecreaseFontSize} className={`font-bold text-2xl px-5`}>A-</button>
                    <button onClick={onIncreaseFontSize} className={`font-bold text-2xl`}>A+</button>
                </div>
            </div>
        </>
    )
}