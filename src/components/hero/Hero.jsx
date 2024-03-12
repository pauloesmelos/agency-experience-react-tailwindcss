import React from 'react';
import { data } from "../../data/data.js";

const Hero = () => {
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    setImage(data.hero);
  }, [data]);

  if(!data) return null;
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full">
        {/* image */}
        <div className="w-full h-full">
            <img
                alt={"Hero"}
                title={"Hero"}
                src={image?.url}
                className="w-full h-full object-cover"
            />
        </div>
        {/* overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black/60" />
        {/* content */}
        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
            <div className="text-white p-3 w-full max-w-[1000px] mx-auto">
                <p>
                    All Inclusive
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold drop-shadow-xl py-3">
                    Private Beaches & Geataways
                </h2>
                <p className="drop-shadow-2xl">
                    Our agency where your look, with more 100 employers.
                </p>
                <button className="px-8 py-2 bg-blue-600 text-white rounded-md hover:shadow-xl hover:bg-blue-700 duration-300
                font-bold mt-3">
                    Reserve Now
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;