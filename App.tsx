
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import PracticePage from './pages/PracticePage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-light dark:bg-dark text-gray-800 dark:text-gray-200 font-sans">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/lessons/:lessonId" element={<LessonsPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
