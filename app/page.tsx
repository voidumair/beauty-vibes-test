import Dashboard from "@/components/home/Dashboard";
import Heading from "@/components/shared/Heading";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-background font-dm-sans">
      <div className="w-full max-w-[1050px] h-full flex flex-col items-center pt-6 pb-12 md:px-8 px-3 gap-8">
        <Heading
          title="Customize Your Appointment"
          description="You can add extra services to your selected treatment"
        />
        <Dashboard/>
      </div>
    </div>
  );
}
