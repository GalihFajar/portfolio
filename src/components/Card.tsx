import React from "react";

interface CardProps {
  title: string;
  text: string;
  image: any;
  projectLink: string;
}
const Card: React.FC<CardProps> = ({ text, image, title, projectLink }) => {
  return (
    <>
      <div className="relative rounded-lg shadow-md bg-white my-12 mx-8 lg:w-1/3 h-full flex-1 min-h-full">
        <img
          src={image}
          alt={title}
          className="overflow-hidden w-full h-1/3 object-cover object-top"
        />
        {/* <Image src={image} alt={title} height={720} className="overflow-hidden" /> */}
        <div className="p-4 h-full relative">
          <h3 className="text-lg text-secondary text-center">{title}</h3>
          <p className="text-justify mt-3 font-body break-words text-sm">
            {text}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 mb-4 ml-4">
          <button className="py-2 px-3 mt-4 bg-secondary text-textColor font-body rounded-full hover:bg-pink-700 font-light">
            <a href={projectLink} target="_blank">
              Source
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
