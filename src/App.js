import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Colors from './Colors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Colors />
      </BrowserRouter>
    </div>
  );
}

export default App;
