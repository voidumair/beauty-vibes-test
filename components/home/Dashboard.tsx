import React from "react";
import { MainItem } from "../shared/MainItem";
import Filters from "../shared/Filters";
import { ListItems } from "../shared/ListItems";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-start gap-6">
      <div className="w-[60%] bg-background-secondary rounded-[8px] py-8 px-6 flex flex-col gap-6">
        <h5 className="text-primary-foreground text-lg font-medium">
          Selected treatment
        </h5>
        <MainItem />
        <h5 className="text-primary-foreground text-lg font-medium">
          Add additional treatments
        </h5>
        <Filters
          items={[
            "All",
            "Skin",
            "Brows",
            "Express",
            "Pelvic floor",
            "Injections",
            "Lashes",
            "Permanent makeup",
            "Waxing",
          ]}
        />
        <ListItems />
      </div>
      <div className="w-[40%] bg-background-secondary rounded-[8px] py-8 px-6"></div>
    </div>
  );
};

export default Dashboard;
