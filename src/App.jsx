import NavBar from "./components/NavBar";
import Section3d from "./components/Section3d";
import SectionHero from "./components/sectionHero";

function App() {
  return (
    <div className="h-max bg-baseBg ">
      <NavBar />
      <div className=" pl-[115px]">
        <SectionHero />
        <Section3d />
      </div>
    </div>
  );
}

export default App;
