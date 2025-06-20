import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Trading from './Trading';
import FrontPage from './FrontPage';
import ProtectedRoute from './ProtectedRoute'; // ✅ import
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TradesTracker from './TradesTracker';
import Portfolio from './Portfolio';
import Features from './Features';
import WhyFinPort from './WhyFinPort';
import Pricing from './Pricing';
import Blog from './Blog';
import Market from './Market';
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
        <Route
          path="/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trades"
          element={
            <ProtectedRoute>
              <TradesTracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/why" element={<WhyFinPort />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
