import ContainerIcons from "./ContainerIcons"
import ButtonsScroll from "./ButtonsScroll"
import ButtonPrimary from "./ButtonPrimary"

const FloatingActionBar = () => {
    return (
        <div className="hidden w-full md:flex justify-between md:absolute bottom-8">
            <ContainerIcons />
            <ButtonsScroll />
            <ButtonPrimary children={"Miralo en vivo"} widthClass={"w-[7.5rem] sm:w-[9.7rem] md:w-48"} />
        </div>
    )
}

export default FloatingActionBar