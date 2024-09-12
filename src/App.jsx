import NavBar from "./components/NavBar";
import Section3d from "./components/Section3d";
import SectionChatbot from "./components/SectionChatbot"
import SectionHero from "./components/SectionHero";
import SectionMenu from "./components/SectionMenu"
import SectionReviews from "./components/SectionReviews"
import "./styles/parallax.css"
function App() {
  return (
    <div className="h-max bg-baseBg pb-20">
      <NavBar />
      <div className="px-4 sm:px-[60px] md:px-20 lg:px-28">
        <SectionHero className="parallax-section" />
        <SectionReviews className="parallax-section" />
        <SectionChatbot className="parallax-section" />
        <SectionMenu className="parallax-section" />
        <Section3d />
      </div>
    </div>
  );
}

export default App;
