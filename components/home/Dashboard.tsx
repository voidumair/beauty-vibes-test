import React from "react";
import { MainItem } from "../shared/MainItem";
import Filters from "../shared/Filters";
import { ListItems } from "../shared/ListItems";
import Summery from "./Summery";

const Dashboard = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-center items-start gap-6">
      <div className="w-full md:w-[60%] bg-background-secondary rounded-[8px] py-8 md:px-6 px-3 flex flex-col gap-6">
        <h5 className="text-primary-foreground md:text-lg text-base font-medium">
          Selected treatment
        </h5>
        <MainItem />
        <h5 className="text-primary-foreground md:text-lg text-base font-medium">
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
      <div className="w-full md:w-[40%] bg-background-secondary rounded-[8px] py-8 md:px-6 px-3">
        <Summery />
      </div>
    </div>
  );
};

export default Dashboard;
