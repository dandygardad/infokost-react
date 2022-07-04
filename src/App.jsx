import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Kost from './pages/Kost'
import Admin from './pages/Admin'

import Error404 from './pages/error/Error404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/kost/:id" element={<Kost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
