import './App.css';
import MarketplaceGrid from './Components/MarketplaceGrid';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Sidebar />
      <MarketplaceGrid />
    </div>
  );
}

export default App;
