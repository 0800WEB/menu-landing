import { useState } from "react"
import ContainerIcons from "./ContainerIcons"
import ButtonsScroll from "./ButtonsScroll"
import ButtonPrimary from "./ButtonPrimary"
import VideoModal from "./modalVideo"
const FloatingActionBar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full flex justify-end absolute bottom-6 md:bottom-8">
            <ButtonPrimary action={openModal} children={"Miralo en vivo"} widthClass={"w-[7.5rem] sm:w-[9.7rem] md:w-48"} />
            <VideoModal isOpen={isModalOpen} onClose={() => closeModal()} />
        </div>
    )
}

export default FloatingActionBar