import closeIcon from "../assets/svg/close-icon.svg"

const VideoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleClick = (event) => {
        // Verifica si el clic ocurrió en el fondo del modal
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
            onClick={handleClick}
        >
            <div className="relative bg-white py-4 p-4 rounded-lg shadow-lg w-[320px] h-[580px] md:w-[360px] md:h-[640px]">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-1 text-gray-700 hover:text-gray-900"
                >

                </button>
                <div className="relative w-full h-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/UlaHdixlwBY?autoplay=1&loop=1&playlist=UlaHdixlwBY&quality=hd1080"
                        title="Video en modal"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoModal;
