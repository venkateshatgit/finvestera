import './App.css';
import BottomWindow from './components/bottom-window/bottom-window';
import MiddleWindow from './components/middle-window/middle-window';
import TopWindow from './components/top-window/top-window';

function App() {
  return (
    <div className="App">
      
      <TopWindow/>
      <MiddleWindow/>
      {/* <BottomWindow/> */}
      
    </div>
  );
}

export default App;
