import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { DashboardHome } from './pages/DashboardHome';
import { HealView } from './pages/HealView';
import { GrowView } from './pages/GrowView';
import { BlossomView } from './pages/BlossomView';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="heal" element={<HealView />} />
            <Route path="grow" element={<GrowView />} />
            <Route path="blossom" element={<BlossomView />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
