import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoButton from "./components/LogoButton.jsx";
import Cards from "./components/Cards.jsx";

function App() {

  return (
    <>
        <Navbar></Navbar>
        <div className="mx-auto">
            <Hero></Hero>
            <LogoButton></LogoButton>
        </div>
        <Cards></Cards>
        Noticias
        Outro
        Footer
    </>
  )
}

export default App
