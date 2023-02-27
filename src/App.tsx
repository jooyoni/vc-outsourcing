import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Main from './pages/Main/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
