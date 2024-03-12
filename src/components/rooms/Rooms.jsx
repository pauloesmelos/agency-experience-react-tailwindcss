import React from 'react';
import { data } from "../../data/data.js";
const Rooms = () => {
  const style = {
    imgNormal: "object-cover w-full h-full",
    imgLarge: "object-cover w-full h-full row-span-2"
  }
  const [imgs, setImgs] = React.useState([]);
  React.useEffect(() => {
    setImgs(data.rooms);
  }, []);

  if(!data) return null;
  return (
    <section className="w-full max-w-[1050px] mx-auto px-6 h-[400px] bg-blue-200 mt-16">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          {/* content */}
          <div className="cols-span-1 flex flex-col gap-4">
            <h2 className="font-bold text-3xl mt-16">Fine Rooms</h2>
            <p>
              The best rooms for your night of sleep are here. Fine rooms with small prices.
            </p>
          </div>
          {/* images */}
          <div className="grid grid-cols-2 gap-3 grid-rows-2 col-span-2 h-[70vh] pt-12">
            {imgs.map((img, index) => (
              <img
                key={index * Math.ceil(Math.random())}
                alt={img.title}
                title={img.title}
                src={img.url}
                className={index === 1 ? style.imgLarge : style.imgNormal}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms;