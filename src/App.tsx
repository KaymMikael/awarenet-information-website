import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SurveyPage from "./pages/SurveyPage";
import { Toaster } from "@/components/ui/sonner";
import FeedbackPage from "./pages/FeedbackPage";
import TipsPage from "./pages/TipsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
