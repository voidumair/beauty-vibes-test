import { Clock3 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Summery = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h5 className="text-primary-foreground md:text-lg text-base font-medium">Summary</h5>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text-primary-foreground md:text-base text-sm font-medium">
              Ameela eyes/tear through
            </h4>
            <div className="flex items-center gap-1 text-secondary-foreground">
              <Clock3 size={16} />
              <span className="text-xs font-normal">45 min</span>
            </div>
          </div>
          <h5 className="text-primary-foreground md:text-base text-sm font-medium">
            NOK 690
          </h5>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text-primary-foreground md:text-base text-sm font-normal">
              Add-on: Recovery
            </h4>
            <div className="flex items-center gap-1 text-secondary-foreground">
              <Clock3 size={16} />
              <span className="text-xs font-normal">15 min</span>
            </div>
          </div>
          <h5 className="text-primary-foreground md:text-base text-sm font-medium">
            NOK 80
          </h5>
        </div>
        <div className="w-full h-px bg-[#D9D9D9] mt-3" />
      </div>
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h4 className="text-secondary-foreground md:text-sm text-xs font-normal">
            Duration
          </h4>
          <div className="flex items-center gap-1 text-primary-foreground">
            <span className="md:text-base text-sm font-medium">1 hour</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-stretch">
          <h4 className="text-secondary-foreground md:text-sm text-xs font-normal text-right">
            Total
          </h4>
          <h5 className="text-primary-foreground md:text-lg text-base font-medium text-right">
            NOK 690
          </h5>
        </div>
      </div>
      <Button className="w-full rounded-[8px] bg-black text-white text-base font-medium">Continue</Button>
    </div>
  );
};

export default Summery;
