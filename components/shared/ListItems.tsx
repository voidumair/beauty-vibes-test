import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock3 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export function ListItems() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-4"
      defaultValue="item-1"
    >
      <AccordionItem
        value="item-1"
        className="w-full bg-background-secondary rounded-[8px] py-3 px-4 border border-[#DEDEDE]"
      >
        <AccordionTrigger className="w-full flex justify-between items-center">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-primary-foreground md:text-base text-sm font-medium">
              Profhilo
            </h4>

            <h5 className="text-[#666666] md:text-sm text-xs font-normal">2 available</h5>
          </div>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem
        value="item-1"
        className="w-full bg-background-secondary rounded-[8px] py-3 px-4 border border-[#DEDEDE]"
      >
        <AccordionTrigger className="w-full flex justify-between items-center">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-primary-foreground md:text-base text-sm font-medium">
              Skincare
            </h4>

            <h5 className="text-[#666666] md:text-sm text-xs font-normal">1 available</h5>
          </div>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem
        value="item-1"
        className="w-full bg-background-secondary rounded-[8px] py-3 px-4 border border-[#DEDEDE]"
      >
        <AccordionTrigger className="w-full flex justify-between items-center">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-primary-foreground md:text-base text-sm font-medium">
              Chemical peel
            </h4>

            <h5 className="text-[#666666] md:text-sm text-xs font-normal">3 available</h5>
          </div>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem
        value="item-1"
        className="w-full bg-background-secondary rounded-[8px] py-3 px-4 border border-[#DEDEDE]"
      >
        <AccordionTrigger className="w-full flex justify-between items-center text-[#929292]">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-[#929292] md:text-base text-sm font-medium">
              Mesotherapy
            </h4>

            <h5 className="text-[#929292] md:text-sm text-xs font-normal">
              Not compatible
            </h5>
          </div>
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem
        value="item-1"
        className="w-full bg-background-secondary rounded-[8px] py-3 px-4 border border-[#DEDEDE]"
      >
        <AccordionTrigger className="w-full flex justify-between items-center text-[#929292]">
          <div className="w-full flex items-center justify-between">
            <h4 className="text-[#929292] md:text-base text-sm font-medium">
              Microneedling
            </h4>

            <h5 className="text-[#929292] md:text-sm text-xs font-normal">
              Not compatible
            </h5>
          </div>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}
