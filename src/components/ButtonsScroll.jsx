import arrowToBottom from "../assets/svg/arrow-to-bottom.svg"
import arrowToTop from "../assets/svg/arrow-to-top.svg"
import lineStroke from "../assets/svg/line-stroke.svg"

const ButtonsScroll = () => {
    return (
        <div className=' flex items-center gap-4'>
            <button>
                <img src={arrowToBottom} alt="Flecha Hacia Abajo" />
            </button>
            <img src={lineStroke} alt="Linea Divisora" />
            <button>
                <img src={arrowToTop} alt="Flecha Hacia Arriba" />
            </button>
        </div>
    )
}

export default ButtonsScroll