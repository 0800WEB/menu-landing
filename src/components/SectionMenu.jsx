import FloatingActionBar from "./FloatingActionBar"
import menu1Cellphone1 from '../assets/images/menu1-cellPhone.png'
import menu1Cellphone2 from '../assets/images/menu2-cellPhone.png'
const SectionMenu = () => {
    return (
        <div className="h-max md:h-screen flex flex-col relative border border-green-600">
            <div className="flex h-full [&>div]:w-1/2 pt-24 gap-12">
                <div className="relative w-max">
                    <img className="max-w-64 max-h-full pt-16 object-contain absolute top-0 left-0" src={menu1Cellphone2} alt="Menu Cellphone" />
                    <img className="max-w-lg max-h-full absolute top-0 right-0" src={menu1Cellphone1} alt="Menu Cellphone" />
                </div>
                <div className="flex flex-col gap-5 pt-7">
                    <h2 className="text-6xl leading-[4.25rem] tracking-custom-3p font-bold">TU MENÚ SIEMPRE <br /><span className="text-highlight">A LA MANO</span></h2>
                    <p className="text-xl leading-8 tracking-custom-3p">
                        Explora platos recomendados, revisa las calificaciones de otros usuarios y utiliza nuestra función interactiva de Ayuda del Chef para recibir sugerencias personalizadas.
                        Elige tus platillos favoritos, califícalos y gana descuentos exclusivos por tus opiniones.
                        ¡Ordenar nunca fue tan fácil ni tan inteligente!"
                    </p>

                </div>

            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionMenu