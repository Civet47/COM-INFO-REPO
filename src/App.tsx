import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Motions } from './pages/Motions';
import { Guides } from './pages/Guides';
import BPGuide from './components/BPGuide';
import { Assistant } from './pages/Assistant';
import { YoutubeAnalyzer } from './pages/YoutubeAnalyzer';
import { CaseFiles } from './pages/CaseFiles';
import { CaseConstruction } from './pages/CaseConstruction';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motions" element={<Motions />} />
          <Route path="/case-files" element={<CaseFiles />} />
          <Route path="/case-construction" element={<CaseConstruction />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/bp" element={<BPGuide />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/youtube" element={<YoutubeAnalyzer />} />
        </Routes>
      </Layout>
    </Router>
  );
}
