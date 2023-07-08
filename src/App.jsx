import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoButton from "./components/LogoButton.jsx";
import CardsInformations from "./components/CardsInformations.jsx";
import Noticias from "./components/Noticias.jsx";
import Outro from "./components/Outro.jsx";
import Footer from "./components/Footer.jsx";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  return (
    <>
        <div className="mx-auto">

            <Parallax pages={5} style={{top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={2.5}>
                    <Navbar></Navbar>
                    <Hero></Hero>
                    <CardsInformations></CardsInformations>
                    <a href="/#"><LogoButton></LogoButton></a>
                    <Noticias></Noticias>
                    <Outro></Outro>
                    <Footer></Footer>
                </ParallaxLayer>
            </Parallax>
        </div>
    </>
  )
}

export default App
