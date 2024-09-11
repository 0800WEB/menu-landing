import FloatingActionBar from './FloatingActionBar'
import chefBot from '../assets/images/chefBot.png'

const SectionChatbot = () => {
    return (
        <div className='h-max md:h-screen flex flex-col relative border border-pink-400'>
            <div className='pt-12 flex'>
                <div className='flex flex-col gap-5 pt-[4.5rem]'>
                    <h4 className='max-w-3xl text-6xl text-balance font-bold leading-[4.4rem] tracking-custom-3p '>¡PIDE INTELIGENTE! <br /><span className='text-highlight'>USA NUESTRO CHEFBOT</span></h4>
                    <p className='max-w-xl text-xl leading-8 tracking-custom-3p text-pretty'>
                        Buscas tu próximo platillo favorito? ¡Déjalo en manos de nuestra IA avanzada! Con nuestro chefbot inteligente, descubre recomendaciones personalizadas según tus gustos y valoraciones anteriores.
                        ¿No sabes qué elegir? Permítenos guiarte hacia las mejores opciones.
                        ¡Haz tu pedido con un solo clic y disfruta de una experiencia única!
                    </p>
                </div>
                <div>
                    <img className='size-11/12' src={chefBot} alt="Chef Bot" />
                </div>
            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionChatbot