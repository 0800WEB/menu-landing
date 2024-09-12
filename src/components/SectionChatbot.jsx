import chefBot from '/images/chefBot.png'
import "../styles/animationLoop.css"
const SectionChatbot = () => {
    return (
        <div id="section-chatbot" className='h-screen md:h-screen flex flex-col relative px-4 md:px-0 '>
            <div className='h-full pt-12 flex flex-col md:flex-row  [&_p]:text-pretty [&_p]:leading-5 md:[&_p]:leading-8 [&_p]:tracking-custom-3p [&_p]:text-xs [&_p]:sm:text-base  [&_p]:lg:text-lg [&_p]:xl:text-xl'>
                <div className='h-[40%] md:h-full flex flex-col gap-5 pt-4 md:pt-[4.5rem] md:w-1/2'>
                    <h4 className='md:max-w-[46rem] font-extrabold tracking-custom-3p text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl leading-9 md:leading-[3.125rem] lg:leading-[4.25rem] xl:text-nowrap'>
                        ¡PIDE INTELIGENTE! <br /> <span className='text-highlight'>USA NUESTRO CHEFBOT</span>
                    </h4>
                    <p className='max-w-xl text-xl leading-8 tracking-custom-3p text-pretty'>
                        ¿No sabes qué elegir? Nuestro chatbot utiliza inteligencia artificial para guiarte en la selección de tu comida ideal.
                        Simplemente escríbelo, como “Hola, muéstrame alimentos sin cebolla,” y recibirás recomendaciones personalizadas basadas en tus preferencias y en las valoraciones de otros comensales.
                        ¡Decidir qué comer nunca fue tan fácil!
                    </p>
                </div>
                <div className='mx-auto md:w-1/2 h-96 md:h-full md:flex items-center xl:block  '>
                    <img className='h-full md:h-fit animation' src={chefBot} alt="Chef Bot" />
                </div>
            </div>
        </div>
    )
}

export default SectionChatbot