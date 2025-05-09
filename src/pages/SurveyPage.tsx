import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import SectionLayout from "@/components/SectionLayout";

const SurveyPage = () => {
  return (
    <PageLayout>
      <PageHeader />
      <SectionLayout>
        <div>
          <h2>1.1 Oras ng Paggamit</h2>
          <div>
            <div>
              <p>
                Karaniwan akong gumagamit ng social media ng higit sa tatlong
                (3) oras kada araw.
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default SurveyPage;
