import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoButton from "./components/LogoButton.jsx";
import CardsInformations from "./components/CardsInformations.jsx";
import Noticias from "./components/Noticias.jsx";
import Outro from "./components/Outro.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Navbar></Navbar>
        <div className="mx-auto">
            <Hero></Hero>
            <a href="/#"><LogoButton></LogoButton></a>
            <CardsInformations></CardsInformations>
            <Noticias></Noticias>
            <Outro></Outro>
            <Footer></Footer>
        </div>
    </>
  )
}

export default App
