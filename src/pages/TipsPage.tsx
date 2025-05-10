import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import SectionLayout from "@/components/SectionLayout";
import TipCard from "@/components/TipCard";
import { tips } from "@/data/tips";

const TipsPage = () => {
  return (
    <PageLayout>
      <PageHeader />
      <SectionLayout>
        <div className="grid gap-1">
          <h1 className="text-4xl text-center font-bold">
            🧠 Mental Health Awareness Tips
          </h1>
          <p className="text-slate-500 text-center">
            Simple steps, big impact.
          </p>
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-semibold">
            📌 Alagaan ang iyong sarili sa gitna ng digital na mundo.
          </h2>
          <p className="md:max-w-1/2">
            Narito ang ilang mga paalala at tips para mapanatiling malusog ang
            iyong isipan habang aktibo sa social media at sa pang-araw-araw na
            buhay bilang estudyante.
          </p>
        </div>
        {/* Tips grid */}
        <div className="grid gap-2 sm:grid-cols-2">
          {tips.map((tip) => (
            // Tip card
            <TipCard tip={tip} key={tip.title}/>
          ))}
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default TipsPage;
