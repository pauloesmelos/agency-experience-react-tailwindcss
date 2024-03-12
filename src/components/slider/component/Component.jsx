import React from 'react';

const Component = ({ data, index }) => {

  if(!data) return null;
  return (
    <div className="w-full h-[500px]">
        <div 
            style={{backgroundImage: `url('${data[index]?.url}')`}}
            className="bg-no-repeat bg-center bg-cover w-full h-full rounded-lg border-2 duration-300
            ease-in-out shadow-lg"
        />
    </div>
  )
}

export default Component;