import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import ClickSpark from "./components/ClickSpark";
import SplashCursor from "./components/SplashCourser";

const App = () => {
  return (
    <Router>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={20}
        sparkRadius={60}
        sparkCount={8}
        duration={600}
      >
        <main className="grid min-h-screen lg:max-h-screen  grid-cols-1 lg:grid-cols-12 grid-rows-10 lg:grid-rows-6 gap-4 p-4 bg-[#111] font-[Gilroy]">
          <SplashCursor />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </ClickSpark>
    </Router>
  );
};

export default App;
