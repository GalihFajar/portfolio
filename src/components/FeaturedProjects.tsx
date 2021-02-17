import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
//@ts-ignore
import { useInViewport } from "react-in-viewport";
import projectCard from "../constants/projectCard";

interface FeaturedProjectsProps {
  additionalClass?: string;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  additionalClass,
  ...props
}) => {
  const featuredProjectsRef = useRef(null);

  // const props = {}
  const { inViewport } = useInViewport(
    featuredProjectsRef,
    { threshold: 0.5 },
    {},
    props
  );
  const [enterAnimation, setEnterAnimation] = useState(
    "transition-opacity ease-out duration-1000 opacity-0"
  );
  useEffect(() => {
    if (inViewport) {
      setEnterAnimation(
        "transition-opacity ease-out duration-1000 opacity-100"
      );
    }
  }, [inViewport]);
  return (
    <>
      <div className="w-screen bg-primary h-screen relative overflow-x-hidden overflow-y-hidden">
        {/* Featured Projects  */}
        <div
          className={`relative items-center justify-center ${additionalClass} ${enterAnimation} delay-500 h-5/6`}
          ref={featuredProjectsRef}
        >
          <h1
            className={`text-5xl font-heading text-secondary text-center ${enterAnimation} delay-1500`}
          >
            Featured Projects
          </h1>
          <div
            className={`flex flex-wrap content-center container mx-auto my-auto items-center ${enterAnimation} delay-2000 h-full mt-6`}
          >
            {projectCard.map(
              (
                { projectTitle, projectText, projectImage, projectLink },
                index
              ) => {
                return (
                  <Card
                    key={index + 1}
                    image={projectImage}
                    title={projectTitle}
                    text={projectText}
                    projectLink={projectLink}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
