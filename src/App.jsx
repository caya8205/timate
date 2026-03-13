import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VisionMission from './pages/VisionMission';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import MemberProfile from './pages/MemberProfile';
import NotFound from './pages/NotFound';
import PageWrapper from './components/PageWrapper';
import CustomHeaderBg from './components/CustomHeaderBg';
import ScrollToTop from './components/ScrollToTop';
import AIChatWidget from './components/AIChatWidget';
import { Analytics } from '@vercel/analytics/react';

// Create a component for the animated routes to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/vandm" element={<PageWrapper><VisionMission /></PageWrapper>} />
        <Route path="/project" element={<PageWrapper><Project /></PageWrapper>} />
        <Route path="/project/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/member/:id" element={<PageWrapper><MemberProfile /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ScrollToTop />
        <CustomHeaderBg />
        <Navbar />
        <AIChatWidget />
        <Analytics />
        <AnimatedRoutes />
        <footer className="py-8 text-center text-gray-400 dark:text-gray-500 text-sm mt-12 border-t dark:border-gray-800">
          <p>&copy; 2024 Jengset Dev Group. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
