import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SurveyPage from "./pages/SurveyPage";
import { Toaster } from "@/components/ui/sonner";
import FeedbackPage from "./pages/FeedbackPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
