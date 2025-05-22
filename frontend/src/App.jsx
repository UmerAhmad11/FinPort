import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Trading from './Trading';
import ProtectedRoute from './ProtectedRoute'; // ✅ import
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/trade"
          element={
            <ProtectedRoute>
              <Trading />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
