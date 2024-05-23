"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const images = [
    "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?t=st=1716357216~exp=1716360816~hmac=1828067c105a383b9c62ecb66966285b778e6fa7f2e4827f9d60cc9bfb1263a3&w=1380",
    "https://img.freepik.com/free-photo/white-vegetable-healthy-fresh-natural_1203-5946.jpg?t=st=1716358603~exp=1716362203~hmac=53725705d16d5ef284c94db44b9a16de16a7b02eab0d1b1e0225babe8a665f7d&w=1380",
    "https://img.freepik.com/free-vector/vegetables-realistic-composition-white-background-with-tomato-onion-sweet-hot-pepper-eggplant_1284-16242.jpg?t=st=1716358661~exp=1716362261~hmac=62af123e76aee189cb9e203dd01c3a58bb3b3ef4a12a6995e9b8e022602b2b6b&w=740",
    "https://img.freepik.com/free-photo/flat-lay-bunch-fresh-provisions-donation_23-2148733838.jpg?w=996&t=st=1716358780~exp=1716359380~hmac=67eb0e20319a58b117adb5d9a3dfccd652aec9e93964ae0cf652d9e80852a975",

    "https://img.freepik.com/free-photo/flat-lay-assortment-different-fresh-vegetables-with-copy-space_23-2148655294.jpg?w=740&t=st=1716358866~exp=1716359466~hmac=74007955a0fa098398ab49026f1669a3cec6e4de26c01bb27a5df2f50ddf5551",

    "https://img.freepik.com/free-psd/fruits-composition-isolated_23-2151360726.jpg?w=900&t=st=1716358911~exp=1716359511~hmac=ce71d7b361d49ec031b2e73e66e5dc38963c01c5d311aa064fc42db9e037fd6a",

  ];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    
    
    return (
        <div className="relative">
            <div className="overflow-hidden w-full relative">
                <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                    width: `${images.length * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                }}
                >
                {images.map((imageUrl, index) => (
                    <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ flex: `0 0 ${100 / images.length}%` }}
                    >
                    <Image
                        src={imageUrl}
                        alt={`Slide ${index}`}
                        layout="responsive"
                        width={400}
                        height={200}
                    />
                    </div>
                ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 size-12 rounded-full flex items-center justify-center"
            >
                <span className='text-white text-3xl'>
                    <MdKeyboardArrowLeft />
                </span>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 size-12 rounded-full flex items-center justify-center"
            >
                <span className='text-white text-3xl'>
                    <MdKeyboardArrowRight />
                </span>
            </button>
        </div>
    );
};

export default Carousel;