import React from 'react';
import AtomicSpinner from 'atomic-spinner';
import Image from 'next/image';

const LoadingAtom = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="flex justify-center items-cente md:size-150 md:atomSize-350 lg:size-200 lg:atomSize-500r">
        {/* <AtomicSpinner
          size={100}
          nucleus={true}
          electronPaths={true}
          pathCount={10}
          atomSize={250}
          electronPathCount={10}
          electronPathColor='#53f21b'
          nucleusParticleFillColor='#97ff39'
          nucleusParticleBorderColor='#35e500'
          nucleusDistanceFromCenter={6.8}
           // Responsive classes

        /> */
        
        <Image
            src="/darbanimages/beach.png"
            className="object-cover w-full h-full"
            width={400}
            height={400}
            alt="Image 4"
          />
        }
      </div>
      <h1 className="italic text-center text-sm md:text-base lg:text-3xl">Please Wait......</h1>
    </div>
  );
};

export default LoadingAtom;
