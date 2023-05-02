import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import ScrollTop from './components/ScrollTop/ScrollTop';
import About from './pages/About/About';
import Board from './pages/Board/Board';
import Family from './pages/Family/Family';
import IR from './pages/IR/IR';
import Main from './pages/Main/Main';
import Portfolio from './pages/Portfolio/Portfolio';
import Team from './pages/Team/Team';
import { RootState } from './store/store';

function App() {
  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
  useEffect(() => {
    window.addEventListener('resize', appHeight);
    appHeight();
    return () => window.removeEventListener('resize', appHeight);
  }, []);
  const stewardshipIsOpen = useSelector(
    (state: RootState) => state.stewardship.value,
  );
  return (
    <div>
      <BrowserRouter>
        {stewardshipIsOpen && <Modal />}
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ir" element={<IR />} />
          <Route path="/board" element={<Board />} />
          <Route path="/family" element={<Family />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
