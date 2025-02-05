import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import MarketplaceGrid from './Components/MarketplaceGrid';
import UserView from './Components/UserView';

const App = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Sidebar />
      <Routes>
        {/* Redirect root to /marketplace */}
        <Route path="/" element={<Navigate replace to="/marketplace" />} />
        <Route path="/marketplace" element={<MarketplaceGrid />} />
        <Route path="/user/:userId" element={<UserView />} />
      </Routes>
    </div>
  );
};

export default App;