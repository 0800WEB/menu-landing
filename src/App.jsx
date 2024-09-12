import NavBar from "./components/NavBar";
import Section3d from "./components/Section3d";
import SectionChatbot from "./components/SectionChatbot"
import SectionHero from "./components/SectionHero";
import SectionMenu from "./components/SectionMenu"
import SectionReviews from "./components/SectionReviews"
import "./styles/parallax.css"
function App() {
  return (
    <div className="h-max bg-baseBg ">
      <NavBar />
      <div className="px-4 sm:px-[60px] md:px-20 lg:px-28">
        <SectionHero className="parallax-section" />
        <Section3d />
        <SectionReviews className="parallax-section" />
        <SectionChatbot className="parallax-section" />
        <SectionMenu className="parallax-section" />
      </div>
    </div>
  );
}

export default App;
