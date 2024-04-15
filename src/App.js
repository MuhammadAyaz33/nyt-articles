import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Articles from 'pages/articles';
import ArticleDetails from 'pages/articleDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article-details" element={<ArticleDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
