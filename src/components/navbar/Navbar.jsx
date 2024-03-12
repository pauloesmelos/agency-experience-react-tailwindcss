import React from 'react';
import { IoMdMenu } from "react-icons/io";
import Mobile from './mobile/Mobile';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const handleMobile = () => {
    setMobile(e => !e);
  };
  return (
    <header className="w-full absolute top-0 left-0 z-30">
      <nav className="w-full">
        <div className="w-full p-3 flex justify-between items-center">
            <div className="z-40">
                <h1 className="cursor-pointer">Experiences.</h1>
            </div>
            <div className="z-40">
                <IoMdMenu
                    className="text-white cursor-pointer hover:text-blue-700 hover:shadow-lg duration-200"
                    size={34}
                    onClick={handleMobile}
                />
            </div>
        </div>
      </nav>
      <Mobile 
        mobile={mobile}
        handleMobile={handleMobile} 
       />
    </header>
  )
}

export default Navbar;