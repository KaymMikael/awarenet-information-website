import NotFoundIllustration from "@/assets/images/NotFoundIllustration-removebg-preview.png";
import PageLayout from "@/components/PageLayout";
import PageLink from "@/components/PageLink";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center pt-24 flex-col">
        <div className="max-w-[256px]">
          <img src={NotFoundIllustration} alt="Page not found illustration" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-bold">This page isn't available. Sorry about that.</p>
          <PageLink text="Back to Home Page" to="/" />
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
