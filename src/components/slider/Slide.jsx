import React from 'react';
import { data } from '../../data/data';
import Component from './component/Component';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

const Slide = () => {
  const [slides, setSlides] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    setSlides(data.slides);
  }, []);
  const goToIndex = (index) => {
    setIndex(index);
  }
  const nextIndex = () => {
    const next = (index + 1 < slides.length ? index + 1 : index );
    setIndex(next);
  }
  const prevIndex = () => {
    const prev = (index - 1 >= 0 ? index - 1 : index);
    setIndex(prev);
  }

  if(!data) return null;
  return (
    <div className="w-full pt-[20rem] sm:pt-[10rem]">
        <div className="w-full max-w-[1100px] px-6 mx-auto relative group">
            {/* slide container */}
            <Component 
                data={slides} 
                index={index}
            />
            {/* controls */}
            <div>
                <MdOutlineArrowBackIos 
                    className="absolute top-[40%] left-10 bg-black/20 p-2 rounded-full text-white
                    cursor-pointer group-hover:bg-black/60" 
                    size={50}
                    onClick={prevIndex}
                />
                <MdOutlineArrowForwardIos 
                    className="absolute top-[40%] right-10 bg-black/20 p-2 rounded-full text-white
                    cursor-pointer group-hover:bg-black/60" 
                    size={50} 
                    onClick={nextIndex}
                />
            </div>
            {/* dots fill */}
            <div className="flex justify-center gap-6 pt-8">
                {slides.map((slide, i) => (
                    <div key={i * Math.ceil(Math.random())}>
                        {i === index ? (
                            <FaCircle 
                                key={index * Math.random()} 
                                size={20}
                                className="cursor-pointer text-blue-500 hover:text-slate-500 duration-200"
                                onClick={() => goToIndex(i)}
                            />
                        ) : (
                            <FaCircle 
                                key={index * Math.random()} 
                                size={20}
                                className="cursor-pointer text-slate-500 hover:text-blue-500 duration-200"
                                onClick={() => goToIndex(i)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Slide;