import React from 'react';

const Mobile = ({ mobile }) => {
  const style = {
    open: "w-full h-screen fixed top-0 left-0 bg-black/90 ml-0 ease-in-out duration-200 z-10",
    close: "w-full h-screen fixed top-0 left-0 bg-black/90 ml-[-100%] ease-in-out duration-200 z-10"
  }
  return (
    <nav className={mobile ? style.open : style.close}>
      <div className="w-full h-full">
        <div className="w-full h-full">
            <ul className="w-full h-full text-white gap-2 flex flex-col justify-center items-center">
                <li>
                    <a className="font-bold text-2xl lg:text-4xl hover:text-blue-600" href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a className="font-bold text-2xl lg:text-4xl hover:text-blue-600" href="#">
                        My Reserves
                    </a>
                </li>
                <li>
                    <a className="font-bold text-2xl lg:text-4xl hover:text-blue-600" href="#">
                        Destinations
                    </a>
                </li>
                <li>
                    <a className="font-bold text-2xl lg:text-4xl hover:text-blue-600" href="#">
                        Rooms
                    </a>
                </li>
                <li>
                    <a className="font-bold text-2xl lg:text-4xl hover:text-blue-600" href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Mobile;