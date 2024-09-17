import NavBar from "./components/NavBar";
import Section3d from "./components/Section3d";
import SectionChatbot from "./components/SectionChatbot"
import SectionHero from "./components/SectionHero";
import SectionMenu from "./components/SectionMenu"
import SectionReviews from "./components/SectionReviews"
import FloatingActionBar from "./components/FloatingActionBar";
import "./styles/parallax.css"
function App() {
  return (
    <div className="h-max bg-baseBg relative">
      <NavBar />
      <div className="px-4 sm:px-[60px] md:px-20 lg:px-28 relative">
        <SectionHero />
        <Section3d />
        <SectionReviews />
        <SectionChatbot />
        <SectionMenu />
        <div className="w-full bottom-0 left-0 sticky z-40">
          <FloatingActionBar />
        </div>
      </div>
    </div>
  );
}

export default App;
