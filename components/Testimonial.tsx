import ITestimonial from "../types/testimonial";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const Testimonial = (props: { content: ITestimonial }) => {
  const { name, position, description, imageUrl } = props.content;
  return (
    <figure className="relative pt-2 text-xl leading-8 max-w-2xl">
      {description}

      <Icon
        icon="bxs:quote-alt-left"
        className="text-7xl text-primary opacity-10 absolute -top-3 -left-4"
      />

      <figcaption className="flex items-center mt-5 text-base">
        <Image
          className="rounded-full"
          src={imageUrl}
          width="50"
          height="50"
          alt={`photo of ${name}`}
        />
        <div className="ml-5">
          <div>{name}</div>
          <div className="text-neutral-400">{position}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default Testimonial;
