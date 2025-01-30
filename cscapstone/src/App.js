import './App.css';
import MarketplaceGrid from './Components/MarketplaceGrid';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="pt-[56px]">
     <div className="App" style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
       <Sidebar />
       <MarketplaceGrid />
       <Navbar />
     </div>
    </div>
  );
}

export default App;
