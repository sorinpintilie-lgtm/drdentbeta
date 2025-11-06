import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Fees from './pages/Fees'
import FAQ from './pages/FAQ'
import Resources from './pages/Resources'
import Chat from './pages/Chat'

/**
 * Main App component with routing configuration
 * Uses React Router v6 for client-side routing
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="fees" element={<Fees />} />
        <Route path="team" element={<Team />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  )
}

export default App