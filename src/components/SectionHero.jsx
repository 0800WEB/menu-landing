import woman from "../assets/images/woman-heroSeccion.png"
import FloatingActionBar from "./FloatingActionBar"

const SectionHero = () => {
    return (
        <div id="section-hero" className="h-max md:h-screen flex flex-col relative gap-10 md:gap-0 [&_p]:text-pretty [&_p]:leading-[19px] md:[&_p]:leading-8 [&_p]:tracking-custom-3p [&_p]:text-xs [&_p]:sm:text-base [&_p]:md:text-lg [&_p]:lg:text-lg [&_p]:xl:text-xl lg:[&_h2]:leading-[3rem] [&_h2]:tracking-custom-3p">
            <div className="h-full flex flex-col gap-10 md:gap-0 md:flex-row items-center md:items-start md:justify-between pt-6 [&_section]:flex [&_section]:flex-col [&_section]:gap-4 relative">
                <div className="flex flex-col gap-8 sm:gap-4 md:gap-8 lg:gap-14 pt-6 md:pt-20 sm:pt-14 lg:pt-[5.2rem] [&_h2]:font-extrabold">
                    <section className="max-w-xl">
                        <h2 className="text-nowrap text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl leading-[3.125rem] md:leading-10 lg:leading-[4.25rem]">¡ESTO ES <span className="text-highlight">FOOD!</span></h2>
                        <p >En Food, fusionamos lo mejor de la tecnología y la gastronomía para ofrecerte una experiencia culinaria única. </p>
                    </section>
                    <section className="max-w-lg">
                        <h2 className="text-xl sm:text-2xl lg:text-4xl xl:leading-9">Descubre tu plato ideal con nuestro menú online</h2>
                        <p >Revolucionamos la experiencia gastronómica. Nuestro menú online permite a los comensales conocer a fondo cada platillo,
                            optimizando la oferta del restaurante a través de valoraciones y encuestas para que cada comida sea una experiencia única y personalizada.
                        </p>
                    </section>
                </div>
                <div className="flex justify-center md:justify-end max-w-60 md:max-w-full h-full">
                    <img className="animation drop-shadow-shadowCustom1 object-contain w-[85%]" src={woman} alt="Woman Smiling" />
                </div>
            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionHero