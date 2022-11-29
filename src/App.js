import logo from './logo.svg';
import './App.css';
import TopBarHeader from './Component/ReusableComponent/TopBarHeader/TopBarHeader';
import Dashboard from './Component/Screen/Dashboard/Dashboard';
import Workout from './Component/ReusableComponent/Workout/Workout';
import AddExercise from './Component/Screen/AddExercise/AddExercise';
/* Hi there checking detials */
function App() {
  return (
    <div style={{width:'100%',height:'100%'}} >
    <AddExercise/>
    </div>
  );
}

export default App;
