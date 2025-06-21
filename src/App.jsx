import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Join from './pages/Join'
import Community from './pages/Community'
import Projects from './pages/Projects'
import Ideas from './pages/Ideas'
import Blog from './pages/Blog'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/community" element={<Community />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App