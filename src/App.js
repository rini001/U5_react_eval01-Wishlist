
import './App.css';
import { Vegetables } from './components/Vegetables';
import { Wishlist } from './components/Wishlist';

function App() {
  return (
    <div className="App">
     <Wishlist/>
     <Vegetables/>
    </div>
  );
}

export default App;
