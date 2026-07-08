import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Guide from './pages/Guide.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      {/* The red thread — scroll progress as a strand of web */}
      <motion.div className="thread-progress" style={{ scaleX }} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      <Footer />
    </>
  );
}
