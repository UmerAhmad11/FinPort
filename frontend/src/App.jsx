import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Trading from './Trading';
import FrontPage from './FrontPage';
import ProtectedRoute from './ProtectedRoute'; // ✅ import
import Deposit from './Deposit';
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
        <Route
          path="/frontpage"
          element={
            <ProtectedRoute>
              <FrontPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <ProtectedRoute>
              <Deposit />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
