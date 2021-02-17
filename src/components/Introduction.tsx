import React, { useEffect, useState } from "react";
import Image from "next/image";
export const Introduction = ({}) => {
  const [enterAnimation, setEnterAnimation] = useState(
    "transition-opacity ease-out duration-1000 opacity-0"
  );
  useEffect(() => {
    setEnterAnimation("transition-opacity ease-out duration-1000 opacity-100");
  }, []);

  return (
    <>
      <div className="w-screen bg-primary h-screen relative overflow-x-hidden">
        {/* Introduction  */}
        <div className="container mx-auto ">
          <div className="flex justify-center md:mt-28">
            <Image
              src="/avatar2.JPG"
              alt="avatar"
              width={200}
              height={200}
              className={`object-top rounded-full mt-5 max-w-full h-auto object-cover ${enterAnimation} delay-500`}
            />
          </div>
          <div className={`mt-16 delay-1000 ${enterAnimation}`}>
            <p className="font-heading text-5xl text-secondary text-center">
              Galih Fajar Fitra Ady
            </p>
          </div>
          <div className={`mt-6 w-2/3 mx-auto ${enterAnimation} delay-1500`}>
            <p className={`text-4xl text-textColor font-light text-center`}>
              I'm a Telecommunication Engineer student, and a Web Developer.
            </p>
          </div>
          <div
            className={`flex flex-wrap justify-start content-end ${enterAnimation} animate-bounce delay-3000`}
          >
            <Image src="/down-arrow.svg" width={50} height={50} />
          </div>
        </div>
      </div>
    </>
  );
};
