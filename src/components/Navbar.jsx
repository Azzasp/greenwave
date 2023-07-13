import AcompanharButton from "./acompanharButton.jsx";

function Navbar(){
    return(
        <>
            <div className={`absolute w-full h-20 flex justify-between p-5 z-[11] mt-10`}>
                <h1 className="text-2xl font-semibold text-white">GreenWave</h1>
                <a href="#outro"><AcompanharButton title="Cadastrar"></AcompanharButton></a>
            </div>


        </>
    )
}

export default Navbar;