
import woman from "../assets/images/woman-heroSeccion.png"

import ContainerIcons from "./ContainerIcons"
import ButtonsScroll from "./ButtonsScroll"
const SectionHero = () => {
    return (
        <div className="sm:h-screen overflow-hidden flex flex-col relative">
            <div className="h-full flex justify-between mt-[19px] [&_section]:flex [&_section]:flex-col [&_section]:gap-[18px] relative ">
                <div className="flex flex-col gap-[60px] mt-[86px] [&_p]:text-[20px] [&_p]:leading-8 [&_p]:tracking-custom-3p [&_h2]:leading-[50px] [&_h2]:tracking-custom-3p">
                    <section className="w-[572px]">
                        <h2 className="text-6xl font-extrabold">¡ESTO ES <span className="text-highlight">FOOD!</span></h2>
                        <p className="text-balance">En Food, fusionamos lo mejor de la tecnología y la gastronomía para ofrecerte una experiencia culinaria única. </p>
                    </section>
                    <section className="w-[515px]">
                        <h2 className="text-[35px] font-extrabold">MISIÓN</h2>
                        <p className="text-balance">Transformar la manera en que las personas exploran y crean gastronomía, utilizando la Tecnología para ofrecer una experiencia inmersiva e interactiva.</p>
                    </section>
                    <div className="absolute bottom-[50px]">
                        <ContainerIcons />
                    </div>
                </div>
                <div className="mr-[29px] flex justify-center ">
                    <img className="drop-shadow-shadowCustom1 object-top" src={woman} alt="Woman Smiling" />
                </div>
            </div>
            <div className="absolute bottom-[40px]  right-1/2">
                <ButtonsScroll />
            </div>
        </div>
    )
}

export default SectionHero