import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CardsInformations from "./components/CardsInformations.jsx";
import Noticias from "./components/Noticias.jsx";
import Outro from "./components/Outro.jsx";
import Footer from "./components/Footer.jsx";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-scroll'

function App() {

  return (
    <>
        <div>
            <Parallax pages={3.45} style={{top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <a href="#outro"><Navbar></Navbar></a>
                    <Hero></Hero>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.1}>
                    <Noticias></Noticias>
                </ParallaxLayer>

                <ParallaxLayer offset={0.9999} speed={0.75}>
                    <CardsInformations></CardsInformations>
                </ParallaxLayer>

                <ParallaxLayer offset={2.2} speed={0.50}>
                    <div id="outro"><Outro></Outro></div>
                   <Footer></Footer>
                </ParallaxLayer>
            </Parallax>

        </div>
    </>
  )
}

export default App
