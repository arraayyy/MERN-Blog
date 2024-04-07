import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticlesList from './pages/ArticlesList';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto p-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticlesList />} /> 
          <Route path="/article/:name" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
