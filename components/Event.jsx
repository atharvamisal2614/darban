import Image from 'next/image';
import React from 'react'

const Event = ({image, name}) => {
  return (
    <>
    <div className="p-5">

       <div className=" relative flex ">
        <Image
          className="rounded-lg h-56 object-cover"
          width={800}
          height={800}
          src={image}
          alt=""
        />

        <div className="w-full hover:h-full h-20 p-5 rounded-lg text-center text-white bg-opacity-20 bg-black  hover:bg-opacity-80 transition-all hover:bg-primary absolute bottom-0">
          <h4 className="mb-8 leading-6">{name}</h4>
          
        </div>
      </div>
          </div>
    </>
  )
}

export default Event;