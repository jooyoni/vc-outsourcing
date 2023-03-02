import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Main from './pages/Main/Main';

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
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
