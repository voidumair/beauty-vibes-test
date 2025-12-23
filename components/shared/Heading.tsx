import React from "react";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return <div className="w-full flex flex-col gap-1">
    <h1 className="font-medium text-[32px] text-primary-foreground w-full text-center">{title}</h1>
    <p className="font-normal text-lg text-secondary-foreground w-full text-center">{description}</p>
  </div>;
};

export default Heading;
