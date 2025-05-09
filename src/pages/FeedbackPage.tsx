import { Textarea } from "@/components/ui/textarea";
import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import SectionLayout from "@/components/SectionLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const FeedbackPage = () => {
  const [value, setValue] = useState("");

  const handleSubmitClick = () => {
    if (!value) {
      return;
    }
    toast.success("Submitted");
    setValue('')
  };

  return (
    <PageLayout>
      <PageHeader />
      <SectionLayout>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <div>
              <h2 className="text-2xl font-bold">
                🗣️ Ibahagi ang Iyong Karanasan
              </h2>
              <p className="text-slate-500">
                Your voice matters - even if we don't know your name.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">
                📌 Paano ka naaapektuhan ng social media sa iyong kalusugang
                pangkaisipan o sa pagpapahalaga mo sa sarili?
              </h3>
              <p className="text-slate-500">
                Kung gusto mong maglabas ng saloobin, kwento, o kahit simpleng
                komento—malaya kang magsulat dito. Walang tama o maling sagot.
                Lahat ng sasabihin mo ay makakatulong sa mas malawak na
                pag-unawa.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Textarea
              placeholder="Halimbawa: Mas napapansin kong naapektuhan ang aking self-esteem sa tuwing nagba-browse ako sa social media..."
              className="h-full w-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button className="w-full cursor-pointer" onClick={handleSubmitClick}>
              Submit
            </Button>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default FeedbackPage;
