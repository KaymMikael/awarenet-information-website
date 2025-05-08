import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SurveyPage from "./pages/SurveyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/survey" element={<SurveyPage/>}/>
    </Routes>
  );
};

export default App;
