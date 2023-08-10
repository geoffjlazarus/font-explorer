import './App.css';
import TypeViewer from './views/TypeViewer';
import Header from './views/Header';
import FontPairs from './views/FontPairs';

function App() {
  return (
    <div className="App">
      <Header />
      <TypeViewer />
      <FontPairs />
    </div>
  );
}

export default App;
