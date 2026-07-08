import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Nav from './components/Nav.jsx';
import SilkTrail from './components/SilkTrail.jsx';
import Home from './pages/Home.jsx';
import Guide from './pages/Guide.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <>
      <motion.div className="thread-progress" style={{ scaleX }} />
      <SilkTrail />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </>
  );
}
