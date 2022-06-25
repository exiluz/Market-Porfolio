import React, { ReactElement } from "react";
import IProject from "../types/project";
import Link from "next/link";
import Image from "next/image";

const Project = (props: { content: IProject }): ReactElement => {
  const { imageUrl, title, slug, snippet } = props.content;

  return (
    <Link href={`/projects/${slug}`} passHref>
      <a>
        <div className="relative w-full h-60 sm:h-60 md:h-44 rounded mb-5 overflow-hidden">
          <Image src={imageUrl} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-primary rounded opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center font-bold text-white text-xl">
            Read more
          </div>
        </div>
        <h3 className="mb-2 text-xl">{title}</h3>
        <p>{snippet}</p>
      </a>
    </Link>
  );
};

export default Project;
