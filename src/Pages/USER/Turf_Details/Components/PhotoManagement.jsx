import { useState } from "react";

const PhotoManagement = ({ photos }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage((currentImage - 1 + photos.length) % photos.length);
    };

    const handleNextClick = () => {
        setCurrentImage((currentImage + 1) % photos.length);
    };
    return (
        <div className="flex pt-10">
            <button className="m-3 xl:m-10 text-gray-500" onClick={handlePrevClick} >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </button>
            <img className="w-full max-h-[400px] lg:min-h-[400px] lg:min-w-[400px] shadow-2xl rounded-lg" src={photos[currentImage]?.location} alt={`Photo ${currentImage}`} />
            <button className="m-3 xl:m-10 text-gray-500" onClick={handleNextClick}  >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
    )
}

export default PhotoManagement