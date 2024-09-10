import NavBar from "./components/NavBar"
import SectionHero from "./components/sectionHero"

function App() {
  return (
    <div className="h-max bg-baseBg ">
      <NavBar />
      <div className=" pl-[115px]">
        <SectionHero />
      </div>
    </div>
  )
}

export default App
