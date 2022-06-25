import IService from "../types/service";
import React from "react";

const Service = (props: { content: IService }) => {
  const { title, description, emoji } = props.content;

  return (
    <div className="p-8 md:p-5 bg-neutral-50">
      {emoji && (
        <span className="text-2xl md:text-3xl mb-3 block">{emoji}</span>
      )}
      <h3 className="text-lg mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;
