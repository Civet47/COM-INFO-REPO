import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Motions } from './pages/Motions';
import { Guides } from './pages/Guides';
import { Assistant } from './pages/Assistant';
import { YoutubeAnalyzer } from './pages/YoutubeAnalyzer';
import { CaseFiles } from './pages/CaseFiles';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motions" element={<Motions />} />
          <Route path="/case-files" element={<CaseFiles />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/youtube" element={<YoutubeAnalyzer />} />
        </Routes>
      </Layout>
    </Router>
  );
}
