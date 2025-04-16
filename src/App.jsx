import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"

const App = () => {


  return (
    <>
      <main className="bg-black text-white">
        <Navbar />
        <Hero />
        <Highlights />
        <Model/>
        {/* <Features />
        <HowItWorks />
        <Footer /> */}

      </main>
    </>
  )
}

export default App
