import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import SectionLayout from "@/components/SectionLayout";
import { useEffect, useMemo, useState } from "react";
import { questionsList } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import QuestionItem from "@/components/QuestionItem";

const SurveyPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const questions = useMemo(() => {
    return questionsList[currentPage - 1].items;
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSubmitClick = () => {
    toast.success("Submitted");
    setTimeout(() => {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2 * 1000);
  };

  return (
    <PageLayout>
      <PageHeader />
      <SectionLayout>
        {/* Questions */}
        <div className="grid gap-8">
          {questions.map((q) => (
            <QuestionItem q={q} key={q.label} />
          ))}
        </div>
        {/* Submit Button */}
        {currentPage === questionsList.length && (
          <Button
            className="cursor-pointer mt-4 mx-auto w-full sm:max-w-[348px]"
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        )}
        {/* Navigation Buttons */}
        <div className="ms-auto flex gap-4">
          <Button
            variant={"outline"}
            className="cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ChevronLeft /> Prev
          </Button>
          <Button
            className="cursor-pointer"
            variant={"outline"}
            disabled={currentPage === questionsList.length}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next <ChevronRight />
          </Button>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default SurveyPage;
