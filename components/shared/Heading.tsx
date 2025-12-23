import React from "react";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return <div className="w-full flex flex-col gap-1">
    <h1 className="font-medium md:text-[32px] text-[24px] text-primary-foreground w-full text-center">{title}</h1>
    <p className="font-normal md:text-lg text-base text-secondary-foreground w-full text-center">{description}</p>
  </div>;
};

export default Heading;
