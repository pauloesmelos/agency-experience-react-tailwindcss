import React from 'react';
import { data } from '../../data/data';
const Plans = () => {
  const style = {
    imageFull: "object-cover w-full h-full row-span-3",
    imageMin: "object-cover w-full h-full row-span-2"
  }
  const [plans, setPlans] = React.useState([]);
  React.useEffect(() => {
    setPlans(data.plans);
  }, []);

  if(!data) return null;
  return (
    <section className="w-full pt-16">
        <div className="w-full max-w-[1100px] mx-auto px-6">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-9">
                {/* images */}
                <div className="w-full grid grid-cols-2 grid-rows-6 gap-4 h-[80vh]">
                    {plans.map((plan, index) => (
                        <img
                            key={index * Math.random()}
                            src={plan.url}
                            alt={`${plan.title}${index}`}
                            title={`${plan.title}${index}`}
                            className={index === 0 || index === 3 ? style.imageFull : style.imageMin}
                        />
                    ))}
                </div>
                {/* content and texts */}
                <div className="w-full flex flex-col gap-5 justify-center">
                    <h3 className="font-bold text-3xl sm:text-4xl">Plan Your Next Trip</h3>
                    <p className="font-semibold text-lg sm:text-xl text-slate-500">
                        Build your next dream with our agency now!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, unde corporis quos in facilis asperiores eveniet, voluptatibus molestias blanditiis, sed tempore perspiciatis et aut quae tempora doloremque suscipit ab magnam.

                    </p>
                    <div className="flex gap-4">
                        <button className="border-2 py-2 px-8 text-black rounded-lg
                        hover:bg-blue-600 hover:text-white duration-200">
                            Learn More
                        </button>
                        <button className="border-2 py-2 px-8 text-white bg-black rounded-lg
                        hover:bg-black/40 duration-200">
                            Plan Your Trip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plans;