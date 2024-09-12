import FloatingActionBar from "./FloatingActionBar"
import menu1Cellphone1 from '../assets/images/menu1-cellPhone.png'
import menu1Cellphone2 from '../assets/images/menu2-cellPhone.png'
import "../styles/animationLoop.css"

const SectionMenu = () => {
    return (
        <div id="section-menu" className="h-screen md:h-screen flex flex-col relative">
            <div className="flex flex-col-reverse md:flex-row h-full [&>div]:md:w-1/2 md:pt-24 md:gap-12">
                <div className="h-[50%] md:h-full relative w-max mx-auto ">
                    <img className="max-w-64 max-h-full pt-16 object-contain absolute top-0 left-0 md:hidden xl:inline  animationtoTop" src={menu1Cellphone2} alt="Menu Cellphone" />
                    <img className="my-auto lg:max-w-lg max-h-full md:absolute top-0 lg:right-0 animationtoRight" src={menu1Cellphone1} alt="Menu Cellphone" />
                </div>
                <div className="flex flex-col gap-5 pt-7 [&_p]:text-pretty [&_p]:leading-5 md:[&_p]:leading-8 [&_p]:tracking-custom-3p [&_p]:text-xs [&_p]:sm:text-base [&_p]:lg:text-lg [&_p]:xl:text-xl">
                    <h2 className="font-extrabold tracking-custom-3p text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl leading-[3.125rem] lg:leading-[4.25rem]">TU MENÚ SIEMPRE <br /><span className="text-highlight">A LA MANO</span></h2>
                    <p className="leading-8 tracking-custom-3p">
                        Explora platos recomendados, revisa las calificaciones de otros usuarios y utiliza nuestra función interactiva de Ayuda del Chef para recibir sugerencias personalizadas.
                        Elige tus platillos favoritos, califícalos y gana descuentos exclusivos por tus opiniones.
                        ¡Ordenar nunca fue tan fácil ni tan inteligente
                    </p>
                </div>
            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionMenu