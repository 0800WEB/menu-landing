import woman from "../assets/images/woman-heroSeccion.png"
import FloatingActionBar from "./FloatingActionBar"

const SectionHero = () => {
    return (
        <div id="section-hero" className="h-max md:h-screen flex flex-col relative gap-10 md:gap-0 [&_p]:text-pretty [&_p]:leading-[19px] md:[&_p]:leading-8 [&_p]:tracking-custom-3p [&_p]:text-xs [&_p]:sm:text-base [&_p]:md:text-lg [&_p]:lg:text-lg [&_p]:xl:text-xl md:[&_h2]:leading-[50px] [&_h2]:tracking-custom-3p">
            <div className="h-full flex flex-col  gap-10 md:gap-0 md:flex-row items-center md:items-start md:justify-between pt-6 [&_section]:flex [&_section]:flex-col [&_section]:gap-4 relative">
                <div className="flex flex-col gap-8 md:gap-[60px] md:pt-[86px] [&_h2]:font-extrabold">
                    <section className="max-w-xl">
                        <h2 className="text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl leading-[3.125rem] lg:leading-[4.25rem]">¡ESTO ES <span className="text-highlight">FOOD!</span></h2>
                        <p >En Food, fusionamos lo mejor de la tecnología y la gastronomía para ofrecerte una experiencia culinaria única. </p>
                    </section>
                    <section className="max-w-lg">
                        <h2 className="text-xl sm:text-3xl md:text-4xl leading-9">MISIÓN</h2>
                        <p >Transformar la manera en que las personas exploran y crean gastronomía, utilizando la Tecnología para ofrecer una experiencia inmersiva e interactiva.</p>
                    </section>
                </div>
                <div className="flex justify-center md:justify-end max-w-60 md:max-w-full h-full">
                    <img className=" drop-shadow-shadowCustom1 object-contain w-[85%]" src={woman} alt="Woman Smiling" />
                </div>
            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionHero