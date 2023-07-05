import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoButton from "./components/LogoButton.jsx";
import CardsInformations from "./components/CardsInformations.jsx";
import Noticias from "./components/Noticias.jsx";

function App() {

  return (
    <>
        <Navbar></Navbar>
        <div className="mx-auto">
            <Hero></Hero>
            <LogoButton></LogoButton>
            <CardsInformations></CardsInformations>
            <Noticias></Noticias>
        </div>
        Noticias
        Outro
        Footer
    </>
  )
}

export default App
