import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock3 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export function MainItem() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem
        value="item-1"
        className="w-full bg-secondary rounded-[8px] py-3 px-4 border border-primary"
      >
        <AccordionTrigger className="w-full flex justify-between items-center">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-primary-foreground md:text-base text-sm font-medium">
                Ameela eyes/tear through
              </h4>
              <div className="flex items-center gap-1 text-secondary-foreground">
                <Clock3 size={16} />
                <span className="text-xs font-normal">45 min</span>
              </div>
            </div>
            <div className="flex flex-col items-stretch">
              <h5 className="text-primary-foreground md:text-sm text-xs font-medium line-through text-right">
                NOK 890
              </h5>
              <h4 className="text-primary md:text-base text-sm font-medium text-right">
                NOK 690
              </h4>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 pl-4 pt-4 text-secondary-foreground">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-secondary-foreground md:text-base text-sm font-normal">
                Add-on: Extra care
              </h4>
              <div className="flex items-center gap-1 text-secondary-foreground">
                <Clock3 size={16} />
                <span className="text-xs font-normal">10 min</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h4 className="text-secondary-foreground md:text-base text-sm font-normal">
                NOK 690
              </h4>
              <Checkbox className="border border-[#949494]"/>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-secondary-foreground md:text-base text-sm font-normal">
                Add-on: Booster
              </h4>
              <div className="flex items-center gap-1 text-secondary-foreground">
                <Clock3 size={16} />
                <span className="text-xs font-normal">15 min</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h4 className="text-secondary-foreground md:text-base text-sm font-normal">
                NOK 120
              </h4>
              <Checkbox className="border border-[#949494]"/>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-secondary-foreground md:text-base text-sm font-normal">
                Add-on: Recovery
              </h4>
              <div className="flex items-center gap-1 text-secondary-foreground">
                <Clock3 size={16} />
                <span className="text-xs font-normal">15 min</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h4 className="text-secondary-foreground md:text-base text-sm font-normal">
                NOK 80
              </h4>
              <Checkbox checked className="border border-[#949494]"/>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
