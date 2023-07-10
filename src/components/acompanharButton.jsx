

function AcompanharButton({title}){

    return(
        <>
            <button
                className="h-8 w-36 outline outline-2 outline-green-500 rounded
                                font-semibold text-white
                                hover:bg-green-500 hover:text-white transition-colors">
                {title}
            </button>
        </>
    )
}


export default AcompanharButton;