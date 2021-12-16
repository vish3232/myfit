import logo from './logo.svg';
import './App.css';
import TopBarHeader from './Component/ReusableComponent/TopBarHeader/TopBarHeader';
import Dashboard from './Component/Screen/Dashboard/Dashboard';
function App() {
  return (
    <div  >
     <TopBarHeader/>
     <Dashboard/>
    </div>
  );
}

export default App;
