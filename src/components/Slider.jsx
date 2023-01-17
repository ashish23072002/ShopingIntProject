import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import data from './data.json';

const Slider = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    React.useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((currentIndex + 1) % 3);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };


    return (

        <div >
            <div className=' max-w-[1400px] h-[780px] w-full m-auto py-16 px-4   group' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div
                    style={{ backgroundImage: `url(${data[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                >

                    <div className="top-0 left-0 h-full w-full my-auto flex flex-col p-6 md:p-24 font-[Poppins] " >
                        <h1 className="text-white text-4xl md:text-6xl font-bold">{data[currentIndex].title}</h1>
                        <p className="text-white text-lg md:text-2xl w-2/5 md:w-auto my-6">{data[currentIndex].description}</p>
                        <button className="bg-white hover:bg-teal-500 duration-300 hover:shadow-2xl text-black font-medium rounded-md py-4 px-3 max-w-fit md:w-auto">
                            <NavLink to="/product"> Shop Now </NavLink>
                        </button>
                    </div>

                </div>

                {/* Left Arrow */}
                <div className=' group-hover:block fixed top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className=' group-hover:block fixed top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {data.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Slider
