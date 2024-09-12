import arrowToBottom from "../assets/svg/arrow-to-bottom.svg"
import arrowToTop from "../assets/svg/arrow-to-top.svg"
import lineStroke from "../assets/svg/line-stroke.svg"

const ButtonsScroll = () => {
    
    return (
        <div className=' flex items-center gap-4'>
            <button>
                <img className="w-5 sm:w-6 md:size-full" src={arrowToBottom} alt="Flecha Hacia Abajo" />
            </button>
            <img className="h-6 sm:h-8" src={lineStroke} alt="Linea Divisora" />
            <button>
                <img className="w-5 sm:w-6 md:size-full" src={arrowToTop} alt="Flecha Hacia Arriba" />
            </button>
        </div>
    )
}

export default ButtonsScroll