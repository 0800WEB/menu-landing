import { useState, useEffect } from 'react';

const VideoModal = ({ isOpen, onClose }) => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/UlaHdixlwBY?autoplay=1&loop=1&playlist=UlaHdixlwBY&quality=hd1080");
    const [activeThumbnail, setActiveThumbnail] = useState("UlaHdixlwBY");
    const [scaleClass, setScaleClass] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeThumbnail === "UlaHdixlwBY") {
                setScaleClass("scale-110");
            } else {
                setScaleClass("scale-110");
            }
            setTimeout(() => setScaleClass(""), 1000);
        }, 8000); 

        return () => clearInterval(interval);
    }, [activeThumbnail]);

    if (!isOpen) return null;

    const selectVideo = (videoUrl, thumbnailId) => {
        setCurrentVideo(videoUrl);
        setActiveThumbnail(thumbnailId);
    };

    const handleClick = (event) => {
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
                <div className="relative w-full h-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src={currentVideo}
                        title="Video en modal"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="absolute bottom-8 sm:bottom-2 flex gap-4">
                <button
                    onClick={() => selectVideo("https://www.youtube.com/embed/UlaHdixlwBY?autoplay=1&loop=1&playlist=UlaHdixlwBY&quality=hd1080", "UlaHdixlwBY")}
                    className={`w-16 h-16 bg-gray-300 rounded-lg overflow-hidden transition-transform transform ${activeThumbnail === "UlaHdixlwBY" ? "" : scaleClass} hover:scale-110`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://img.youtube.com/vi/UlaHdixlwBY/0.jpg"
                        alt="Thumbnail 1"
                    />
                </button>
                <button
                    onClick={() => selectVideo("https://www.youtube.com/embed/xLZ5c0273yI?autoplay=1&loop=1&playlist=xLZ5c0273yI&quality=hd1080", "xLZ5c0273yI")}
                    className={`w-16 h-16 bg-gray-300 rounded-lg overflow-hidden transition-transform transform ${activeThumbnail === "xLZ5c0273yI" ? "" : scaleClass} hover:scale-110`}
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://img.youtube.com/vi/xLZ5c0273yI/0.jpg"
                        alt="Thumbnail 2"
                    />
                </button>
            </div>
        </div>
    );
};

export default VideoModal;
