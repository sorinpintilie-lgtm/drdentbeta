import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import StomatologiePediatrica from './pages/StomatologiePediatrica';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Fees from './pages/Fees';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import ResourceArticle from './pages/ResourceArticle';
import Chat from './pages/Chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicii" element={<Services />} />
        <Route path="stomatologie-pediatrica" element={<StomatologiePediatrica />} />
        <Route path="preturi" element={<Fees />} />
        <Route path="despre-noi" element={<Team />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/:slug" element={<ResourceArticle />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
